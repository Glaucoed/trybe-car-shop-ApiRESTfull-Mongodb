import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { carNotFound, idMockValid, outputMock } from '../Mocks/mockCarService';

describe('Testes da camada de serviço de Car - findById', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deve retornar um um carro através de um ID', async function () {
    sinon.stub(Model, 'findById').resolves(outputMock);

    const service = new CarService();
    const result = await service.findById(idMockValid);

    expect(result).to.be.deep.equal(outputMock);
  });

  it('Deve retornar um erro ao utilizar um ID invalido', async function () {
    try {
      sinon.stub(Model, 'findById').resolves(null);
      const service = new CarService();
      await service.findById(idMockValid);
    } catch (error) {
      expect((error as Error).message).to.be.equal(carNotFound);
    }
  });
});