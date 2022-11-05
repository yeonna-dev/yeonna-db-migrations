import fs from 'fs';
import knex from 'knex';
import nanoidGood from 'nanoid-good';
import en from 'nanoid-good/locale/en';
import newDatabase from '../../connection';

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

  /** @type {Record<string, User>} */
  const userDataMap = {};

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  /* Insert Users */
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  const userIdsToInsert = [];
  const newUserIds = [];
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

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  /* Insert Obtainables */
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  const obtainablesTable = newDatabase('obtainables');
  const twicepediaContext = 'discord:533510632985853953';
  console.log('Inserting user obtainables...');

  /* Delete all obtainables, which will be reinserted aftewards. */
  await obtainablesTable.where({ context: twicepediaContext }).delete();

  /**
   * @typedef Obtainable
   * @property {string} user_id
   * @property {string} amount
   * @property {boolean} is_collectible
   */
  /** @type {Obtainable[]} */
  const obtainablesToInsert = [];
  for(const { new_id, coins, candybongs } of Object.values(userDataMap))
  {
    if(coins > 0)
      obtainablesToInsert.push({
        user_id: new_id,
        amount: coins,
        is_collectible: false,
        context: twicepediaContext,
      });

    if(candybongs > 0)
      obtainablesToInsert.push({
        user_id: new_id,
        amount: candybongs,
        is_collectible: true,
        context: twicepediaContext,
      });
  }

  await obtainablesTable.insert(obtainablesToInsert);

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  /* Insert Items */
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  console.log('Inserting users items...');
  // const inventoriesTable = newDatabase('inventories');
  // await inventoriesTable.where({ context: twicepediaContext }).delete();

  /* Loop through each user data, parse the user items, loop through the item and make an array
    of objects of each item with the other user data. */


  console.log('Inserting user collections...');

  console.log('Done');

  process.exit();
})();
