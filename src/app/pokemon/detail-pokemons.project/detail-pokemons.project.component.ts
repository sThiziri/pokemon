import { Component } from '@angular/core';

import { Pokemon } from 'src/app/pokemons/donnees-pokemons/pokemon';
import { POKEMONS } from 'src/app/pokemons/donnees-pokemons/mock-pokemon';
import {Router, ActivatedRoute} from '@angular/router';
import { PokemonService } from 'src/app/pokemons/pokemons.service';
@Component({
  selector: 'app-detail-pokemons.project',
  templateUrl: './detail-pokemons.project.component.html',
  styleUrls: ['./detail-pokemons.project.component.css']
})
export class DetailPokemonsProjectComponent {
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService){ }

  ngOnInit(): void{
    let idUrl= this.route.snapshot.params['id']
    this.pokemon = this.pokemonService.getPokemon(idUrl).subscribe( 
    pokemon => this.pokemon = pokemon 
    )
  }

  goBack(){
    this.router.navigate(['pokemon/all'])
  }

  goEdit(pokemon: Pokemon):void{
    let link = ['pokemon/edit',pokemon.id];
    this.router.navigate(link)
  }
}
