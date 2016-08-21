'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: process.env.port || 8000
});

// Add the route
server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, reply) => {
        return reply('Hello, Azure.');
    }
});

// Start the server
server.start((error) => {

    if (error) {
        throw error;
    }

    console.log('Server running at:', server.info.uri);
});
