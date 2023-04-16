import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonsComponent} from "./list-pokemons/pokemons.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {EditPokemonComponent} from "./edit-pokemon/edit-pokemon.component";
import {AddPokemonComponent} from "./add-pokemon/add-pokemon.component";
import {AuthGuard} from "../auth/auth.guard";

// const pokemonsRoutes: Routes = [
//   { path:"", redirectTo: 'pokemon/all', pathMatch:"full" },
//   { path: "pokemon/all", component: PokemonsComponent },
//   { path: "pokemon/:id", component: DetailPokemonComponent },
//   { path: "pokemon/edit/:id", component: EditPokemonComponent },
// ];

const pokemonsRoutes: Routes = [
  {
    path: "pokemon",
    canActivate: [AuthGuard],
    children: [
      {path: "all", component: PokemonsComponent},
      {path: "edit/:id", component: EditPokemonComponent},
      {path: "add", component: AddPokemonComponent},
      {path: ":id", component: DetailPokemonComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule {
}
