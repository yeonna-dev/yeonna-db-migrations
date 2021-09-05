const tableName = 'users_bits';
const columnName = 'tag_ids';

/** @param {import('knex').Knex} knex */
exports.up = async function(knex)
{
  await knex.schema.alterTable(tableName, table =>
  {
    table.text(columnName).index();
  });
};

/** @param {import('knex').Knex} knex */
exports.down = async function(knex)
{
  await knex.schema.alterTable(tableName, table => table.dropColumn(columnName));
};
