FROM node:14-alpine as builder

LABEL decription="Production image for StockStalker frontend."

WORKDIR /app

COPY package*.json ./

RUN npm install -g @ionic/cli native-run cordova-res --unsafe-perm

RUN npm ci

COPY . .

RUN npm run build

FROM nginx

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html
