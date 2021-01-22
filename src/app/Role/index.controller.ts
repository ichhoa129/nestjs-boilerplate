import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { GetManyDTO } from "../Base/DTO/get_many";
import { CreateRoleDTO } from "./DTO/create_one";
import { EditRoleDTO } from "./DTO/update_one";
import { Role } from "./index.entity";
import { RoleService } from "./index.service";

@Controller('roles')
export class RoleController {
  constructor(private service: RoleService) {}
  @Post()
  createOne(@Body() dto : CreateRoleDTO) : Promise<Role> {
    return this.service.createOne(dto);
  }

  @Get()
  getMany(@Query() param: GetManyDTO) : Promise<Role[]> {
    return this.service.getMany(param);
  }

  @Get('deleted')
  getManyDisabled(@Query() param: GetManyDTO) : Promise<Role[]> {
    return this.service.getManyDisabled(param);
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) : Promise<Role> {
    return this.service.getOne(id);
  }

  @Patch(':id')
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() dto : EditRoleDTO) : Promise<Role> {
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