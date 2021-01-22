import { BadRequestException } from '@nestjs/common';
import { GetManyDTO } from 'src/app/Base/DTO/get_many';
import { Repository, SelectQueryBuilder } from 'typeorm';

export class FilterHelper {
  public static getQueryBuilder<T>(
    repo: Repository<T>,
    dto: GetManyDTO
  ): SelectQueryBuilder<T> {
    const limit = dto.limit ? dto.limit : 5;
    const offset = dto.page && dto.page > 1 ? (dto.page - 1) * limit : 0;
    const sort : Array<string> = dto.sort
      ? Array.isArray(dto.sort)
        ? dto.sort
        : [dto.sort]
      : [];
    let qb : SelectQueryBuilder<T> = repo.createQueryBuilder(repo.metadata.targetName);
    qb = this.chainSort(repo, qb, sort);
    qb.take(limit).skip(offset);
    return qb;
  }

  private static chainSort<T>(
    repo: Repository<T>,
    qb: SelectQueryBuilder<T>, 
    sort: Array<string>): SelectQueryBuilder<T> {
    if (sort.length > 0) {
      sort.forEach((sortElement, index) => {
        const elements = sortElement.split(',');
        if (elements.length != 2) {
          throw new BadRequestException();
        }
        index === 0 ? qb.orderBy(elements[0], elements[1] as 'ASC' | 'DESC') :
          qb.addOrderBy(elements[0], elements[1] as 'ASC' | 'DESC');
      });
    }
    return qb;
  }
}
