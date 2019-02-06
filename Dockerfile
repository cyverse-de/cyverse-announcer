FROM node:11-alpine

WORKDIR /usr/src/

COPY . .

RUN npm install
RUN npm publish

