import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonsProjectComponent } from '../pokemon/detail-pokemons.project/detail-pokemons.project.component';
import { EditPokemonComponent } from '../edit-pokemon/edit-pokemon.component';
/*const pokemonsRoutes: Routes = [
  {path: 'pokemon/all', component : PokemonsComponent},
  {path:'pokemon/:id', component: DetailPokemonsProjectComponent},
   {path:'pokemon/edit/:id', component: EditPokemonComponent},
  ];
*/

const pokemonsRoutes: Routes = [
    {path: 'pokemon',
    children:[
        {path: 'all', component: PokemonsComponent},
        {path: 'edit/:id', component: EditPokemonComponent},
        {path: ':id', component: DetailPokemonsProjectComponent}
    ]
    
    }
    ];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
