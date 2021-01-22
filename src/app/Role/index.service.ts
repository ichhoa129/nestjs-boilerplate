import { Injectable } from "@nestjs/common";
import { BaseService } from "../Base/index.service";
import { Role } from "./index.entity";
import { RoleRepository } from "./index.repository";

@Injectable()
export class RoleService extends BaseService<Role> {
  constructor(private roleRepository : RoleRepository) {
    super(roleRepository)
  }
}