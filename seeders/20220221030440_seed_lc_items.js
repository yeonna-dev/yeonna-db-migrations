const itemsTable = 'items';
const collectionsTable = 'collections';
const collectionsItemsTable = 'collections_items';

/** @param {import('knex').Knex} knex */
exports.up = async function(knex)
{
  const context = 'discord:903745093566087220';

  /* Items */
  const items = [
    {
      code: 'lc:c',
      name: 'Candy',
      chance_min: 36,
      chance_max: 65,
      price: 10,
      emote: '🍬',
      context,
    },
    {
      code: 'lc:j',
      name: 'Jelly',
      chance_min: 36,
      chance_max: 65,
      price: 10,
      emote: '🍓',
      context,
    },

    {
      code: 'lc:a',
      name: 'Album',
      chance_min: 15,
      chance_max: 35,
      price: 100,
      emote: '💿',
      context,
    },
    {
      code: 'lc:p',
      name: 'Plushie',
      chance_min: 15,
      chance_max: 35,
      price: 100,
      emote: '🧸',
      context,
    },

    { code: 'lc:ph', name: 'Photo', chance_min: 6, chance_max: 14, price: 200, emote: '📷', context },
    { code: 'lc:ps', name: 'Poster', chance_min: 6, chance_max: 14, price: 200, emote: '🖼️', context },

    { code: 'lc:mc', name: 'MC Rail Cap', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/papUxvz.png', context },
    { code: 'lc:jk', name: 'Jokbal', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/XXocy8y.png', context },
    { code: 'lc:sb', name: 'Strawberry', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/MVvL7M1.png', context },
    { code: 'lc:cm', name: 'Camera', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/kCP8DD9.png', context },
    { code: 'lc:sx', name: 'Saxophone', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/r9Bn7Xn.png', context },
    { code: 'lc:ck', name: 'Cheese Kimbap', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/LHXMx6o.png', context },
    { code: 'lc:th', name: 'Thomas the Train', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/4AiC8zx.png', context },
    { code: 'lc:bw', name: 'Archery Bow', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/cEMhTQx.jpg', context },
    { code: 'lc:sw', name: 'Black Swan', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/qOufKJA.png', context },

    { code: 'lc:jkb', name: 'JYP\'s MIDI Keyboard', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/4PW4KE5.png', context },
    { code: 'lc:ptp', name: 'JYP Plastic Pants', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/yEpLsr0.png', context },
    { code: 'lc:idl', name: 'Idol Room Shirt', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/WY1TCJe.png', context },
    { code: 'lc:sxt', name: 'Sixteen Necklace', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/uRinEh7.png', context },
    { code: 'lc:psw', name: 'Pocari Sweat', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/bg0zHIp.png', context },
    { code: 'lc:yoy', name: 'Yes or Yes Dice', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/EaE1r8L.png', context },
    { code: 'lc:chj', name: 'Cheer Up Jacket', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/s0wo5mo.jpg', context },
    { code: 'lc:lkc', name: 'Likey Video Camera', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/VJGe6oO.jpg', context },
    { code: 'lc:jhp', name: 'Jihyo\'s Photobook', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/M3Sf2ew.png', context },
    { code: 'lc:chd', name: 'Chaeyoung\'s Drawing', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/Ib23ete.jpg', context },
    { code: 'lc:mmc', name: 'Momo\'s Circle', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/FecM5ob.png', context },
    { code: 'lc:dbc', name: 'Dubu Cushion', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.ytimg.com/vi/Wqj15fbhKu4/maxresdefault.jpg' },
    { code: 'lc:gci', name: 'Gucci', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/JIfD9dH.png', context },
    { code: 'lc:kng', name: 'Kkaengi', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/gax0X5t.png', context },
    { code: 'lc:sgt', name: 'Sana\'s Green Tea', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/Bpo59eZ.png', context },
    { code: 'lc:jyl', name: 'Jeongyeon\'s Legos', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/Gvi0yD7.png', context },
    { code: 'lc:mnl', name: 'Mina\'s Laptop', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/ZTyTkiG.png', context },
  ];

  await knex(itemsTable).insert(items);

  /* Collections */
  const collections = [
    { code: 'lc:swt', name: 'Sweet', fixed_bonus: 100, context },
    { code: 'lc:mrch', name: 'Merch', fixed_bonus: 500, context },
    { code: 'lc:rare', name: 'Rare', fixed_bonus: 1500, context },
    { code: 'lc:jyp', name: 'JYP', fixed_bonus: 5000, context },
    { code: 'lc:lgnd', name: 'Legendary', fixed_bonus: 10000, context },
  ];

  await knex(collectionsTable).insert(collections);

  /* Collections Items */
  const collectionsItems = [
    { collection_code: 'lc:swt', item_code: 'lc:c' },
    { collection_code: 'lc:swt', item_code: 'lc:j' },
    { collection_code: 'lc:swt', item_code: 'lc:sb' },
    { collection_code: 'lc:mrch', item_code: 'lc:a' },
    { collection_code: 'lc:mrch', item_code: 'lc:p' },
    { collection_code: 'lc:mrch', item_code: 'lc:ph' },
    { collection_code: 'lc:mrch', item_code: 'lc:ps' },
    { collection_code: 'lc:rare', item_code: 'lc:mc' },
    { collection_code: 'lc:rare', item_code: 'lc:jk' },
    { collection_code: 'lc:rare', item_code: 'lc:sb' },
    { collection_code: 'lc:rare', item_code: 'lc:cm' },
    { collection_code: 'lc:rare', item_code: 'lc:sx' },
    { collection_code: 'lc:rare', item_code: 'lc:ck' },
    { collection_code: 'lc:rare', item_code: 'lc:th' },
    { collection_code: 'lc:rare', item_code: 'lc:bw' },
    { collection_code: 'lc:rare', item_code: 'lc:sw' },
    { collection_code: 'lc:jyp', item_code: 'lc:a' },
    { collection_code: 'lc:jyp', item_code: 'lc:jkb' },
    { collection_code: 'lc:jyp', item_code: 'lc:ptp' },
    { collection_code: 'lc:lgnd', item_code: 'lc:jkb' },
    { collection_code: 'lc:lgnd', item_code: 'lc:ptp' },
    { collection_code: 'lc:lgnd', item_code: 'lc:idl' },
    { collection_code: 'lc:lgnd', item_code: 'lc:sxt' },
    { collection_code: 'lc:lgnd', item_code: 'lc:psw' },
    { collection_code: 'lc:lgnd', item_code: 'lc:yoy' },
    { collection_code: 'lc:lgnd', item_code: 'lc:chj' },
    { collection_code: 'lc:lgnd', item_code: 'lc:lkc' },
    { collection_code: 'lc:lgnd', item_code: 'lc:jhp' },
    { collection_code: 'lc:lgnd', item_code: 'lc:chd' },
    { collection_code: 'lc:lgnd', item_code: 'lc:mmc' },
    { collection_code: 'lc:lgnd', item_code: 'lc:dbc' },
    { collection_code: 'lc:lgnd', item_code: 'lc:gci' },
    { collection_code: 'lc:lgnd', item_code: 'lc:kng' },
    { collection_code: 'lc:lgnd', item_code: 'lc:sgt' },
    { collection_code: 'lc:lgnd', item_code: 'lc:jyl' },
    { collection_code: 'lc:lgnd', item_code: 'lc:mnl' }
  ];

  await knex(collectionsItemsTable).insert(collectionsItems);
};

/** @param {import('knex').Knex} knex */
exports.down = async function(knex)
{
  await knex(collectionsTable).truncate();
  await knex(collectionsItemsTable).truncate();
  await knex(itemsTable).truncate();
};
