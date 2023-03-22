import { Model, models, Schema, model } from 'mongoose';

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
}
