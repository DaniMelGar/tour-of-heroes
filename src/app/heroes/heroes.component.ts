import { Component } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {}

  //heroes: Hero[] = []
  $hero = this.heroService.getHeroes()

}
