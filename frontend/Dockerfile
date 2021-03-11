FROM node:lts-alpine

LABEL decription="Production image for StockStalker frontend."

WORKDIR /usr/src/app

COPY frontend/package*.json ./

RUN npm install -g @ionic/cli native-run cordova-res --unsafe-perm serve

RUN npm ci

COPY frontend .

RUN npm run build

COPY frontend/server.js dist/server.js

WORKDIR /usr/src/app/dist

EXPOSE 8100

CMD ["node", "server.js"]
