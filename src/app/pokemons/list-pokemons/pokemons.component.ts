import {Component, OnInit} from "@angular/core";

import {Pokemon} from "../donnees-pokemons/pokemon";
import {Router} from "@angular/router";
import {PokemonsService} from "../pokemons.service";

@Component({
  selector: "list-pokemon",
  templateUrl: "./pokemons.component.html"
})
export class PokemonsComponent implements OnInit {
  pokemons !: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonsService) {
  }

  ngOnInit(): void {
    // Insert data from mock
    //this.pokemons = this.pokemonService.getPokemons();
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons)
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon.id);
    let link = ["/pokemon", pokemon.id];
    this.router.navigate(link); // redirect to "/pokemon/1"
  }

  search(criteria: string) {
    this.pokemonService.getPokemons().subscribe(pokemons => {

      let pokemonsMatching = new Set<Pokemon>();

      pokemons.forEach(pokemon => {
        if (pokemon.name.toLowerCase().includes(criteria.toLowerCase()) || pokemon.rarity.includes(criteria)) {
          pokemonsMatching.add(pokemon);
          return;
        }

        let types = pokemon.types;
        for (let i = 0; i < types.length; i++) {
          if (types[i].toLowerCase().includes(criteria.toLowerCase())) {
            pokemonsMatching.add(pokemon);
            return;
          }
        }
      });

      this.pokemons = Array.from(pokemonsMatching.keys());
    });
  }

  sort(by: string) {
    switch (by) {
      case "name": {
          this.pokemons = this.pokemons.sort((pokemon1, pokemon2) => {
            return pokemon1.name.localeCompare(pokemon2.name);
          });
        break;
      }

      case "rarity": {
        this.pokemons = this.pokemons.sort((pokemon1, pokemon2) => {
          return pokemon2.rarity.length - pokemon1.rarity.length;
        });
        break;
      }

      default: break;
    }
  }
}
