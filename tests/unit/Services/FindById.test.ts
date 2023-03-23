import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { idMockValid, outputMock } from '../Mocks/mockService';

describe('Testes da camada de serviço de Car - findById', function () {
  it('Deve retornar um um carro através de um ID', async function () {
    sinon.stub(Model, 'findById').resolves(outputMock);

    const service = new CarService();
    const result = await service.findById(idMockValid);

    expect(result).to.be.deep.equal(outputMock);
  });
});