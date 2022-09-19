const en = require('nanoid-good/locale/en');
const nanoid = require('nanoid-good').nanoid(en);
const fs = require('fs');

const itemsTable = 'items';
const collectionsTable = 'collections';
const collectionsItemsTable = 'collections_items';
const categoriesTable = 'categories';

const context = 'discord:533510632985853953';
const codePrefix = 'tp:';

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

const members = [
  {
    code: 'ny',
    name: 'Nayeon',
    hangul: '나연',
    animal: 'Bunny',
    emote: '🐰',
    photocard: 'https://i.imgur.com/iNX9ErD.jpg',
    poster: 'https://i.imgur.com/loE6BZX.jpg',
    lovely: 'https://i.imgur.com/qakDPak.png'
  },
  {
    code: 'jy',
    name: 'Jeongyeon',
    hangul: '정연',
    animal: 'Dragon',
    emote: '🐲',
    photocard: 'https://i.imgur.com/pA54JXE.jpg',
    poster: 'https://i.imgur.com/FXegKZo.jpg',
    lovely: 'https://i.imgur.com/7fu6jQ5.png'
  },
  {
    code: 'mm',
    name: 'Momo',
    hangul: '모모',
    animal: 'Pig',
    emote: '🐷',
    photocard: 'https://i.imgur.com/ZNXbMOZ.jpg',
    poster: 'https://i.imgur.com/trfa56Z.jpg',
    lovely: 'https://i.imgur.com/1TVTJW5.png'
  },
  {
    code: 'sn',
    name: 'Sana',
    hangul: '사나',
    animal: 'Squirrel',
    emote: '🐿',
    photocard: 'https://i.imgur.com/wTi3BoN.jpg',
    poster: 'https://i.imgur.com/ab0c1za.jpg',
    lovely: 'https://i.imgur.com/PVhqXSC.png'
  },
  {
    code: 'jh',
    name: 'Jihyo',
    hangul: '지효',
    animal: 'Unicorn',
    emote: '🦄',
    photocard: 'https://i.imgur.com/2w7UaID.jpg',
    poster: 'https://i.imgur.com/TC3qOnd.jpg',
    lovely: 'https://i.imgur.com/cAx4waP.png'
  },
  {
    code: 'mn',
    name: 'Mina',
    hangul: '미나',
    animal: 'Penguin',
    emote: '🐧',
    photocard: 'https://i.imgur.com/pZfwokN.jpg',
    poster: 'https://i.imgur.com/8RR64UD.jpg',
    lovely: 'https://i.imgur.com/765azWY.png'
  },
  {
    code: 'dh',
    name: 'Dahyun',
    hangul: '다현',
    animal: 'Eagle',
    emote: '🦅',
    photocard: 'https://i.imgur.com/ax1G8UG.jpg',
    poster: 'https://i.imgur.com/gXDt6ur.jpg',
    lovely: 'https://i.imgur.com/kIEhn2X.png'
  },
  {
    code: 'ch',
    name: 'Chaeyoung',
    hangul: '채영',
    animal: 'Tiger',
    emote: '🐯',
    photocard: 'https://i.imgur.com/3f62mR5.jpg',
    poster: 'https://i.imgur.com/XeTSFwd.jpg',
    lovely: 'https://i.imgur.com/loq4gWB.png'
  },
  {
    code: 'tz',
    name: 'Tzuyu',
    hangul: '쯔위',
    animal: 'Puppy',
    emote: '🐶',
    photocard: 'https://i.imgur.com/JpqJVKL.jpg',
    poster: 'https://i.imgur.com/GUjUPk0.jpg',
    lovely: 'https://i.imgur.com/5Fm2DQM.png'
  }
];

