import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../donnees-pokemons/pokemon";
import { POKEMONS } from "../donnees-pokemons/mock-pokemon";
//Importation d'Angular le router pour les liens
import { Router } from "@angular/router";

@Component({
    selector: 'list-pokemon',
    templateUrl:'./pokemons.component.html'
})
export class PokemonsComponent implements OnInit{
    pokemons !: Pokemon[]

    constructor(private router: Router){}

    ngOnInit(): void {
        //J'insère les données de mock-pokemon.ts dans la variable pokemons du composant
        this.pokemons = POKEMONS
    }

    selectPokemon(pokemon: Pokemon){
        console.log(pokemon.id);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }

}