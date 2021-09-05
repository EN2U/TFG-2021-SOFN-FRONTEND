FROM node:14.17.5-alpine3.11 as build-stage
RUN yarn global add @quasar/cli
WORKDIR /app
COPY . /app
RUN yarn
RUN quasar build --modern

FROM nginx:1.21.1-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
