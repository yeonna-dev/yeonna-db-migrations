const table = 'items';
const context = 'discord:504135117296500746';

/** @param {import('knex').Knex} knex */
exports.up = async function(knex)
{
  const priceCategoryMap = [
    { price: 10, category: 'Common' },
    { price: 100, category: 'Uncommon' },
    { price: 200, category: 'Merch' },
    { price: 750, category: 'Rare' },
    { price: 4000, category: 'Legendary' },
  ];

  const categories = await knex('categories');
  const whenClauses = [];
  for(const { id, name } of categories)
  {
    for(const { price, category } of priceCategoryMap)
    {
      if(category === name)
      {
        whenClauses.push(`
          WHEN price = ${price}
          THEN '${id}'
        `);
        break;
      }
    }
  }

  if(whenClauses.length === 0)
    return [];

  const updateQuery = `(CASE ${whenClauses.join(' ')} END)`;
  await knex(table)
    .update({ category_id: knex.raw(updateQuery) })
    .where({ context });
};

/** @param {import('knex').Knex} knex */
exports.down = async function(knex)
{
  await knex(table)
    .update({ category_id: null })
    .where({ context });
};
