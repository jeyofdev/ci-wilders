FROM node:lts-alpine as common

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . ./

RUN yarn build

FROM common as development
CMD yarn dev & npx nodemon -w package.json --exec 'yarn'

FROM common as ci
# CMD yarn test
CMD yarn lint && yarn test
