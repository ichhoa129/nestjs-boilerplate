import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { GetManyDTO } from "../Base/DTO/get_many";
import { CreateUserDTO } from "./DTO/create_one";
import { EditUserDTO } from "./DTO/update_one";
import { User } from "./index.entity";
import { UserService } from "./index.service";

@Controller('users')
export class UserController {
  constructor(private service: UserService) {}
  @Post()
  createOne(@Body() dto : CreateUserDTO) : Promise<User> {
    return this.service.createOne(dto);
  }

  @Get()
  getMany(@Query() param: GetManyDTO) : Promise<User[]> {
    return this.service.getMany(param);
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) : Promise<User> {
    return this.service.getOne(id);
  }

  @Patch(':id')
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() dto : EditUserDTO) : Promise<User> {
    return this.service.updateOne(id, dto);
  }

  @Delete(':id')
  async softDeleteOne(@Param('id', ParseIntPipe) id: number) : Promise<void> {
    this.service.softDeleteOne(id);
  }

  @Delete(':id/permanently')
  async deleteOne(@Param('id', ParseIntPipe) id: number) : Promise<void> {
    this.service.deleteOne(id);
  }

  @Patch(':id/restore')
  async restoreOne(@Param('id', ParseIntPipe) id: number) : Promise<void> {
    this.service.restoreOne(id);
  }
}