import fastify from "./index";

(async () => {
  try {
    await fastify.listen({
      port: 80
    });
  } catch(error) {
    console.log(error);
  }
})();
