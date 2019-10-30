import { Module } from '@nestjs/common';
import { MonsterService } from './monster.service';
import { MonsterController } from './monster.controller';

@Module({
    imports: [ ],
    controllers: [ MonsterController ],
    providers: [MonsterService],
})
export class MonsterModule {}
