const tableName = 'inventories';

/** @param {import('knex').Knex} knex */
exports.up = async function(knex)
{
  if(await knex.schema.hasTable(tableName))
    return;

  await knex.schema.createTable(tableName, table =>
  {
    table.increments('pk_id');

    table.string('user_id', 15).index().notNullable();
    table.string('item_code').index().notNullable();
    table.string('user_id_item_code').unique().notNullable();;
    table.string('context').index();
    table.integer('amount').defaultTo(0);

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
