FROM node:14.15.0-alpine

WORKDIR /api

RUN apk --update --no-cache add \
  ffmpeg

COPY /package*.json /api/
COPY /tsconfig*.json /api/

COPY /src /api/src
COPY /uploads /api/uploads

RUN npm install
CMD npm run start
