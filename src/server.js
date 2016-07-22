'use strict';
const staticfile = require('./route/staticroute');
const Hapi = require('hapi');
const pg = require('pg');
const env = require('env2');

// https://api.themoviedb.org/3/search/movie/?query=matrix&include_adult=false&page=1&api_key= + APIKEY
// https://image.tmdb.org/t/p/original/1jgulSytTJcATkGX8syGbD2glXD.jpg

env('.env');

const client = new pg.Client(process.env.URLSQL);

client.on('drain', client.end.bind(client));

client.connect(err => {
    if (err) throw err;
})

const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 5000 });

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route(staticfile);

});
