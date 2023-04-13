import { Injectable } from "@angular/core";
import { Pokemon } from "./donnees-pokemons/pokemon";
import { POKEMONS } from "./donnees-pokemons/mock-pokemon";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap, of, Observable } from "rxjs";

@Injectable()
export class PokemonService {

    constructor(private http: HttpClient){}

    private pokemonUrl = 'api/pokemons';

    /*
        getPokemons(): Pokemon[]{
            return POKEMONS
        }
    */

        private log(log: string){
            console.info(log);
        }

        private handleError <T>(operation = 'operation', result?:T){
            return (error: any): Observable <T> => {
                console.log(error);
                console.log(`${operation} failed: ${error.message}`)

                return of(result as T);
            }
        }

        //Le pipe async est un pipe capable de consommer des Observables ou promise en appelant impclicitement la méthode 
        //subscribe (ou then) afin de binder les valeurs contenus dans l'observable (ou la promise)
        getPokemons(): Observable <Pokemon[]>{
            return this.http.get <Pokemon[]> (this.pokemonUrl).pipe(
                tap(list => console.log(`fetched pokemons`,list)),
                catchError(erreur=>{console.log(erreur);return of ([])})
            );
        }
        /*
        getPokemons(): Observable <any>{
            return this.http.get  (this.pokemonUrl);
        }
        */
    //Retourner le pokémon avec l'identifiant passé en paramètre 
    getPokemon(id: number): Observable <Pokemon>{
        const url = `${this.pokemonUrl}/${id}`

        return this.http.get<Pokemon>(url).pipe(
            tap(_ => this.log(`fetched pokemons`)),
            catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
        )
    }

    getPokemonTypes(): string[]{
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Elektric', 'Poison', 'Fée', 'Vol'];
    }
    
}