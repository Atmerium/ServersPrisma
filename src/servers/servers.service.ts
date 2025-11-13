import { Injectable } from '@nestjs/common';
import { PrismaService } from '../Prisma.Service';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';

@Injectable()
export class ServersService {
  constructor(private readonly db:PrismaService){}
  create(server: CreateServerDto) {
    return this.db.servers.create({
      data: server
    })
  }

  findAll() {
    return this.db.servers.findMany();
  }

  findOne(id: number) {
    return this.db.servers.findUniqueOrThrow({
      where:{
        id: id
      }
    })
  }

  update(id: number, server: UpdateServerDto) {
    return this.db.servers.update({
      where: {id},
      data: server
    })
  }

  remove(id: number) {
    return this.db.servers.delete({
      where:{
        id
      }
    })
  }
}
