const tableName = 'collections';
const newColumnName = 'context';

/** @param {import('knex').Knex} knex */
exports.up = async function(knex)
{
  await knex.schema.alterTable(tableName, table =>
  {
    table.string(newColumnName).index();
  });
};

/** @param {import('knex').Knex} knex */
exports.down = async function(knex)
{
  await knex.schema.alterTable(tableName, table =>
  {
    table.dropColumn(newColumnName);
  });
};
