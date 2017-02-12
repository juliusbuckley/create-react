import express from 'express';
import path from 'path';
import { sampleRoute } from './routes/sampleRoutes';
import webpack from 'webpack';
import config from '../../webpack.config';

const app = express();
const port = 3000;

const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  path: config.output.path
}));
app.use(require('webpack-hot-middleware')(compiler));

app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../public-dist')));
app.use('/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css')));

// ROUTES
sampleRoute(app);

app.listen(port, () => { console.log(`app.js has been served on port: ${port}`); });

export default app;