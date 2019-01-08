// Require the framework and instantiate it
// https://www.fastify.io/docs/latest/Server/
const fastify = require('fastify')({
  logger: true
});

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' });
});

// Run the server!
const start = async () => {
  try {
    // Docker? listen on '0.0.0.0'.
    await fastify.listen(3000, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err, address);
    process.exit(1);
  }
};

start();