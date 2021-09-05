const tableName = 'users_bits';
const columnName = 'tag_ids';

/** @param {import('knex').Knex} knex */
exports.up = async function(knex)
{
  await knex.schema.alterTable(tableName, table =>
  {
    table.string(columnName, 15)
      .index()
      .references('id')
      .inTable('tags');
  });
};

/** @param {import('knex').Knex} knex */
exports.down = async function(knex)
{
  await knex.schema.alterTable(tableName, table => table.dropColumn(columnName));
};
