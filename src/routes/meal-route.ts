import type { FastifyInstance } from 'fastify';

export async function mealRoutes(app: FastifyInstance) {
  // CRUD para as refeições
  app.get('/', () => {});
  app.get('/:id', () => {});
  app.post('/', () => {});
  app.put('/:id', () => {});
  app.delete('/:id', () => {});

  // Estatísticas sobre as refeições do usuários
  app.get('/stats', () => {});
  app.get('/stats/in-diet', () => {});
  app.get('/stats/out-diet', () => {});
  app.get('/stats/sequence', () => {});
}
