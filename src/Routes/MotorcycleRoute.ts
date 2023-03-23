import { Router } from 'express';
import MotorcycleController from '../Controllers/MotocycleController';

const router = Router();

router.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());
router.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).findAll());
router.get('/motorcycles/:id', (req, res, next) => 
  new MotorcycleController(req, res, next).findById());
router.put('/motorcycles/:id', (req, res, next) => 
  new MotorcycleController(req, res, next).update());

export default router;