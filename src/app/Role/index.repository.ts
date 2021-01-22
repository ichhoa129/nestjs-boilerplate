import { EntityRepository } from "typeorm";
import { BaseRepository } from "../Base/index.repository";
import { Role } from "./index.entity";

@EntityRepository(Role)
export class RoleRepository extends BaseRepository<Role> {
  
}