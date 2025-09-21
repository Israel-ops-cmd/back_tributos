FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npx tsc

COPY wait-for.sh .
RUN chmod +x wait-for.sh

ENV NODE_ENV=production

EXPOSE 3334

CMD ["./wait-for.sh", "node", "build/shared/http/server.js"]
