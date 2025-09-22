#!/bin/sh

echo "⏳ Aguardando PostgreSQL ficar disponível em $DB_HOST:$DB_PORT..."

until nc -z $DB_HOST $DB_PORT; do
  sleep 1
done

echo "✅ Banco disponível. Iniciando backend..."

exec "$@"
