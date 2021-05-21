FROM node:lts-alpine

LABEL decription="Production image for StockStalker frontend."

WORKDIR /usr/src/app

COPY package.json .

RUN npm install -g @ionic/cli native-run cordova-res --unsafe-perm serve

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start-prod"]
