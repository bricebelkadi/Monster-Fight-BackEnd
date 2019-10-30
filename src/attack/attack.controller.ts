import { Controller, Get, Param } from '@nestjs/common';
import { AttackService } from './attack.service';
import { AttackInterface } from 'src/models/attack.interface';

@Controller('attack')
export class AttackController {

    constructor(private readonly service: AttackService) {}

    @Get('/monster/:id')
    findAttackByIdMonster(@Param('id') id: string): AttackInterface[] {
        return this.service.findAttackByIdMonster(id);
    }

    @Get(':id')
    findAttackById(@Param('id') id: string): AttackInterface {
        return this.service.findAttackById(id);
    }

    @Get()
    findAllAttack(): AttackInterface[] {
        return this.service.findAllAttack();
    }


}
