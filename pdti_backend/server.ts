// server.ts
import Fastify from "fastify";
import cors from "@fastify/cors";
import formbody from "@fastify/formbody";
import rateLimit from "@fastify/rate-limit";
import prisma from "./prisma/client";
import { integrationAuthHook } from "./hooks/authHook";
import propositionRouter from "./modules/proposition/proposition.router";

const fastify = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:standard",
        ignore: "pid",
      },
    },
  },
});

// Inject Prisma into Fastify instance
fastify.decorate("prisma", prisma);

const apiPort = Number(process.env.API_PORT) || 4000;
const frontendPort = Number(process.env.FRONTEND_PORT) || 3000;

const start = async () => {
  try {
    // Register CORS
    await fastify.register(cors, {
      origin: [`https://pdti-essemara.ma/`, `http://localhost:${frontendPort}`],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    });

    // Rate Limiting Middleware (DDoS Protection)
    await fastify.register(rateLimit, {
      global: true,
      max: 100, // max requests
      timeWindow: "1 minute", // per time window
      allowList: ["127.0.0.1"], // optional: allow local dev IP
      ban: 2, // temporary ban after exceeding limit
    });

    // Register form-body for urlencoded parsing
    await fastify.register(formbody);

    // Global Auth Middleware
    fastify.addHook("onRequest", integrationAuthHook);

    // Register your routers
    fastify.register(propositionRouter, { prefix: "/api/proposition" });

    // Root route
    fastify.get("/", async (request, reply) => {
      return { message: "🚀 API ready to serve! 🚀" };
    });

    await fastify.listen({ port: apiPort, host: "0.0.0.0" });
    fastify.log.info(`🚀 API listening 🚀`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
