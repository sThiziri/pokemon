import {Component, OnInit, Input} from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'form-pokemon',
    templateUrl: './form-pokemon.component.html'
})
export class FormPokemonComponent implements OnInit{

    @Input() pokemon: any

    type: any= [];

    constructor(private router: Router){}

    ngOnInit(): void {
        this.types = this.getPokemonTypes();
    }

    getPokemonTypes(): string[]{
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Elektric', 'Poison', 'Fée', 'Vol'];
    }
}