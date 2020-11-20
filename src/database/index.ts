import { createConnection } from 'typeorm';

createConnection({
  type: 'mysql',
  host: 'database',
  port: 3306,
  database: 'mutant-challenge',
  username: 'mutant',
  password: 'mutant',
  entities: ['./src/models/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations/',
  },
});
