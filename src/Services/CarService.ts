import Car from '../Domains/Car';
import IdNotFoundError from '../Errors/IdNotFoundError';
import ICar from '../Interfaces/ICar';
import IService from '../Interfaces/IService';
import CarODM from '../Models/CarODM';

const ID_NOT_FOUND = 'Car not found';

export default class CarService implements IService<ICar, Car> {
  protected carODM = new CarODM();

  async create(dto: ICar): Promise<Car> {
    const car = await this.carODM.create(dto);
    return new Car(car);
  }
  
  async findAll(): Promise<Car[]> {
    const cars = await this.carODM.findAll();
    return cars.map((car) => new Car(car));
  }

  async findById(id: string): Promise<Car> {
    const car = await this.carODM.findById(id);
    if (!car) throw new IdNotFoundError(ID_NOT_FOUND);
    return new Car(car);
  }

  async update(id: string, dto: ICar): Promise<Car> {
    const car = await this.carODM.update(id, dto);
    if (!car) throw new IdNotFoundError(ID_NOT_FOUND);
    return new Car(car);
  }
}