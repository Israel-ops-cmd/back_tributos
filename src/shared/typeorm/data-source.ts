import 'reflect-metadata'
import 'dotenv/config'
import { DataSource } from 'typeorm'

const useSSL = process.env.DB_SSL === 'true'

const host = process.env.DB_HOST || process.env.PGHOST || 'localhost'
const port = Number(process.env.DB_PORT || process.env.PGPORT || 5432)
const username = process.env.DB_USER || process.env.PGUSER || 'postgres'
const password = process.env.DB_PASS || process.env.PGPASSWORD || 'postgres'
const database = process.env.DB_NAME || process.env.PGDATABASE || 'postgres'

const entitiesPath =
  process.env.NODE_ENV === 'production'
    ? 'build/modules/**/database/entities/*.js'
    : 'src/modules/**/database/entities/*.ts'

const migrationsPath =
  process.env.NODE_ENV === 'production'
    ? 'build/shared/typeorm/migrations/*.js'
    : 'src/shared/typeorm/migrations/*.ts'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  ssl: useSSL ? { rejectUnauthorized: false } : false,
  entities: [entitiesPath],
  migrations: [migrationsPath],
})
