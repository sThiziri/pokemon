import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "pokemonRarity" })
export class PokemonRarityPipe implements PipeTransform {

  transform(rarity: string): string {
    return '<font color="red"><b>' + rarity + '</b></font>';
  }

}
