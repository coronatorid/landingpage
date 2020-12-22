FROM node:15-alpine

RUN apk update && apk upgrade

ENV NODE_ENV production
RUN mkdir -p /app

# Removing node modules, we don't need it in production.
RUN rm -rf ./node_modules

WORKDIR /app

COPY . ./

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]
