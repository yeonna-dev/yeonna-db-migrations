const tableName = 'discord_role_requests';

/** @param {import('knex').Knex} knex */
exports.up = async function(knex)
{
  if(await knex.schema.hasTable(tableName))
    return;

  await knex.schema.createTable(tableName, table =>
  {
    table.increments('pk_id');

    table.string('request_id').index().notNullable();
    table.string('requester_discord_id').index().notNullable();
    table.string('guild_id').notNullable();
    table.string('role_name').index();
    table.string('role_color').index();
    table.enum('status', ['PENDING', 'APPROVED', 'DECLINED']).index().defaultTo('PENDING');
    table.string('approver_discord_id').index();

    table.dateTime('created_at').index().defaultTo(knex.fn.now());
    table.dateTime('updated_at').index();
    table.dateTime('deleted_at').index();
  });
};

/** @param {import('knex').Knex} knex */
exports.down = async function(knex)
{
  await knex.schema.dropTableIfExists(tableName);
};
