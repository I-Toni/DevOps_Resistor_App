FROM node:12.4.0

MAINTAINER Ibrahim Tonifarah

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

RUN npm install -g @angular/cli@7.3.8

RUN npm install -g http-server

COPY . /usr/src/app

RUN ng build

WORKDIR /usr/src/app/cs6261project4/dist/cs6261project4
CMD http-server 


