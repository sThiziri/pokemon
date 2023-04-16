import { Pipe, PipeTransform } from "@angular/core";

/**
 * Exemple d'utilisation
 * {{ pokemon.type | pokemonTypeColor }}
 */
@Pipe({ name: "pokemonTypeColor" })
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;

    switch (type) {
      case "Feu":
        color = "red ligten-1";
        break;

      case "Eau":
        color = "blue lighten-1";
        break;

      case "Plante":
        color = "green ligthen-1";
        break;

      case 'Normal':
        color = 'grey lighten-3';
        break;

      case 'Vol':
        color = 'blue lighten-3';
        break;

      case 'Poison':
        color = 'deep-purple accent-1';
        break;

      case 'Psy':
        color = 'deep-purple darken-2';
        break;

      case 'Electrik':
        color = 'lime accent-1';
        break;

      default:
        color = "grey";
        break;
    }

    return "chip " + color;
  }

}
