import { Component } from '@angular/core';

import { Pokemon } from 'src/app/pokemons/donnees-pokemons/pokemon';
import { POKEMONS } from 'src/app/pokemons/donnees-pokemons/mock-pokemon';
import {Router, ActivatedRoute} from '@angular/router';
import { PokemonService } from '../pokemons/pokemons.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html'
})
export class EditPokemonComponent {
  pokemons !: Pokemon[];
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private PokemonService: PokemonService){ }

  ngOnInit(): void{
    this.pokemons = POKEMONS
    let idUrl= this.route.snapshot.params['id']
    console.log(this.route.snapshot.params['id']);

    for(let i=0; i< this.pokemons.length; i++){
      if (this.pokemons[i].id == idUrl){
        this.pokemon = this.pokemons[i];
      }
    }
  }

  goBack(){
    this.router.navigate(['pokemon/all'])
  }

}
