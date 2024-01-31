#!/usr/bin/node
//script that prints the title of a Star Wars movie where the episode number 

const request = require('request');
const { argv } = require('process');

const BaseUrl = 'https://swapi-api.alx-tools.com/api';
request(BaseUrl + '/films/' + argv[2], (error, response, body) => {
  if (error) {
    console.error(error);
  }
  console.log(JSON.parse(body).title);
});
