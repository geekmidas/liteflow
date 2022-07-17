import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_PORT, DB_NAME, DB_PASSWORD, DB_USER } = process.env;
const port = DB_PORT ? parseInt(DB_PORT, 10) : undefined;

export default {
  client: 'pg',
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port,
    database: DB_NAME,
  },
  debug: process.env.STAGE !== 'prod',
  pool: {
    min: 0,
    max: 1,
  },
  migrations: {
    directory: `${__dirname}/db/migrations`,
  },
  seeds: {
    directory: `${__dirname}/db/seeds`,
  },
};
