import type { FastifyInstance } from 'fastify';

export async function userRoutes(app: FastifyInstance) {
  // CRUD para o usuário
  app.get('/', () => {});
  app.post('/', () => {});
}
