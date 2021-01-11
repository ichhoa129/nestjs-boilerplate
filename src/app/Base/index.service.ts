import { DeepPartial } from "typeorm";
import { GetManyDTO } from "./DTO/get_many";
import { BaseRepository } from "./index.repository";

export class BaseService<T> {
  constructor(private baseRepository : BaseRepository<T>) {}

  createOne(dto: DeepPartial<T>) : Promise<T> {
    return this.baseRepository.createOne(dto);
  }

  getMany(param: GetManyDTO) : Promise<T[]> {
    return this.baseRepository.getMany(param);
  }

  getOne(id: number) : Promise<T> {
    return this.baseRepository.getOne(id);
  }


  updateOne(id: number, dto: DeepPartial<T>) : Promise<T> {
    return this.baseRepository.updateOne(id, dto);
  }


  async softDeleteOne(id: number) : Promise<void> {
    await this.baseRepository.softDeleteOne(id);
  }

  async deleteOne(id: number) : Promise<void> {
    await this.baseRepository.deleteOne(id);
  }

  async restoreOne(id: number) : Promise<void> {
    await this.baseRepository.restoreOne(id);
  }
}