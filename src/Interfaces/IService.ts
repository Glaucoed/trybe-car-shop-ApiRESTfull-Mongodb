interface IService<I, D> {
  create(dto: I): Promise<D>;
}

export default IService;