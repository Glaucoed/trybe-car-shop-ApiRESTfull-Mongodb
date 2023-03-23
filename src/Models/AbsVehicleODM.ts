import { Model, models, Schema, model, isValidObjectId } from 'mongoose';
import IdInvalidError from '../Errors/IdInvalidError';

const INVALID_FORMAT_ID = 'Invalid mongo id';

export default abstract class AbsVehicleODM<T> {
  protected model;
  protected schema: Schema;
  protected modelName;

  constructor(shema: Schema, modelName: string) {
    this.schema = shema;
    this.modelName = modelName;
    this.model = models[this.modelName] as Model<T> 
    || model(this.modelName, this.schema) as Model<T>;
  }
  
  public async create(dto: T): Promise<T> { 
    return this.model.create({ ...dto });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new IdInvalidError(INVALID_FORMAT_ID);
    return this.model.findById(id);
  }
}