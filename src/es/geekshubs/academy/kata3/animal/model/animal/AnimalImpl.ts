import { Animal } from "./Animal";

export class AnimalImpl  implements Animal {

    private name : string;

    constructor( name:string ) {
        this.name = name;
     }
    
    move(meters: number) : string {
        return this.name + " moved " + meters + "m.";
    }

    getName() : string { return this.name; }

}
