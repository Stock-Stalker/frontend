FROM node:lts-alpine

LABEL decription="Production image for StockStalker frontend."

WORKDIR /usr/src/app

COPY frontend/package*.json ./

RUN npm install -g @ionic/cli native-run cordova-res --unsafe-perm serve

RUN npm ci

COPY frontend .

RUN npm run build

CMD ["npm", "run", "start-prod"]
