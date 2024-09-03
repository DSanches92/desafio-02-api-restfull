import Fastify from 'fastify';
import { userRoutes } from './routes/user-route';
import { mealRoutes } from './routes/meal-route';

const app = Fastify();

app.register(userRoutes, { prefix: '/users' });
app.register(mealRoutes, { prefix: '/meals' });

export default app;
