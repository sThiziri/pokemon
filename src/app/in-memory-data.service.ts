import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { POKEMONS } from "./pokemons/donnees-pokemons/mock-pokemon";
import { Observable } from "rxjs";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let pokemons = POKEMONS;
        return { pokemons };
    }
}