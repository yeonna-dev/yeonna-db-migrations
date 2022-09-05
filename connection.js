require('dotenv').config();

import knex from 'knex';

export default knex({
  client: process.env.DB_CLIENT,
  connection: process.env.DB_CONNECTION,
  migrations: { stub: 'migrations/template.js' }
});
