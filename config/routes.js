import samples from '../api/services/samples/routes';
import sprays from '../api/services/sprays/routes';

const combinedRoutes = (app) => {
  app.use('/api/samples', samples);
  app.use('/api/sprays', sprays);
  app.use(render404);
};

const render404 = (req, res) => {
  res.status(404);
  res.json({ error: 'Not found' });
};

export default combinedRoutes;
