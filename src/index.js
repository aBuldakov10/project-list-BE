import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

fastify.register(import('@fastify/cookie'));
fastify.register(import('@fastify/cors'), {
  origin: ['http://localhost:63342', 'http://localhost:3000', 'http://localhost:3001'],
});
fastify.register(import('@fastify/multipart'), {
  addToBody: true,
});

// Obj instead Data base
const projects = {};
let countId = 1;

// get projects from front
fastify.get('/projects', (request, reply) => {
  reply.send(projects);
});

// Toggle projects done
fastify.patch('/projects/done/:id', (request, reply) => {
  const {id} = request.params;

  projects[id].isDone = !projects[id].isDone;

  reply.send(projects);
});

// Edit projects info
fastify.patch('/projects/:id', (request, replay) => {
  const {id} = request.params;
  const {title, description} = request.body;

  projects[id].title = title;
  projects[id].description = description;

  replay.send(projects);
});

// Remove projects info
fastify.delete('/projects/:id', (request, replay) => {
  const {id} = request.params;

  delete projects[id];

  replay.send(projects);
});

// Send projects to front
fastify.post('/projects', (request, reply) => {
  const {body: {title, description}} = request;

  projects[countId] = {
    id: countId,
    title,
    description,
    isDone: false,
  };

  countId++;

  return reply.send(projects)
});

export default fastify;
