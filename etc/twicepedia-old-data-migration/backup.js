import fs from 'fs';
import database from '../../connection';

const tableNames = [
  'users',
  'obtainables',
  'inventories',
  'users_collections',
];

(async () =>
{
  console.log('Reading database data...');

  const promises = [];
  for(const tableName of tableNames)
    promises.push(database(tableName));

  const tableData = await Promise.all(promises);

  console.log('Saving table backups...');
  for(const i in tableData)
  {
    const data = tableData[i];
    fs.mkdirSync('backups', { recursive: true });
    fs.writeFileSync(`backups/${tableNames[i]}.json`, JSON.stringify(data, null, 2));
  }

  console.log('Done');

  process.exit();
})();
