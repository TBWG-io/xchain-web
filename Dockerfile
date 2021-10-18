FROM node:slim as build
WORKDIR /app
ADD . .
RUN npm install
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
ADD ./nginx/conf.d /etc/nginx/conf.d
