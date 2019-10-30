import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MonsterModule } from './monster/monster.module';
import { AttackModule } from './attack/attack.module';

@Module({
  imports: [ MonsterModule, AttackModule ],
  controllers: [],
  providers: [AppService]
})
export class AppModule {}
