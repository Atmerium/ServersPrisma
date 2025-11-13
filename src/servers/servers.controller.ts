import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ServersService } from './servers.service';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';

@Controller('servers')
export class ServersController {
  constructor(private readonly serversService: ServersService) {}

  @Post()
  create(@Body() server: CreateServerDto) {
    return this.serversService.create(server);
  }

  @Get()
  findAll() {
    return this.serversService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try{
      return await this.serversService.findOne(parseInt(id));
    }catch{
      throw new NotFoundException('No such user')
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() server: UpdateServerDto) {
    try{
      return await this.serversService.update(parseInt(id), server);
    }catch{
      throw new NotFoundException('No such user')
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try{
      return await this.serversService.remove(parseInt(id));
    }catch{
      throw new NotFoundException('No such user')
    }
  }
}
