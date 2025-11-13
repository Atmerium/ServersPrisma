import { Module } from '@nestjs/common';
import { ServersService } from './servers.service';
import { ServersController } from './servers.controller';
import { Prisma } from 'generated/prisma/browser';
import { PrismaService } from 'src/Prisma.Service';

@Module({
  controllers: [ServersController],
  providers: [ServersService, PrismaService],
})
export class ServersModule {}
