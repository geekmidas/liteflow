import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.raw(`
    CREATE TABLE liteflow.sale(
        id serial PRIMARY KEY,
        transaction_hash TEXT UNIQUE NOT NULL,
        amount INT NOT NULL,
        collection_address VARCHAR(40) NOT NULL,
        buyer_address VARCHAR(40) NOT NULL,
        seller_address VARCHAR(40) NOT NULL,
        token_id VARCHAR(40) NOT NULL,
        quantity INT NOT NULL
    )`);
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.raw('DROP TABLE liteflow.sale');
}
