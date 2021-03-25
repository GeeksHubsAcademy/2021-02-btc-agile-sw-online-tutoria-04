export interface Service<T> {
    
    get(index:number) : T;

    put(dato: T) : number;

    shift() : T ;

    pop() : T ;
}