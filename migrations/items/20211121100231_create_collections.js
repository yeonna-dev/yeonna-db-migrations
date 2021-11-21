const tableName = 'collections';

/** @param {import('knex').Knex} knex */
exports.up = async function(knex)
{
  if(await knex.schema.hasTable(tableName))
    return;

  await knex.schema.createTable(tableName, table =>
  {
    table.increments('pk_id');

    table.string('code').notNullable().unique();
    table.string('name').notNullable().index();
    table.decimal('fixed_bonus').defaultTo(0);
    table.text('items');

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
