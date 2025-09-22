import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';

const isProduction = process.env.NODE_ENV === 'production';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL || 'postgresql://postgres:dSazIFydaiAPSUDSFthjqetvnrERfZoX@postgres.railway.internal:5432/railway',
  ssl: { rejectUnauthorized: false },
  entities: isProduction
    ? ['build/modules/**/database/entities/*.js']
    : ['src/modules/**/database/entities/*.ts'],
  migrations: isProduction
    ? ['build/shared/typeorm/migrations/*.js']
    : ['src/shared/typeorm/migrations/*.ts'],
});

// Log para conferir a conexão
console.log('=== Database Config ===');
console.log({
  url: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
console.log('=======================');
