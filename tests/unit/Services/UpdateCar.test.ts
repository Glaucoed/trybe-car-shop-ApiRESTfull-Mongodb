import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { 
  idMockValid, 
  inputUpdateMock, 
  outputMock, 
  idMockInvalid,
  carNotFound,
  invalidMongoId,
} from '../Mocks/mockService';

describe('Testes da camada de serviço de Car - update', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deve atualizar um um carro através de um ID e retornar o mesmo', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(outputMock);

    const service = new CarService();
    const result = await service.update(idMockValid, inputUpdateMock);

    expect(result).to.be.deep.equal(outputMock);
  });

  it(
    'Deve retornar "Car not found" ao tentar realizar um update com um id inexistente', 
    async function () {
      try {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
        const service = new CarService();
        await service.update(idMockValid, inputUpdateMock);
      } catch (error) {
        expect((error as Error).message).to.be.equal(carNotFound);
      }
    },
  );

  it(
    'Deve retornar "Invalid mongo id" com um Id for mal formatado', 
    async function () {
      try {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
        const service = new CarService();
        await service.update(idMockInvalid, inputUpdateMock);
      } catch (error) {
        expect((error as Error).message).to.be.equal(invalidMongoId);
      }
    },
  );
});