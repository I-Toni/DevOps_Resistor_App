FROM node:12.4.0

MAINTAINER Ibrahim Tonifarah

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install -g @angular/cli@8.0.6

RUN npm install -g http-server

COPY . /usr/src/app

RUN npm run-script build

EXPOSE 4200

CMD ["http-server", "-D", "FOREGROUND"]
