import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoutes from './Routes/CarRoute';
import motorcycleRoutes from './Routes/MotorcycleRoute';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.initRoutes();
    this.initMiddlewares();
  }

  private initMiddlewares(): void {
    this.app.use(ErrorHandler.handle);
  }

  private initRoutes(): void {
    this.app.use(carRoutes);
    this.app.use(motorcycleRoutes);
  }
}

export default new App().app;