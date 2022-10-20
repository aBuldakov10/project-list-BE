import fastify from "./index";

(async () => {
  try {
    await fastify.listen({
      port: 5000
    });
  } catch(error) {
    console.log(error);
  }
})();
