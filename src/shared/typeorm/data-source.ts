import 'reflect-metadata'
import 'dotenv/config'
import { DataSource } from 'typeorm'

const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST!,
  port: port,
  username: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  database: process.env.DB_NAME!,
  entities: [
    isProduction
      ? 'build/modules/**/database/entities/*.js'
      : 'src/modules/**/database/entities/*.ts'
  ],
  migrations: [
    isProduction
      ? 'build/shared/typeorm/migrations/*.js'
      : 'src/shared/typeorm/migrations/*.ts'
  ]
});