const albumsList = [
  {
    code: 'tsb',
    title: 'The Story Begins',
    cover: 'https://i.scdn.co/image/82fcd832c095f99ee8fd751f81d0a2f93208e1d4'
  },
  {
    code: 'pgt',
    title: 'Page Two',
    cover: 'https://i.scdn.co/image/9c581e4951265c3c7a768e72519be88947758755'
  },
  {
    code: 'tc1',
    title: 'TWICEcoaster: Lane 1',
    cover: 'https://i.scdn.co/image/6551b45b4e5a692f61cd42357e7f9b08753430f9'
  },
  {
    code: 'tc2',
    title: 'TWICEcoaster: Lane 2',
    cover: 'https://i.scdn.co/image/8ed6a0c95f39ded5003aac8598797563992ecb00'
  },
  {
    code: 'sgl',
    title: 'Signal',
    cover: 'https://i.scdn.co/image/770c9b5ddc0a151bf255406b7285abb121dd7a30'
  },
  {
    code: 'twt',
    title: 'Twicetagram',
    cover: 'https://i.scdn.co/image/1c2eba4f54e9a90e797ace930676ef6cd87d1779'
  },
  {
    code: 'mnh',
    title: 'Merry & Happy',
    cover: 'https://i.scdn.co/image/a7fc15227ce39023c5e3d356efb29e327957cea4'
  },
  {
    code: 'wil',
    title: 'What Is Love?',
    cover: 'https://i.scdn.co/image/14e0b19c0cfb689d914ea021a393f25d77f6eeb8'
  },
  {
    code: 'smn',
    title: 'Summer Nights',
    cover: 'https://i.scdn.co/image/671e629019a12e2a1f7cf7a0c86d0a44cb6a8e58'
  },
  {
    code: 'bdz',
    title: 'BDZ',
    cover: 'https://i.scdn.co/image/699818ea7635b25d277861b9ec40602965efd1a3'
  },
  {
    code: 'bdr',
    title: 'BDZ (Repackage)',
    cover: 'https://i.scdn.co/image/77eb7c17cafe5503c514c0b7e2b942f6588f4eae'
  },
  {
    code: 'yoy',
    title: 'Yes or Yes',
    cover: 'https://i.scdn.co/image/67cc1debed5c16a0801d83aed07da2d01a9fa20c'
  },
  {
    code: 'tyy',
    title: 'The Year of \'YES\'',
    cover: 'https://i.scdn.co/image/a9c13fb328423c703d26b8d98a8c6987e4242404'
  },
  {
    code: 'fcy',
    title: 'Fancy You',
    cover: 'https://i.scdn.co/image/856711b1103e8c8a2042198191f96fc8e47715d5'
  },
  {
    code: 'fsp',
    title: 'Feel Special',
    cover: 'https://i.scdn.co/image/2672add02cdf23f490a3911b837e733a48f66971'
  },
  {
    code: 'mnm',
    title: 'More & More',
    cover: 'https://i.scdn.co/image/ab67616d0000b27328e649c0e2d1a3a98ccf8ea3'
  },
  {
    code: 'cdp',
    title: 'Candy Pop',
    cover: 'https://i.scdn.co/image/ebc421247e260e1a846bd48e05fbfbbae440f339'
  },
  {
    code: 'omt',
    title: 'One More Time',
    cover: 'https://i.scdn.co/image/3c3039d6c443b2945f39fda304bd9f81881d4c0c'
  },
  {
    code: 'wmu',
    title: 'Wake Me Up',
    cover: 'https://i.scdn.co/image/eba07320c308e7a3d0009e670aaa9c646980df67'
  },
  {
    code: 'htt',
    title: '#TWICE',
    cover: 'https://i.scdn.co/image/6333e7e989d68e665f512f3ca29f389dad6860ff'
  },
  {
    code: 'ht2',
    title: '#TWICE2',
    cover: 'https://i.scdn.co/image/068b02a90e73c68025ac04abb3e784ea29e53b15'
  },
  {
    code: 'bth',
    title: 'Breakthrough',
    cover: 'https://i.scdn.co/image/6ecee0db960d381e8c51b1a3d1d99a8d71d154c3'
  },
  {
    code: 'hph',
    title: 'HAPPY HAPPY',
    cover: 'https://i.scdn.co/image/52043f529df82e4af5f25c4a1f58fa5060bdba6a'
  },
  {
    code: 'ntw',
    title: '&TWICE',
    cover: 'https://i.scdn.co/image/ab67616d0000b27329e7568dbd16f270b3d96db4'
  },
  {
    code: 'fnf',
    title: 'Fanfare',
    cover: 'https://i.scdn.co/image/ab67616d0000b273dd4a6d26627cc697b3f4d8be'
  }
];

const candies = members.map(({ code, name }) => ({
  code: `${codePrefix}${code}-c`,
  name: `${name} Candy`,
  chance_min: 36,
  chance_max: 65,
  price: 10,
  emote: '🍬',
  context,
}));

const jellies = members.map(({ code, name }) => ({
  code: `${codePrefix}${code}-j`,
  name: `${name} Jelly`,
  chance_min: 36,
  chance_max: 65,
  price: 10,
  emote: '🍓',
  context,
}));

const plushies = members.map(({ code, name, animal, emote }) => ({
  code: `${codePrefix}${code}-p`,
  name: `${name} ${animal} Plushie`,
  chance_min: 15,
  chance_max: 35,
  price: 100,
  emote,
  context,
}));

