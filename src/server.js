import fastify from "./index";

(async () => {
  try {
    await fastify.listen({
      port: 3000
    });
  } catch(error) {
    console.log(error);
  }
})();
