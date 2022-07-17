import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.raw('CREATE SCHEMA liteflow');
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.raw('DROP SCHEMA liteflow');
}
