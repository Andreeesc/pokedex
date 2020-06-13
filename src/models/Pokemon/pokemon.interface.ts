export interface  PokemonResultInterface {
    name: string,
    url: string
}

export interface PokemonListAPIInterface {
    count: number,
    next: string,
    previous: string,
    results: PokemonResultInterface[]
}