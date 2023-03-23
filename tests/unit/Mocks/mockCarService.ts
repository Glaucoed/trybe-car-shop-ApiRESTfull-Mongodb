import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';

const inputMock: ICar = {
  model: 'Marea',
  year: 1992,
  color: 'Black',
  status: true,
  buyValue: 10.990,
  doorsQty: 2,
  seatsQty: 5,
};

const idMockInvalid = '6348ABC';

const inputUpdateMock: ICar = {
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 1992,
  color: 'White',
  status: true,
  buyValue: 10.990,
  doorsQty: 2,
  seatsQty: 5,
};

const outputMock: Car = new Car({
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 1992,
  color: 'Black',
  status: true,
  buyValue: 10.990,
  doorsQty: 2,
  seatsQty: 5,
});

const outputListMock: Car[] = [new Car({
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 1992,
  color: 'Black',
  status: true,
  buyValue: 10.990,
  doorsQty: 2,
  seatsQty: 5,
}),
new Car({
  id: '634852326b35b59438fbea2g',
  model: 'Marea',
  year: 1992,
  color: 'Black',
  status: true,
  buyValue: 10.990,
  doorsQty: 2,
  seatsQty: 5,
})];

const idMockValid = '634852326b35b59438fbea2f';

const invalidMongoId = 'Invalid mongo id';
const carNotFound = 'Car not found';
export {
  inputMock,
  outputMock,
  outputListMock,
  idMockValid,
  inputUpdateMock,
  idMockInvalid,
  invalidMongoId,
  carNotFound,

};