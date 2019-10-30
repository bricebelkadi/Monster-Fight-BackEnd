import { MonsterModule } from './monster/monster.module';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AttackModule } from './attack/attack.module';


@Module({
  imports: [ AttackModule, MonsterModule ],
  controllers: [ ],
  providers: [AppService ],
})
export class AppModule {}
