FROM node:14-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install -g @ionic/cli native-run cordova-res --unsafe-perm

RUN npm install

COPY . .

CMD ["npm", "start"]

# FROM nginx:alpine
#
# RUN rm -rf /usr/share/nginx/html/*
#
# COPY --from=build /app/www/ /usr/share/nginx/html/
