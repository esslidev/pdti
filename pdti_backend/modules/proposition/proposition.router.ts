import { FastifyInstance } from "fastify";
import propositionController from "./proposition.controller";
import { integrationAuthHook } from "../../hooks/authHook";

export default async function propositionRouter(fastify: FastifyInstance) {
  fastify.addHook("preHandler", integrationAuthHook);
  fastify.post("/send-proposition", propositionController.sendProposition);
}
