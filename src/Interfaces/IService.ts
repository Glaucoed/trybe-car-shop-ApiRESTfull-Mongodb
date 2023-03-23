interface IService<T, D> {
  create(dto: T): Promise<D>;
  findAll(): Promise<D[]>;
  findById(id: string): Promise<D>
}

export default IService;