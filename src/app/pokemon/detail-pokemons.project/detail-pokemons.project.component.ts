import { Component } from '@angular/core';

import { Pokemon } from 'src/app/pokemons/donnees-pokemons/pokemon';
import { POKEMONS } from 'src/app/pokemons/donnees-pokemons/mock-pokemon';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-pokemons.project',
  templateUrl: './detail-pokemons.project.component.html',
  styleUrls: ['./detail-pokemons.project.component.css']
})
export class DetailPokemonsProjectComponent {
  pokemons !: Pokemon[];
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void{
    this.pokemons = POKEMONS
    let idUrl= this.route.snapshot.params['id']

    for(let i=0; i< this.pokemons.length; i++){
      if (this.pokemons[i].id == idUrl){
        this.pokemon = this.pokemons[i];
      }
    }
  }

  goBack(){
    this.router.navigate(['pokemon/all'])
  }

  edit(){
    this.router.navigate(['edit/:id'])
  }
}
