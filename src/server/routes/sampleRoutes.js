import { controller } from '../controllers/sampleController';
// API ROUTES
const sampleRoute = app => { app.get('/endpoint', controller); };
export { sampleRoute };