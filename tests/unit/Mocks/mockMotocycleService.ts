import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const motorcycleModel = 'Honda Cb 600f Hornet';

const inputMock: IMotorcycle = {
  model: motorcycleModel,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
  
};

const outputMock: Motorcycle = new Motorcycle({
  id: '641be26a7a8bd65a9f88876e',
  model: motorcycleModel,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
});

const inputUpdateMock: IMotorcycle = {
  id: '641be26a7a8bd65a9f88876e',
  model: motorcycleModel,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
};

const outputListMock: Motorcycle[] = [new Motorcycle({
  id: '641c6e82f1dc4f56e5dba7e9',
  model: motorcycleModel,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
}),
];

const idMockValid = '641c6e82f1dc4f56e5dba7e9';

const motorcycleNotFound = 'Motorcycle not found';

const invalidMongoId = 'Invalid mongo id';

const idMockInvalid = '6348ABC';

export {
  inputMock,
  outputMock,
  outputListMock,
  idMockValid,
  motorcycleNotFound,
  invalidMongoId,
  idMockInvalid,
  inputUpdateMock,
};