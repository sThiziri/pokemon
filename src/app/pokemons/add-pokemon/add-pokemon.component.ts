import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../donnees-pokemons/pokemon";
import {PokemonsService} from "../pokemons.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html'
})
export class AddPokemonComponent implements OnInit {

  pokemon!: Pokemon;
  types: any = [];

  constructor(private router: Router, private pokemonService: PokemonsService) {
  }

  getPokemonTypes(): string[] {
    return ["Plante", "Feu", "Eau", "Electrik"];
  }

  ngOnInit() {
    this.pokemon = new Pokemon();
    this.types = this.getPokemonTypes();
  }

  // Détermine si e type est passé en paramètres appartient ou no au pokémon en cours d'édition
  hasType(type: string): boolean{
    let index = this.pokemon.types.indexOf(type);
    return index > -1;
  }

  // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon au cours d'édition
  selectType($event: any, type: string): void {
    let checked = $event.target.checked;

    if (checked) {
      this.pokemon.types.push(type);
    } else {
      let index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  isTypesValid(type: string): boolean{
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit(): void {
    this.pokemonService.addPokemon(this.pokemon)
      .subscribe(pokemon => this.router.navigate(['/pokemon', pokemon.id]));
  }

  goBack(): void {

  }

}
