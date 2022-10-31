import fastify from "./index";

(async () => {
  try {
    await fastify.listen({
      port: process.env.PORT || 3000,
      host: "0.0.0.0",
    });
  } catch (error) {
    console.log(error);
  }
})();
