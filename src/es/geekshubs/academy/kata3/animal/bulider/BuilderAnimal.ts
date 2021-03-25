import { Animal } from "../model/animal/Animal";
import { AnimalImpl } from "../model/animal/AnimalImpl";
import { HorseImpl } from "../model/horse/HoreImpl";
import { SnakeImpl } from "../model/snake/SnakeImpl";

export class BuilderAnimal {

    list = new Array<Animal>();

    constructor() {
        this.list.push(new HorseImpl("Horse-1"));
        this.list.push(new AnimalImpl("Animal-1"));
        this.list.push(new SnakeImpl("Snake-1"));
        this.list.push(new HorseImpl("Horse-2"));
        this.list.push(new AnimalImpl("Animal-2"));
        this.list.push(new SnakeImpl("Snake-2"));
        this.list.push(new HorseImpl("Horse-3"));
        this.list.push(new SnakeImpl("Snake-3"));
        this.list.push(new AnimalImpl("Animal-3"));
        this.list.push(new SnakeImpl("Snake-4"));
    }   
    
}