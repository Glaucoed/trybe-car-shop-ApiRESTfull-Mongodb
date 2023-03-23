import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/Motorcycle';
import { inputMock, outputMock } from '../Mocks/mockMotocycleService';

describe('Testes da camada de serviço de Motocycle - create', function () {
  it('Deve retornar uma lista com todas as Motocycles', async function () {
    sinon.stub(Model, 'create').resolves(outputMock);

    const service = new MotorcycleService();
    const result = await service.create(inputMock);

    expect(result).to.be.deep.equal(outputMock);
  });
});