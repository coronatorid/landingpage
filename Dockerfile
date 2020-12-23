FROM node:15-alpine

RUN apk update && apk upgrade

ENV NODE_ENV production
RUN mkdir -p /app

WORKDIR /app

COPY . ./

RUN yarn
RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]
