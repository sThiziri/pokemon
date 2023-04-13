import {Component, OnInit, Input} from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { PokemonService } from "../pokemons/pokemons.service";

@Component({
    selector: 'form-pokemon',
    templateUrl: './form-pokemon.component.html'
})
export class FormPokemonComponent implements OnInit{

    @Input() pokemon: any

    type: any= [];

    constructor(private router: Router, private pokemonService: PokemonService){}

    ngOnInit(): void {
        this.type = this.getPokemonTypes();
    }

    getPokemonTypes(): string[]{
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Elektric', 'Poison', 'Fée', 'Vol'];
    }

    //Détermine si le type est passé en paramètres appartient ou non au pokémon en cours d'édition

    hasType(type: string):boolean{
        let index = this.pokemon.types.indexOf(type)

        if(index > -1){
            return true
        }else{
        return false
        }
    }

    //Méthode appelée lorsque l'utilisateur ajoute ou retire un type de pokémon en cours d'édition
    selectType($event: any, type: string): void{
        let checked = $event.target.checked

        if(checked){
            this.pokemon.types.push(type)
        } else {
            let index = this.pokemon.types.indexOf(type)
            if(index > -1){
                this.pokemon.types.splice(index,1)
            }
        }
    }

    //valide le nombre de types pour chaque pokémon
    isTypesValid(type: string): boolean{

        if(this.pokemon.types.length === 1 && this.hasType(type)){
            return false;
        }

        if(this.pokemon.types.length >= 3 && !this.hasType(type)){
            return false;
        }
            return true;
    }

    onSubmit():void {
        let link = ['/pokemon', this.pokemon.id]
        this.router.navigate(link)
    }

    goBack(){
        this.router.navigate(['/pokemon', this.pokemon.id])
      }
    
}