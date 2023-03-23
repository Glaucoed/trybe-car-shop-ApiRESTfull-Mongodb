import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { motorcycleNotFound, idMockValid, outputMock } from '../Mocks/mockMotocycleService';

describe('Testes da camada de serviço de Motorcycle - findById', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deve retornar uma motorcycle através de um ID', async function () {
    sinon.stub(Model, 'findById').resolves(outputMock);

    const service = new MotorcycleService();
    const result = await service.findById(idMockValid);

    expect(result).to.be.deep.equal(outputMock);
  });

  it('Deve retornar um erro ao utilizar um ID invalido', async function () {
    try {
      sinon.stub(Model, 'findById').resolves(null);
      const service = new MotorcycleService();
      await service.findById(idMockValid);
    } catch (error) {
      expect((error as Error).message).to.be.equal(motorcycleNotFound);
    }
  });
});