const tableName = 'discord_role_requests';
const notesColumnName = 'notes';

/** @param {import('knex').Knex} knex */
exports.up = async function(knex)
{
  await knex.schema.alterTable(tableName, table =>
  {
    table.text(notesColumnName);
  });
};

/** @param {import('knex').Knex} knex */
exports.down = async function(knex)
{
  await knex.schema.alterTable(tableName, table => table.dropColumn(notesColumnName));
};
