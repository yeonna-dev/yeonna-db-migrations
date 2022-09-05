const en = require('nanoid-good/locale/en');
const nanoid = require('nanoid-good').nanoid(en);
const tableName = 'categories';

/** @param {import('knex').Knex} knex */
exports.up = async function(knex)
{
  const categories = [
    { id: nanoid(15), name: 'Common' },
    { id: nanoid(15), name: 'Uncommon' },
    { id: nanoid(15), name: 'Merch' },
    { id: nanoid(15), name: 'Rare' },
    { id: nanoid(15), name: 'Legendary' },
  ];

  await knex(tableName).insert(categories);
};

/** @param {import('knex').Knex} knex */
exports.down = async function(knex)
{
  await knex(tableName).truncate();
};
