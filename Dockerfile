FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npx tsc

ENV NODE_ENV=production

EXPOSE 3334

CMD ["node", "build/shared/http/server.js"]
