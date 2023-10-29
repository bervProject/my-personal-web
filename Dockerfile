FROM node:18-alpine3.15 as build
WORKDIR /app
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/releases/yarn-4.0.1.cjs .yarn/releases/yarn-4.0.1.cjs
RUN apk update && apk add yarn python3 g++ make && rm -rf /var/cache/apk/* && corepack enable && corepack prepare yarn@stable --activate && yarn install --immutable 
COPY . .
RUN IS_DOCKER=true yarn build

FROM nginx:stable-alpine as run
RUN mkdir /app
COPY --from=build /app/dist /app
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf

CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
