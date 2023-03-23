import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { outputListMock } from '../Mocks/mockCarService';

describe('Testes da camada de serviço de Car - findAll', function () {
  it('Deve retornar uma lista com todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(outputListMock);

    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(outputListMock);
    sinon.restore();
  });
});