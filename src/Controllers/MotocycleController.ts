import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    try {
      const motorcycle = await this.service.create({ ...this.req.body });
      return this.res.status(201).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const motorcycles = await this.service.findAll();
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    try {
      const motorcycle = await this.service.findById(this.req.params.id);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const motorcycle = await this.service.update(this.req.params.id, this.req.body);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}