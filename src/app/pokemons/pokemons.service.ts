import { Injectable } from "@angular/core";
import { Pokemon } from "./donnees-pokemons/pokemon";
import { POKEMONS } from "./donnees-pokemons/mock-pokemon";

@Injectable()
export class PokemonService {

    constructor(){}

        getPokemons(): Pokemon[]{
            return POKEMONS
        }

    //Retourner le pokémon avec l'identifiant passé en paramètre 
    getPokemon(id: number){
        let pokemons = this.getPokemons()

        for(let i=0; i< pokemons.length; i++){
            if (pokemons[i].id == id){
              return pokemons[i];
            }
          }
          return false
    }
    
}