FROM node:18-alpine

WORKDIR /app

COPY app/package.json ./
COPY app/package-lock.json ./

RUN npm install

COPY app/ .

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]