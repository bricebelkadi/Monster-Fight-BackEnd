import { Monster } from './../models/monster';
import { MonsterService } from './monster.service';
import { Controller, Get, Param, Inject, forwardRef } from '@nestjs/common';

@Controller('monster')

export class MonsterController {

    constructor( private readonly monsterService: MonsterService) {
    }

    @Get()
        getMonsters(): Monster[] {
            return this.monsterService.getMonsters();
        }

    @Get(':id')
        getMonsterById(@Param('id') id: string) {
            return  this.monsterService.getMonsterById(id);
    }
}
