import { EntityRepository } from "typeorm";
import { GetManyDTO } from "../Base/DTO/get_many";
import { BaseRepository } from "../Base/index.repository";
import { User } from "./index.entity";

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {
  
}