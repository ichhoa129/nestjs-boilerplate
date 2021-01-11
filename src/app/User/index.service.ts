import { Injectable } from "@nestjs/common";
import { BaseService } from "../Base/index.service";
import { User } from "./index.entity";
import { UserRepository } from "./index.repository";

@Injectable()
export class UserService extends BaseService<User> {
  constructor(private userRepository : UserRepository) {
    super(userRepository)
  }
}