import cors from 'cors';
import express from 'express';

import './database';
import router from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    // any other global middleware here
  }

  routes() {
    this.server.use(router);
  }
}

export default new App().server;
