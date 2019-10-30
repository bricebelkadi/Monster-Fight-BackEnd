import { Injectable } from '@nestjs/common';
import { AttackInterface } from 'src/models/attack.interface';

@Injectable()
export class AttackService {
    allAttack: AttackInterface[] = [
        {
            id: 1,
            idMonster: 1,
            title: "Coup de Hache",
            damage: 50,
            ratio: 1,
            caracteristic: "life",
            cost: 80,
            toTheOpponent: true,
            sprites: ""
        },
        {
            id: 2,
            idMonster: 1,
            title: "Etranglement",
            damage: 20,
            ratio: 1,
            caracteristic: "life",
            cost: 30,
            toTheOpponent: true,
            sprites: ""
        },
        {
            id: 3,
            idMonster: 1,
            title: "Berserk",
            damage: 10,
            ratio: 1,
            caracteristic: "attack",
            cost: 20,
            toTheOpponent: false,
            sprites: ""
        },
        {
            id: 4,
            idMonster: 1,
            title: "Saignement",
            damage: 5,
            ratio: 1,
            caracteristic: "life",
            cost: 25,
            toTheOpponent: true,
            sprites: ""
        },
        {
            id: 5,
            idMonster: 2,
            title: "Croc",
            damage: 30,
            ratio: 1,
            caracteristic: "life",
            cost: 60,
            toTheOpponent: true,
            sprites: ""
        },
        {
            id: 6,
            idMonster: 2,
            title: "Lancer de chauve-souris",
            damage: 15,
            ratio: 1,
            caracteristic: "life",
            cost: 40,
            toTheOpponent: true,
            sprites: ""
        },
        {
            id: 7,
            idMonster: 2,
            title: "Lecture approfondi",
            damage: 20,
            ratio: 1,
            caracteristic: "energy",
            cost: 25,
            toTheOpponent: false,
            sprites: ""
        },
        {
            id: 8,
            idMonster: 2,
            title: "Transfusion sanguine",
            damage: 5,
            ratio: 1,
            caracteristic: "life",
            cost: 30,
            toTheOpponent: false,
            sprites: ""
        },
    ];

    findAttackByIdMonster(id: string): AttackInterface[]     {
        return this.allAttack.filter(attack => attack.idMonster === Number(id));
    }

    findAttackById(id: string): AttackInterface {
        return this.allAttack.find(attack => attack.id === Number(id));
    }

    findAllAttack(): AttackInterface[] {
        return this.allAttack;
    }
}
