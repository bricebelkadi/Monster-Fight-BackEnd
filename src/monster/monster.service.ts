import { Monster } from './../models/monster';
import { Injectable } from '@nestjs/common';

@Injectable()

export class MonsterService {

    allMonter: Monster[] = [
        {
            id: 1,
            name: "Jason", 
            image: "",
            description: "",
            attack: 150,
            life: 125,
            energy: 100,
            defense: 125
        },
        {
            id: 2,
            name: "Dracula", 
            image: "",
            description: "",
            attack: 100,
            life: 150,
            energy: 150,
            defense: 100
        }
    ];

    getMonsters(): Monster[] {
        return this.allMonter;
    }

    getMonsterById(id: string) {
        return this.allMonter.find(monster => monster.id === Number(id));
    }

}
