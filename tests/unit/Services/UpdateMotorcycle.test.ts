import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { 
  outputMock, 
  idMockValid, 
  motorcycleNotFound, 
  invalidMongoId, 
  idMockInvalid,
  inputUpdateMock,
} from '../Mocks/mockMotocycleService';

describe('Testes da camada de serviço de Motorcycle - update', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deve atualizar uma Motorcycle através de um ID e retornar o mesmo', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(outputMock);

    const service = new MotorcycleService();
    const result = await service.update(idMockValid, inputUpdateMock);

    expect(result).to.be.deep.equal(outputMock);
  });

  it(
    'Deve retornar "Motorcycle not found" ao tentar realizar um update com um id inexistente', 
    async function () {
      try {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
        const service = new MotorcycleService();
        await service.update(idMockValid, inputUpdateMock);
      } catch (error) {
        expect((error as Error).message).to.be.equal(motorcycleNotFound);
      }
    },
  );

  it(
    'Deve retornar "Invalid mongo id" com um Id for mal formatado', 
    async function () {
      try {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
        const service = new MotorcycleService();
        await service.update(idMockInvalid, inputUpdateMock);
      } catch (error) {
        expect((error as Error).message).to.be.equal(invalidMongoId);
      }
    },
  );
});