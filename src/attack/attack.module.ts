import { Module } from '@nestjs/common';
import { AttackService } from './attack.service';
import { AttackController } from './attack.controller';

@Module({
  providers: [AttackService],
  controllers: [AttackController]
})
export class AttackModule {}
