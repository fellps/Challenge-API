#! /bin/bash

apt-get -y update

#INSTALL NODE
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
apt-get install -y nodejs
npm install -g n
n latest

#INSTALL PACKAGES FOR DEVELOPMENT
apt-get install -y build-essential libudev-dev

#INSTALL PM2 AND GYP
npm install -g pm2
npm install -g node-gyp

#INSTALL NODE MODULES
npm install

#ADD SERVICE TO PM2
pm2 start index.js --name=CHALLENGE_SERVICE --watch
pm2 save
pm2 startup