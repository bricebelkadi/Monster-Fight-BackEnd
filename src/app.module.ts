import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MonsterModule } from './monster/monster.module';
import { MonsterService } from './monster/monster.service';
import { MonsterController } from './monster/monster.controller';
import { AttackModule } from './attack/attack.module';

@Module({
  imports: [, MonsterModule, AttackModule, ],
  controllers: [, MonsterController, ],
  providers: [AppService, MonsterService],
})
export class AppModule {}
