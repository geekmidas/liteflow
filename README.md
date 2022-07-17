# liteflow

## Project setup

1. Make sure you have all the environment variables specified [here](./.env.example)
2. Run `yarn migrate` to setup the latest migrations for the database

## Running the project

`yarn start`

## Database schema

All the migrations can be found at `db/migrations`. The sale table migration can be found below

```sql
CREATE TABLE liteflow.sale(
    id serial PRIMARY KEY,
    transaction_hash TEXT UNIQUE NOT NULL,
    amount INT NOT NULL,
    collection_address VARCHAR(40) NOT NULL,
    buyer_address VARCHAR(40) NOT NULL,
    seller_address VARCHAR(40) NOT NULL,
    token_id VARCHAR(40) NOT NULL,
    quantity INT NOT NULL
);

```
