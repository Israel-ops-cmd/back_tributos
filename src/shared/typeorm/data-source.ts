import 'reflect-metadata'
import 'dotenv/config'
import { DataSource, DataSourceOptions } from 'typeorm'

const isProduction = process.env.NODE_ENV === 'production'

// Configuração das variáveis
const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: isProduction ? process.env.DB_HOST! : process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  username: isProduction ? process.env.DB_USER! : process.env.DB_USER || 'postgres',
  password: isProduction ? process.env.DB_PASS! : process.env.DB_PASS || 'postgres',
  database: isProduction ? process.env.DB_NAME! : process.env.DB_NAME || 'tributos',
  ssl: isProduction ? { rejectUnauthorized: false } : false,
  entities: isProduction
    ? ['build/modules/**/database/entities/*.js']
    : ['src/modules/**/database/entities/*.ts'],
  migrations: isProduction
    ? ['build/shared/typeorm/migrations/*.js']
    : ['src/shared/typeorm/migrations/*.ts'],
}

// Log para conferir se as variáveis estão corretas no deploy
console.log('=== Database Config ===')
console.log({
  isProduction,
  host: dataSourceOptions.host,
  port: dataSourceOptions.port,
  username: dataSourceOptions.username,
  database: dataSourceOptions.database,
  ssl: dataSourceOptions.ssl,
})
console.log('=======================')

export const AppDataSource = new DataSource(dataSourceOptions)
