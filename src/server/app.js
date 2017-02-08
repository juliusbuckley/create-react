import express from 'express';
import path from 'path';
import { sampleRoute } from './routes/sampleRoutes';

const app = express();
const port = process.env.PORT || 8080;

app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../public-dist')));
app.use('/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css')));

// ROUTES
sampleRoute(app);

app.listen(port, () => { console.log(`app.js has been served on port: ${port}`); });

export default app;