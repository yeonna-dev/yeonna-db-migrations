const en = require('nanoid-good/locale/en');
const nanoid = require('nanoid-good').nanoid(en);
const items = require('../datasets/twicepedia/items.json');
const collections = require('../datasets/twicepedia/collections.json');

const itemsTable = 'items';
const collectionsTable = 'collections';
const collectionsItemsTable = 'collections_items';
const categoriesTable = 'categories';

const newCategoryNames = [
  'Nice',
  'Good',
  'Amazing',
];

const categoryNames = [
  ...newCategoryNames,
  'Rare',
  'Legendary',
];

const candies = [
  items['Nayeon Candy'],
  items['Jeongyeon Candy'],
  items['Momo Candy'],
  items['Sana Candy'],
  items['Jihyo Candy'],
  items['Mina Candy'],
  items['Dahyun Candy'],
  items['Chaeyoung Candy'],
  items['Tzuyu Candy'],
];

const jellies = [
  items['Nayeon Jelly'],
  items['Jeongyeon Jelly'],
  items['Momo Jelly'],
  items['Sana Jelly'],
  items['Jihyo Jelly'],
  items['Mina Jelly'],
  items['Dahyun Jelly'],
  items['Chaeyoung Jelly'],
  items['Tzuyu Jelly'],
];

const plushies = [
  items['Nayeon Bunny Plushie'],
  items['Jeongyeon Dragon Plushie'],
  items['Momo Pig Plushie'],
  items['Sana Squirrel Plushie'],
  items['Jihyo Unicorn Plushie'],
  items['Mina Penguin Plushie'],
  items['Dahyun Eagle Plushie'],
  items['Chaeyoung Tiger Plushie'],
  items['Tzuyu Puppy Plushie'],
];

const albums = [
  items['The Story Begins Album'],
  items['Page Two Album'],
  items['TWICEcoaster: Lane 1 Album'],
  items['TWICEcoaster: Lane 2 Album'],
  items['Signal Album'],
  items['Twicetagram Album'],
  items['Merry & Happy Album'],
  items['What Is Love? Album'],
  items['Summer Nights Album'],
  items['BDZ Album'],
  items['BDZ (Repackage) Album'],
  items['Yes or Yes Album'],
  items['The Year of "YES" Album'],
  items['Fancy You Album'],
  items['Feel Special Album'],
  items['More & More Album'],
  items['Candy Pop Album'],
  items['One More Time Album'],
  items['Wake Me Up Album'],
  items['#TWICE Album'],
  items['#TWICE2 Album'],
  items['Breakthrough Album'],
  items['HAPPY HAPPY Album'],
  items['&TWICE Album'],
  items['Fanfare Album'],
];

const photocards = [
  items['Nayeon Photocard'],
  items['Jeongyeon Photocard'],
  items['Momo Photocard'],
  items['Sana Photocard'],
  items['Jihyo Photocard'],
  items['Mina Photocard'],
  items['Dahyun Photocard'],
  items['Chaeyoung Photocard'],
  items['Tzuyu Photocard'],
];

const posters = [
  items['Nayeon Poster'],
  items['Jeongyeon Poster'],
  items['Momo Poster'],
  items['Sana Poster'],
  items['Jihyo Poster'],
  items['Mina Poster'],
  items['Dahyun Poster'],
  items['Chaeyoung Poster'],
  items['Tzuyu Poster'],
];

const lovelys = [
  items['Nayeon Lovely'],
  items['Jeongyeon Lovely'],
  items['Momo Lovely'],
  items['Sana Lovely'],
  items['Jihyo Lovely'],
  items['Mina Lovely'],
  items['Dahyun Lovely'],
  items['Chaeyoung Lovely'],
  items['Tzuyu Lovely'],
];

let niceItems = [
  ...candies,
  ...jellies,
];

let goodItems = [
  ...plushies,
  ...albums,
];

let amazingItems = [
  ...photocards,
  ...posters,
  ...lovelys,
];

let rareItems = [
  items['MC Rail Cap'],
  items.Jokbal,
  items.Strawberry,
  items.Camera,
  items.Saxophone,
  items['Cheese Kimbap'],
  items['Thomas the Train'],
  items['Archery Bow'],
  items['Black Swan'],
];

let legendaryItems = [
  items['JYP\'s MIDI Keyboard'],
  items['JYP Plastic Pants'],
  items['Idol Room Shirt'],
  items['Sixteen Necklace'],
  items['Pocari Sweat'],
  items['Yes or Yes Dice'],
  items['Cheer Up Jacket'],
  items['Likey Video Camera'],
  items['Jihyo\'s Photobook'],
  items['Chaeyoung\'s Drawing'],
  items['Momo\'s Circle'],
  items['Dubu Cushion'],
  items.Gucci,
  items.Kkaengi,
  items['Sana\'s Green Tea'],
  items['Jeongyeon\'s Legos'],
  items['Mina\'s Laptop'],
];

