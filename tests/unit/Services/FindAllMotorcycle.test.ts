import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { outputListMock } from '../Mocks/mockMotocycleService';

describe('Testes da camada de serviço de Motorcycle - findAll', function () {
  it('Deve retornar uma lista com todas as Motorcycles', async function () {
    sinon.stub(Model, 'find').resolves(outputListMock);

    const service = new MotorcycleService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(outputListMock);
    sinon.restore();
  });
});