const albums = albumsList.map(({ code, title }) => ({
  code: `${codePrefix}${code}-a`,
  name: `${title}`,
  price: 100,
  chance_min: 15,
  chance_max: 35,
  emote: '💿',
  context,
}));

const photocards = members.map(({ code, name }) => ({
  code: `${codePrefix}${code}-pc`,
  name: `${name} Photocard`,
  chance_min: 6,
  chance_max: 14,
  price: 200,
  emote: '🎞',
  context,
}));

const posters = members.map(({ code, name }) => ({
  code: `${codePrefix}${code}-ps`,
  name: `${name} Poster`,
  chance_min: 6,
  chance_max: 14,
  price: 200,
  emote: '🖼',
  context,
}));

const lovelys = members.map(({ code, name }) => ({
  code: `${codePrefix}${code}-lv`,
  name: `${name} Lovely`,
  chance_min: 6,
  chance_max: 14,
  price: 200,
  emote: '💗',
  context,
}));

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
  { code: `${codePrefix}mc`, name: 'MC Rail Cap', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/papUxvz.png', context },
  { code: `${codePrefix}jk`, name: 'Jokbal', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/XXocy8y.png', context },
  { code: `${codePrefix}sb`, name: 'Strawberry', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/MVvL7M1.png', context },
  { code: `${codePrefix}cm`, name: 'Camera', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/kCP8DD9.png', context },
  { code: `${codePrefix}sx`, name: 'Saxophone', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/r9Bn7Xn.png', context },
  { code: `${codePrefix}ck`, name: 'Cheese Kimbap', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/LHXMx6o.png', context },
  { code: `${codePrefix}th`, name: 'Thomas the Train', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/4AiC8zx.png', context },
  { code: `${codePrefix}bw`, name: 'Archery Bow', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/cEMhTQx.jpg', context },
  { code: `${codePrefix}sw`, name: 'Black Swan', chance_min: 0.6, chance_max: 5, price: 750, image: 'https://i.imgur.com/qOufKJA.png', context },
];

let legendaryItems = [
  { code: `${codePrefix}jkb`, name: 'JYP\'s MIDI Keyboard', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/4PW4KE5.png', context },
  { code: `${codePrefix}ptp`, name: 'JYP Plastic Pants', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/yEpLsr0.png', context },
  { code: `${codePrefix}idl`, name: 'Idol Room Shirt', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/WY1TCJe.png', context },
  { code: `${codePrefix}sxt`, name: 'Sixteen Necklace', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/uRinEh7.png', context },
  { code: `${codePrefix}psw`, name: 'Pocari Sweat', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/bg0zHIp.png', context },
  { code: `${codePrefix}yoy`, name: 'Yes or Yes Dice', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/EaE1r8L.png', context },
  { code: `${codePrefix}chj`, name: 'Cheer Up Jacket', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/s0wo5mo.jpg', context },
  { code: `${codePrefix}lkc`, name: 'Likey Video Camera', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/VJGe6oO.jpg', context },
  { code: `${codePrefix}jhp`, name: 'Jihyo\'s Photobook', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/M3Sf2ew.png', context },
  { code: `${codePrefix}chd`, name: 'Chaeyoung\'s Drawing', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/Ib23ete.jpg', context },
  { code: `${codePrefix}mmc`, name: 'Momo\'s Circle', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/FecM5ob.png', context },
  { code: `${codePrefix}dbc`, name: 'Dubu Cushion', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.ytimg.com/vi/Wqj15fbhKu4/maxresdefault.jpg', context },
  { code: `${codePrefix}gci`, name: 'Gucci', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/JIfD9dH.png', context },
  { code: `${codePrefix}kng`, name: 'Kkaengi', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/gax0X5t.png', context },
  { code: `${codePrefix}sgt`, name: 'Sana\'s Green Tea', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/Bpo59eZ.png', context },
  { code: `${codePrefix}jyl`, name: 'Jeongyeon\'s Legos', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/Gvi0yD7.png', context },
  { code: `${codePrefix}mnl`, name: 'Mina\'s Laptop', chance_min: 0, chance_max: 0.5, price: 4000, image: 'https://i.imgur.com/ZTyTkiG.png', context },
];

/* Collections */
const collectionCodes =
{
  sweet: `${codePrefix}swt`,
  plushie: `${codePrefix}pl`,
  lovelys: `${codePrefix}lvl`,
  album: `${codePrefix}alb`,
  twice: `${codePrefix}tw`,
  nayeon: `${codePrefix}ny`,
  jeongyeon: `${codePrefix}jy`,
  momo: `${codePrefix}mm`,
  sana: `${codePrefix}sn`,
  jihyo: `${codePrefix}jh`,
  mina: `${codePrefix}mn`,
  dahyun: `${codePrefix}dh`,
  chaeyoung: `${codePrefix}ch`,
  tzuyu: `${codePrefix}tz`,
  nayeonSpecial: `${codePrefix}nys`,
  jeongyeonSpecial: `${codePrefix}jys`,
  momoSpecial: `${codePrefix}mms`,
  sanaSpecial: `${codePrefix}sns`,
  jihyoSpecial: `${codePrefix}jhs`,
  minaSpecial: `${codePrefix}mns`,
  dahyunSpecial: `${codePrefix}dhs`,
  chaeyoungSpecial: `${codePrefix}chs`,
  tzuyuSpecial: `${codePrefix}tzs`,
  cheerUp: `${codePrefix}chr`,
  yesOrYes: `${codePrefix}yoy`,
  likey: `${codePrefix}lky`,
  jyp: `${codePrefix}jyp`,
};

const collections = [
  {
    name: "Sweet",
    code: collectionCodes.sweet,
    description: "All 18 candies and jellies of all members.",
    fixed_bonus: 500,
    context,
  },
  {
    name: "Plushie",
    code: collectionCodes.plushie,
    description: "All 9 plushies, 1 per member.",
    fixed_bonus: 3000,
    context,
  },
  {
    name: "Lovelys",
    code: collectionCodes.lovelys,
    description: "All 9 lovelys, 1 per member.",
    fixed_bonus: 5000,
    context,
  },
  {
    name: "Album",
    code: collectionCodes.album,
    description: `All the albums and EPs. (Do the \`albums\` command to see all albums and EPs.)`,
    fixed_bonus: 7000,
    context,
  },
  {
    name: "TWICE",
    code: collectionCodes.twice,
    description: "All photocards and posters of each member.",
    fixed_bonus: 9000,
    context,
  },
  {
    name: "Nayeon",
    code: collectionCodes.nayeon,
    description: "The plushie, photocard, poster and rare item of a member."
      + " (9 collections, 1 per member)",
    fixed_bonus: 4000,
    context,
  },
  {
    name: "Jeongyeon",
    code: collectionCodes.jeongyeon,
    description: "The plushie, photocard, poster and rare item of a member."
      + " (9 collections, 1 per member)",
    fixed_bonus: 4000,
    context,
  },
  {
    name: "Momo",
    code: collectionCodes.momo,
    description: "The plushie, photocard, poster and rare item of a member."
      + " (9 collections, 1 per member)",
    fixed_bonus: 4000,
    context,
  },
  {
    name: "Sana",
    code: collectionCodes.sana,
    description: "The plushie, photocard, poster and rare item of a member."
      + " (9 collections, 1 per member)",
    fixed_bonus: 4000,
    context,
  },
  {
    name: "Jihyo",
    code: collectionCodes.jihyo,
    description: "The plushie, photocard, poster and rare item of a member."
      + " (9 collections, 1 per member)",
    fixed_bonus: 4000,
    context,
  },
  {
    name: "Mina",
    code: collectionCodes.mina,
    description: "The plushie, photocard, poster and rare item of a member."
      + " (9 collections, 1 per member)",
    fixed_bonus: 4000,
    context,
  },
  {
    name: "Dahyun",
    code: collectionCodes.dahyun,
    description: "The plushie, photocard, poster and rare item of a member."
      + " (9 collections, 1 per member)",
    fixed_bonus: 7000,
    context,
  },
  {
    name: "Chaeyoung",
    code: collectionCodes.chaeyoung,
    description: "The plushie, photocard, poster and rare item of a member."
      + " (9 collections, 1 per member)",
    fixed_bonus: 4000,
    context,
  },
  {
    name: "Tzuyu",
    code: collectionCodes.tzuyu,
    description: "The plushie, photocard, poster and rare item of a member."
      + " (9 collections, 1 per member)",
    fixed_bonus: 4000,
    context,
  },
  {
    name: "Nayeon Special",
    code: collectionCodes.nayeonSpecial,
    description: 'The photocard, rare item and legendary item of a member.'
      + ' (9 collections, 1 per member)',
    fixed_bonus: 7000,
    context,
  },
  {
    name: "Jeongyeon Special",
    code: collectionCodes.jeongyeonSpecial,
    description: 'The photocard, rare item and legendary item of a member.'
      + ' (9 collections, 1 per member)',
    fixed_bonus: 7000,
    context,
  },
  {
    name: "Momo Special",
    code: collectionCodes.momoSpecial,
    description: 'The photocard, rare item and legendary item of a member.'
      + ' (9 collections, 1 per member)',
    fixed_bonus: 7000,
    context,
  },
  {
    name: "Sana Special",
    code: collectionCodes.sanaSpecial,
    description: 'The photocard, rare item and legendary item of a member.'
      + ' (9 collections, 1 per member)',
    fixed_bonus: 7000,
    context,
  },
  {
    name: "Jihyo Special",
    code: collectionCodes.jihyoSpecial,
    description: 'The photocard, rare item and legendary item of a member.'
      + ' (9 collections, 1 per member)',
    fixed_bonus: 7000,
    context,
  },
  {
    name: "Mina Special",
    code: collectionCodes.minaSpecial,
    description: 'The photocard, rare item and legendary item of a member.'
      + ' (9 collections, 1 per member)',
    fixed_bonus: 7000,
    context,
  },
  {
    name: "Dahyun Special",
    code: collectionCodes.dahyunSpecial,
    description: 'The photocard, rare item and legendary item of a member.'
      + ' (9 collections, 1 per member)',
    fixed_bonus: 7000,
    context,
  },
  {
    name: "Chaeyoung Special",
    code: collectionCodes.chaeyoungSpecial,
    description: 'The photocard, rare item and legendary item of a member.'
      + ' (9 collections, 1 per member)',
    fixed_bonus: 7000,
    context,
  },
  {
    name: "Tzuyu Special",
    code: collectionCodes.tzuyuSpecial,
    description: 'The photocard, rare item and legendary item of a member.'
      + ' (9 collections, 1 per member)',
    fixed_bonus: 7000,
    context,
  },
  {
    name: "Cheer Up",
    code: collectionCodes.cheerUp,
    description: 'Page Two Album and Cheer Up Jacket.',
    fixed_bonus: 5000,
    context,
  },
  {
    name: "Yes or Yes",
    code: collectionCodes.yesOrYes,
    description: 'Yes or Yes Album and Yes or Yes Dice.',
    fixed_bonus: 5000,
    context,
  },
  {
    name: "Likey",
    code: collectionCodes.likey,
    description: 'Twicetagram Album and Likey Video Camera.',
    fixed_bonus: 5000,
    context,
  },
  {
    name: "JYP",
    code: collectionCodes.jyp,
    description: 'What Is Love? Album, Signal Album, JYP Plastic Pants and JYP\'s MIDI Keyboard.',
    fixed_bonus: 15000,
    context,
  }
];

/* Collections Items */
const collectionsItems = [
  /* Sweet Collection */
  ...niceItems.map(({ code }) => ({ collection_code: collectionCodes.sweet, item_code: code })),

  /* Plushie Collection */
  ...plushies.map(({ code }) => ({ collection_code: collectionCodes.plushie, item_code: code })),

  /* Lovelys Collection */
  ...lovelys.map(({ code }) => ({ collection_code: collectionCodes.lovelys, item_code: code })),

  /* Album Collection */
  ...albums.map(({ code }) => ({ collection_code: collectionCodes.album, item_code: code })),

  /* TWICE Collection */
  ...photocards.map(({ code }) => ({ collection_code: collectionCodes.twice, item_code: code })),
  ...posters.map(({ code }) => ({ collection_code: collectionCodes.twice, item_code: code })),

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

/** @param {import('knex').Knex} knex */
exports.up = async function(knex)
{
  const existingCategories = await knex(categoriesTable);
  const newCategories = [];
  const twicepediaCategories = [];
  for(const categoryName of categoryNames)
  {
    const existingCategory = existingCategories.find(({ name }) => name === categoryName);
    if(!existingCategory)
      newCategories.push({ id: nanoid(15), name: categoryName });
    else
      twicepediaCategories.push(existingCategory);
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

  const categories = [...twicepediaCategories, ...savedCategories];
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
  const items = [];
  const itemsCategoryMap = [
    { items: niceItems, categoryId: niceCategoryId },
    { items: goodItems, categoryId: goodCategoryId },
    { items: amazingItems, categoryId: amazingCategoryId },
    { items: rareItems, categoryId: rareCategoryId },
    { items: legendaryItems, categoryId: legendaryCategoryId },
  ];
  for(const itemCategoryMap of itemsCategoryMap)
  {
    for(const item of itemCategoryMap.items)
    {
      item.category_id = itemCategoryMap.categoryId;
      items.push(item);
    }
  }

  await knex(itemsTable).insert(items);
  await knex(collectionsTable).insert(collections);
  // await knex(collectionsItemsTable).insert(collectionsItems);
};

/** @param {import('knex').Knex} knex */
exports.down = async function(knex)
{
  // await knex(collectionsTable).truncate();
  // await knex(collectionsItemsTable).truncate();
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
};
