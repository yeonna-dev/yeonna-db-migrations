import fs from 'fs';
import knex from 'knex';
import newDatabase from '../../connection';
import en from 'nanoid-good/locale/en';
import nanoidGood from 'nanoid-good';

const nanoid = nanoidGood.nanoid(en);

const databasePath = './twice-station.sqlite';
if(!fs.existsSync(databasePath))
  throw new Error('No old database found');

const oldDatabase = knex({
  client: 'better-sqlite3',
  connection: { filename: databasePath }
});

(async () =>
{
  console.log('Reading old database...');
  /**
   * @typedef User
   * @property {string} discord_id
   * @property {number} coins
   * @property {number} candybongs
   * @property {string} items
   * @property {string} collections
   * @property {string} new_id
   */
  /** @type {User[]} */
  const oldData = await oldDatabase('users');
  const userIdsToInsert = [];
  const newUserIds = [];

  /** @type {Record<string, User>} */
  const userDataMap = {};
  for(const userData of oldData)
  {
    const userId = userData.discord_id;
    if(userData.coins > 0 || userData.candybongs > 0)
      userIdsToInsert.push(userId);

    if(!userDataMap[userId])
      userDataMap[userId] = userData;
  }

  console.log('Inserting users...');
  const usersTable = newDatabase('users');

  /**
   * @typedef NewUser
   * @property {string} id
   * @property {string} discord_id
   */
  /** @type {NewUser[]} */
  const existingUsers = await usersTable.whereIn('discord_id', userIdsToInsert);
  for(const { id, discord_id } of existingUsers)
  {
    userIdsToInsert.splice(userIdsToInsert.indexOf(discord_id), 1);
    newUserIds.push(id);
    userDataMap[discord_id].new_id = id;
  }

  if(userIdsToInsert.length > 0)
  {
    console.log('Inserting users...');
    const usersInsertData = userIdsToInsert.map(discord_id => ({ id: nanoid(15), discord_id }));
    /** @type {NewUser[]} */
    const insertedUsers = await usersTable.insert(usersInsertData).returning('*');
    for(const { id, discord_id } of insertedUsers)
    {
      newUserIds.push(id);
      userDataMap[discord_id].new_id = id;
    }
  }

  const obtainablesTable = newDatabase('obtainables');
  const twicepediaContext = 'discord:533510632985853953';
  console.log('Inserting user obtainables...');

  /**
   * @typedef Obtainable
   * @property {string} user_id
   * @property {string} amount
   * @property {boolean} is_collectible
   */
  /** @type {Obtainable[]} */
  const existingObtainables = await obtainablesTable.where({ context: twicepediaContext });
  const existingPointsUserIds = [];
  for(const { user_id, is_collectible } of existingObtainables)
  {
    if(!existingPointsUserIds.includes(user_id))
      existingPointsUserIds.push(user_id);

    const user = userDataMap[user_id];
    const newObtainables = is_collectible ? user.candybongs : user.coins;
    await obtainablesTable
      .where({ user_id })
      .andWhere({ is_collectible })
      .andWhere({ context: twicepediaContext })
      .update({ amount: newObtainables });
  }

  const obtainablesToInsert = [];
  for(const { new_id, coins, candybongs } of Object.values(userDataMap))
  {
    obtainablesToInsert.push({ user_id: new_id, amount: coins, is_collectible: false });
    obtainablesToInsert.push({ user_id: new_id, amount: candybongs, is_collectible: false });
  }

  console.log('Inserting users items...');

  console.log('Inserting user collections...');

  console.log('Done');

  process.exit();
})();
