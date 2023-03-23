interface IService<T, D> {
  create(dto: T): Promise<D>;
  findAll(): Promise<D[]>;
  findById(id: string): Promise<D>
  update(id: string, dto: T): Promise<D>
  remove(id: string): void
}

export default IService;