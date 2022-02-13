const collectionsTable = 'collections';
const collectionsItemsTable = 'collections_items';

/** @param {import('knex').Knex} knex */
exports.up = async function(knex)
{
  const collections = [
    { code: 'swt', name: 'Sweet', fixed_bonus: 100 },
    { code: 'mrch', name: 'Merch', fixed_bonus: 500 },
    { code: 'rare', name: 'Rare', fixed_bonus: 1500 },
    { code: 'jyp', name: 'JYP', fixed_bonus: 5000 },
    { code: 'lgnd', name: 'Legendary', fixed_bonus: 10000 },
  ];

  await knex(collectionsTable).insert(collections);

  const collectionsItems = [
    { collection_code: 'swt', item_code: 'c' },
    { collection_code: 'swt', item_code: 'j' },
    { collection_code: 'swt', item_code: 'sb' },
    { collection_code: 'mrch', item_code: 'a' },
    { collection_code: 'mrch', item_code: 'p' },
    { collection_code: 'mrch', item_code: 'ph' },
    { collection_code: 'mrch', item_code: 'ps' },
    { collection_code: 'rare', item_code: 'mc' },
    { collection_code: 'rare', item_code: 'jk' },
    { collection_code: 'rare', item_code: 'sb' },
    { collection_code: 'rare', item_code: 'cm' },
    { collection_code: 'rare', item_code: 'sx' },
    { collection_code: 'rare', item_code: 'ck' },
    { collection_code: 'rare', item_code: 'th' },
    { collection_code: 'rare', item_code: 'bw' },
    { collection_code: 'rare', item_code: 'sw' },
    { collection_code: 'jyp', item_code: 'a' },
    { collection_code: 'jyp', item_code: 'jkb' },
    { collection_code: 'jyp', item_code: 'ptp' },
    { collection_code: 'lgnd', item_code: 'jkb' },
    { collection_code: 'lgnd', item_code: 'ptp' },
    { collection_code: 'lgnd', item_code: 'idl' },
    { collection_code: 'lgnd', item_code: 'sxt' },
    { collection_code: 'lgnd', item_code: 'psw' },
    { collection_code: 'lgnd', item_code: 'yoy' },
    { collection_code: 'lgnd', item_code: 'chj' },
    { collection_code: 'lgnd', item_code: 'lkc' },
    { collection_code: 'lgnd', item_code: 'jhp' },
    { collection_code: 'lgnd', item_code: 'chd' },
    { collection_code: 'lgnd', item_code: 'mmc' },
    { collection_code: 'lgnd', item_code: 'dbc' },
    { collection_code: 'lgnd', item_code: 'gci' },
    { collection_code: 'lgnd', item_code: 'kng' },
    { collection_code: 'lgnd', item_code: 'sgt' },
    { collection_code: 'lgnd', item_code: 'jyl' },
    { collection_code: 'lgnd', item_code: 'mnl' }
  ];

  await knex(collectionsItemsTable).insert(collectionsItems);
};

/** @param {import('knex').Knex} knex */
exports.down = async function(knex)
{
  await knex(collectionsTable).truncate();
  await knex(coliteta).truncate();
};
