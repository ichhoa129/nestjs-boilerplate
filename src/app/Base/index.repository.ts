import { NotFoundException } from "@nestjs/common";
import { FilterHelper } from "src/common/helpers/filter";
import { DeepPartial, Repository } from "typeorm";
import { GetManyDTO } from "./DTO/get_many";

export class BaseRepository<T> extends Repository<T> {
  async getOne(id: number) : Promise<T> {
    const entity = await this.findOne(id, { withDeleted: true });
    if(!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
  
  async createOne(dto: DeepPartial<T>) : Promise<T> {
    return this.save(this.create(dto));
  }

  async getMany(dto: GetManyDTO) : Promise<any> {
    const data = await FilterHelper.getQueryBuilder<T>(this, dto).getManyAndCount();
    return {
      data: data[0],
      count: data[0].length,
      total: data[1],
      page: dto.page ? dto.page : 1,
      pageCount: Math.ceil(data[1] / dto.limit ? dto.limit : 5)
    };
  }

  async getManyDisabled(dto: GetManyDTO) : Promise<any> {
    const data = await FilterHelper.getQueryBuilder<T>(this, dto)
      .andWhere(`${this.metadata.targetName}.deletedAt IS NOT NULL`)
      .withDeleted()
      .getManyAndCount();
    return {
      data: data[0],
      count: data[0].length,
      total: data[1],
      page: dto.page ? dto.page : 1,
      pageCount: Math.ceil(data[1] / dto.limit ? dto.limit : 5)
    };
  }

  async updateOne(id: number, dto: DeepPartial<T>) : Promise<T> {
    let entity = await this.findOne(id);
    if(!entity) {
      throw new NotFoundException();
    }
    entity = {
      ...entity,
      ...dto
    }
    return this.save(entity);
  }

  async softDeleteOne(id: number) : Promise<void> {
    const entity = await this.findOne(id, { withDeleted: true });
    if(!entity) {
      throw new NotFoundException();
    }
    await this.softDelete(id);
  }

  async deleteOne(id: number) : Promise<void> {
    const entity = await this.findOne(id, { withDeleted: true });
    if(!entity) {
      throw new NotFoundException();
    }
    await this.delete(id);
  }

  async restoreOne(id: number) : Promise<void> {
    const entity = await this.findOne(id, { withDeleted: true });
    if(!entity) {
      throw new NotFoundException();
    }
    await this.restore(id);
  }
}