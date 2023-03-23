import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const inputMock: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
  
};

const outputMock: Motorcycle = new Motorcycle({
  id: '641be26a7a8bd65a9f88876e',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
});

export {
  inputMock,
  outputMock,
};