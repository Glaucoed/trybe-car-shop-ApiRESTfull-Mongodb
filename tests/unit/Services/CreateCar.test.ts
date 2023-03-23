import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { inputMock, outputMock } from '../Mocks/mockService';

describe('Testes da camada de serviço de Car - create', function () {
  it('Deve realizar a criação de um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(outputMock);

    const service = new CarService();
    const result = await service.create(inputMock);

    expect(result).to.be.deep.equal(outputMock);
  });
});