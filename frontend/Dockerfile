FROM node:14-alpine as build-stage

LABEL decription="Production image for StockStalker frontend."

WORKDIR /app

COPY package*.json ./

RUN npm install -g @ionic/cli native-run cordova-res --unsafe-perm serve

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "start-prod"]

# EXPOSE 8100
#
# FROM nginx:stable-alpine as production-stage
#
# COPY --from=build-stage /app/build /usr/share/nginx/html
#
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#
# CMD ["nginx", "-g", "daemon off;"]
