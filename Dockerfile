FROM node:lts-alpine as build-stage

WORKDIR /APP

COPY ./package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest as production-stage

COPY --from=build-stage /APP/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]