/* Collections Items */
const collectionsItems = [
  /* Sweet Collection */
  ...niceItems.map(({ code }) => ({ collection_code: collections.Sweet.code, item_code: code })),

  /* Plushie Collection */
  ...plushies.map(({ code }) => ({ collection_code: collections.Plushie.code, item_code: code })),

  /* Lovelys Collection */
  ...lovelys.map(({ code }) => ({ collection_code: collections.Lovelys.code, item_code: code })),

  /* Album Collection */
  ...albums.map(({ code }) => ({ collection_code: collections.Album.code, item_code: code })),

  /* TWICE Collection */
  ...photocards.map(({ code }) => ({ collection_code: collections.TWICE.code, item_code: code })),
  ...posters.map(({ code }) => ({ collection_code: collections.TWICE.code, item_code: code })),

  /* Nayeon Collection */
  ...[
    items['Nayeon Bunny Plushie'],
    items['Nayeon Photocard'],
    items['Nayeon Poster'],
    items['MC Rail Cap'],
  ].map(({ code }) => ({ collection_code: collections.Nayeon.code, item_code: code })),

  /* Jeongyeon Collection */
  ...[
    items['Jeongyeon Dragon Plushie'],
    items['Jeongyeon Photocard'],
    items['Jeongyeon Poster'],
    items.Saxophone,
  ].map(({ code }) => ({ collection_code: collections.Jeongyeon.code, item_code: code })),

  /* Momo Collection */
  ...[
    items['Momo Pig Plushie'],
    items['Momo Photocard'],
    items['Momo Poster'],
    items.Jokbal,
  ].map(({ code }) => ({ collection_code: collections.Momo.code, item_code: code })),

  /* Sana Collection */
  ...[
    items['Sana Squirrel Plushie'],
    items['Sana Photocard'],
    items['Sana Poster'],
    items['Cheese Kimbap'],
  ].map(({ code }) => ({ collection_code: collections.Sana.code, item_code: code })),

  /* Jihyo Collection */
  ...[
    items['Jihyo Unicorn Plushie'],
    items['Jihyo Photocard'],
    items['Jihyo Poster'],
    items['Thomas the Train'],
  ].map(({ code }) => ({ collection_code: collections.Jihyo.code, item_code: code })),

  /* Mina Collection */
  ...[
    items['Mina Penguin Plushie'],
    items['Mina Photocard'],
    items['Mina Poster'],
    items['Black Swan'],
  ].map(({ code }) => ({ collection_code: collections.Mina.code, item_code: code })),

  /* Dahyun Collection */
  ...[
    items['Dahyun Eagle Plushie'],
    items['Dahyun Photocard'],
    items['Dahyun Poster'],
    items['Camera'],
  ].map(({ code }) => ({ collection_code: collections.Dahyun.code, item_code: code })),

  /* Chaeyoung Collection */
  ...[
    items['Chaeyoung Tiger Plushie'],
    items['Chaeyoung Photocard'],
    items['Chaeyoung Poster'],
    items['Strawberry'],
  ].map(({ code }) => ({ collection_code: collections.Chaeyoung.code, item_code: code })),

  /* Tzuyu Collection */
  ...[
    items['Tzuyu Puppy Plushie'],
    items['Tzuyu Photocard'],
    items['Tzuyu Poster'],
    items['Archery Bow'],
  ].map(({ code }) => ({ collection_code: collections.Tzuyu.code, item_code: code })),

  /* Nayeon Special Collection */
  ...[
    items['Nayeon Photocard'],
    items['MC Rail Cap'],
    items.Kkaengi,
  ].map(({ code }) => ({ collection_code: collections['Nayeon Special'].code, item_code: code })),

  /* Jeongyeon Special Collection */
  ...[
    items['Jeongyeon Photocard'],
    items.Saxophone,
    items['Jeongyeon\'s Legos'],
  ].map(({ code }) => ({ collection_code: collections['Jeongyeon Special'].code, item_code: code })),

  /* Momo Special Collection */
  ...[
    items['Momo Photocard'],
    items.Jokbal,
    items['Momo\'s Circle'],
  ].map(({ code }) => ({ collection_code: collections['Momo Special'].code, item_code: code })),

  /* Sana Special Collection */
  ...[
    items['Sana Photocard'],
    items['Cheese Kimbap'],
    items['Sana\'s Green Tea'],
  ].map(({ code }) => ({ collection_code: collections['Sana Special'].code, item_code: code })),

  /* Jihyo Special Collection */
  ...[
    items['Jihyo Photocard'],
    items['Thomas the Train'],
    items['Jihyo\'s Photobook'],
  ].map(({ code }) => ({ collection_code: collections['Jihyo Special'].code, item_code: code })),

  /* Mina Special Collection */
  ...[
    items['Mina Photocard'],
    items['Black Swan'],
    items['Mina\'s Laptop'],
  ].map(({ code }) => ({ collection_code: collections['Mina Special'].code, item_code: code })),

  /* Dahyun Special Collection */
  ...[
    items['Dahyun Photocard'],
    items.Camera,
    items['Dubu Cushion'],
  ].map(({ code }) => ({ collection_code: collections['Dahyun Special'].code, item_code: code })),

  /* Chaeyoung Special Collection */
  ...[
    items['Chaeyoung Photocard'],
    items.Strawberry,
    items['Chaeyoung\'s Drawing'],
  ].map(({ code }) => ({ collection_code: collections['Chaeyoung Special'].code, item_code: code })),

  /* Tzuyu Special Collection */
  ...[
    items['Tzuyu Photocard'],
    items['Archery Bow'],
    items.Gucci,
  ].map(({ code }) => ({ collection_code: collections['Tzuyu Special'].code, item_code: code })),

  /* Cheer Up Collection */
  ...[
    items['Page Two Album'],
    items['Cheer Up Jacket']
  ].map(({ code }) => ({ collection_code: collections['Cheer Up'].code, item_code: code })),

  /* Yes or Yes Collection */
  ...[
    items['Yes or Yes Album'],
    items['Yes or Yes Dice']
  ].map(({ code }) => ({ collection_code: collections['Yes or Yes'].code, item_code: code })),

  /* Likey Collection */
  ...[
    items['Twicetagram Album'],
    items['Likey Video Camera']
  ].map(({ code }) => ({ collection_code: collections['Likey'].code, item_code: code })),

  /* JYP Collection */
  ...[
    items['JYP\'s MIDI Keyboard'],
    items['JYP Plastic Pants'],
    items['Signal Album'],
    items['What Is Love? Album']
  ].map(({ code }) => ({ collection_code: collections['JYP'].code, item_code: code })),
];

