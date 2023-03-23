import Motorcycle from '../Domains/Motorcycle';
import IdNotFoundError from '../Errors/IdNotFoundError';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IService from '../Interfaces/IService';
import MotorcycleODM from '../Models/MotorcycleODM';

const ID_NOT_FOUND = 'Motorcycle not found';

export default class MotorcycleService implements IService<IMotorcycle, Motorcycle> {
  protected motorcycleODM = new MotorcycleODM();

  async create(dto: IMotorcycle): Promise<Motorcycle> {
    const motorcycle = await this.motorcycleODM.create(dto);
    return new Motorcycle(motorcycle);
  }
  async findAll(): Promise<Motorcycle[]> {
    const motorcycles = await this.motorcycleODM.findAll();
    return motorcycles.map((motorcycle) => new Motorcycle(motorcycle));
  }
  async findById(id: string): Promise<Motorcycle> {
    const motorcycle = await this.motorcycleODM.findById(id);
    if (!motorcycle) throw new IdNotFoundError(ID_NOT_FOUND);
    return new Motorcycle(motorcycle);
  }
  async update(id: string, dto: IMotorcycle): Promise<Motorcycle> {
    const motorcycle = await this.motorcycleODM.update(id, dto);
    if (!motorcycle) throw new IdNotFoundError(ID_NOT_FOUND);
    return new Motorcycle(motorcycle);
  }
  async remove(id: string): Promise<void> {
    await this.findById(id);
    await this.motorcycleODM.remove(id);
  }
}