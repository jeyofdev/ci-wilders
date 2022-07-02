# appelé dans tous les cas
FROM node:lts-alpine as common

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . ./

RUN yarn build

# appelé en mode dev
FROM common as development
CMD yarn start & npx nodemon -w package.json --exec 'yarn'

# appelé en mode test
FROM common as ci
CMD yarn lint && CI=true yarn test