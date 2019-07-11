FROM node:12.4.0

MAINTAINER Ibrahim Tonifarah

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

RUN npm install -g @angular/cli@8.0.3

RUN npm install -g http-server@0.9.0

COPY . /usr/src/app

RUN ng build

WORKDIR /usr/src/app/dist/cs6261project4

CMD ["http-server", "-p", "4200"] 


