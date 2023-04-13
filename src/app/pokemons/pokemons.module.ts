import { NgModule } from '@angular/core';
import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonsProjectComponent } from '../pokemon/detail-pokemons.project/detail-pokemons.project.component';
import { EditPokemonComponent } from '../edit-pokemon/edit-pokemon.component';
import { FormsModule } from '@angular/forms';
import { FormPokemonComponent } from '../edit-pokemon/form-pokemon.component';
import { PokemonService } from './pokemons.service';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './directive/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color';

import { PokemonRoutingModule } from './pokemons-routing.module';

@NgModule({
  declarations: [
    PokemonsComponent,
    DetailPokemonsProjectComponent,
    EditPokemonComponent,
    FormPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: []
})
export class PokemonModule { }
