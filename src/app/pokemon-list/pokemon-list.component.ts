import { Component } from '@angular/core';
import { Pokemon } from 'src/_model/Pokemon';
import { Type } from 'src/_model/Type';
import { PokemonService } from 'src/_services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent  {
  // public pokemons: Pokemon[] = [
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  //     number: 1,
  //     name: 'Bulbasaur',
  //     types: [
  //       Type.Grass,
  //       Type.Poison 
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
  //     number: 2,
  //     name: 'Ivysaur',
  //     types: [
  //       Type.Grass,
  //       Type.Poison 
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
  //     number: 3,
  //     name: 'Venosaur',
  //     types: [
  //       Type.Grass,
  //       Type.Poison 
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  //     number: 4,
  //     name: 'Charmander',
  //     types: [
  //       Type.Fire
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
  //     number: 5,
  //     name: 'Charmeleon',
  //     types: [
  //       Type.Fire
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
  //     number: 6,
  //     name: 'Charizard',
  //     types: [
  //       Type.Fire,
  //       Type.Flying
  //     ],
  //   },
    
  // ];


  constructor(
    public pokemonService: PokemonService
  ){

  }
    
}



