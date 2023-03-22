import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IService from '../Interfaces/IService';
import CarODM from '../Models/CarODM';

export default class CarService implements IService<ICar, Car> {
  protected carODM = new CarODM();

  async create(dto: ICar): Promise<Car> {
    const car = await this.carODM.create(dto);
    return new Car(car);
  }
}