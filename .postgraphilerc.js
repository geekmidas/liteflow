const dotenv = require('dotenv');
dotenv.config();

const { DB_USER, DB_HOST, DB_PASSWORD } = process.env;
const connection = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/postgres`;

module.exports = {
  options: {
    connection,
    exportSchemaGraphql: 'schema.graphql',
    schema: ['liteflow'],
    appendPlugins: ['@graphile-contrib/pg-simplify-inflector'],
    port: 4000,
  },
};
