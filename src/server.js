import express, {
    json
} from 'express';

import users_router from './routes/users.routes';

const server = express();

/* Settings */
server.set('port', process.env.PORT || 3000);

/* Middlewares */
server.use(json());

/* Routes */
server.use(users_router);

export default server;