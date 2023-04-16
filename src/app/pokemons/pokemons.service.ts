import {Injectable} from "@angular/core";
import {Pokemon} from "./donnees-pokemons/pokemon";
import {POKEMONS} from "./donnees-pokemons/mock-pokemon";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {of} from "rxjs";
import {catchError, tap} from "rxjs";


@Injectable()
export class PokemonsService {

  private pokemonsUrl = 'api/pokemons';

  constructor(private http: HttpClient) {
  }

  private log(log: string) {
    console.info(log);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T);
    }
  }

  getPokemons(): Observable<Pokemon[]> {
    console.log(this.pokemonsUrl)
    return this.http.get<Pokemon[]>(this.pokemonsUrl)
  }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`fetched pokemons`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    )
  }

  savePokemon(pokemon: Pokemon): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap(_ => this.log(`updated Pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatePokemon'))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap(_ => this.log(`added Pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('addPokemon'))
    );
  }

  deletePokemon(pokemon: Pokemon): Observable<null> {
    const url = `${this.pokemonsUrl}/${pokemon.id}`
    return this.http.delete(url).pipe(
      tap(_ => this.log(`deleted Pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('deletePokemon'))
    );
  }

}
