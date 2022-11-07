class Service {
  private model;
  constructor(model:any) {
    if (!model) {
      throw new Error("Model not initialized");
    }
    this.model = model;
  }
  getAll = async () => {
    return await this.model.find();
  };

  create = async (data) => {
    return await this.model.create(data);
  };
  getById = async (id) => {
    return await this.model.findById(id);
  };

  update = async (id, data) => {
    return await this.model.findByIdAndUpdate(id, data);
  };

  destroy = async (id) => {
    return await this.model.findByIdAndDelete(id);
  };
}
export default Service;