// const _items = [
//   ...niceItems,
//   ...goodItems,
//   ...amazingItems,
//   ...rareItems,
//   ...legendaryItems,
// ];

// fs.writeFileSync('./_local/collections.json', JSON.stringify(_items, null, 2));
// fs.writeFileSync('./_local/collections.json', JSON.stringify(collections, null, 2));

/** @param {import('knex').Knex} knex */
exports.up = async function(knex)
{
  /* Get the existing categories from the database to filter the categories
    to be saved. */
  const existingCategories = await knex(categoriesTable);

  /* This array will contain the categories to be saved. */
  const newCategories = [];
  for(const categoryName of categoryNames)
  {
    const existingCategory = existingCategories.find(({ name }) => name === categoryName);
    if(!existingCategory)
      newCategories.push({ id: nanoid(15), name: categoryName });
  }

  /* Insert the categories that aren't existing yet. */
  const savedCategories = await knex(categoriesTable)
    .insert(newCategories)
    .returning('*');

  /* Get the categories to assign to each item by name. */
  let niceCategoryId;
  let goodCategoryId;
  let amazingCategoryId;
  let rareCategoryId;
  let legendaryCategoryId;

  const categories = [...existingCategories, ...savedCategories];
  for(const { id, name } of categories)
  {
    if(name === 'Nice')
      niceCategoryId = id;

    if(name === 'Good')
      goodCategoryId = id;

    if(name === 'Amazing')
      amazingCategoryId = id;

    if(name === 'Rare')
      rareCategoryId = id;

    if(name === 'Legendary')
      legendaryCategoryId = id;
  }

  /* Add the categories of the items. */
  const itemsList = [];

  /* The `items` in each element of this array refers to the items that
    will fall under the category with the id of `categoryId`. */
  const itemsCategoryMap = [
    { items: niceItems, categoryId: niceCategoryId },
    { items: goodItems, categoryId: goodCategoryId },
    { items: amazingItems, categoryId: amazingCategoryId },
    { items: rareItems, categoryId: rareCategoryId },
    { items: legendaryItems, categoryId: legendaryCategoryId },
  ];

  /* Loop through the items-categories map and set the categories of each item. */
  for(const { items: itemsOfCategory, categoryId } of itemsCategoryMap)
  {
    for(const item of itemsOfCategory)
    {
      item.category_id = categoryId;
      itemsList.push(item);
    }
  }

  await knex(itemsTable).insert(itemsList);
  await knex(collectionsTable).insert(Object.values(collections));
  await knex(collectionsItemsTable).insert(collectionsItems);
};

/** @param {import('knex').Knex} knex */
exports.down = async function(knex)
{
  await knex(categoriesTable)
    .whereIn('name', newCategoryNames)
    .delete();

  const itemCodes = [
    ...niceItems,
    ...goodItems,
    ...amazingItems,
    ...rareItems,
    ...legendaryItems,
  ].map(({ code }) => code);

  await knex(itemsTable)
    .whereIn('code', itemCodes)
    .delete();

  const collectionCodes = Object.values(collections).map(({ code }) => code);

  await knex(collectionsTable)
    .whereIn('code', collectionCodes)
    .delete();

  await knex(collectionsItemsTable)
    .whereIn('collection_code', collectionCodes)
    .delete();
};
