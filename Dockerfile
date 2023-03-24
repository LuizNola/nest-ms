FROM node:16.16-alpine3.16

RUN apk add --no-cache bash
RUN npm install -g @nestjs/cli@7.5.6


WORKDIR /home/node/app

RUN addgroup app && adduser -S -G app app
RUN chown app:app /home/node/app

USER app


