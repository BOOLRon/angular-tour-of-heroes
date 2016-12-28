import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{

    // getHero(id: number): Promise<Hero> {
    //     return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    // }

    getHero(id: number): Hero {
        let heroes = this.getHeroes();
        return heroes.find(hero => hero.id === id);
    }

    // getHeroes(): Promise<Hero[]> {
    //     return Promise.resolve(HEROES);
    // }

    getHeroes(): Hero[] {
        return HEROES;
    }

    // getHeroesSlowly(): Promise<Hero[]> {
    //     return new Promise(resolve => {
    //     setTimeout(() => resolve(this.getHeroes()), 2000);
    // });

}
