'use strict';
const staticfile = require('./route/staticroute');
const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 5000 });

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

});

server.route(staticfile);
