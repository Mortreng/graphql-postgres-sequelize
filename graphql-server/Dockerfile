FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install --save sequelize

RUN npm install pg pg-hstore

COPY src ./src

COPY entrypoint.sh ./

ENTRYPOINT ./entrypoint.sh
