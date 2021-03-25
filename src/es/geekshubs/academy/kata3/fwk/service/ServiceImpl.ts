import { Repository } from '../repository/Repository';
import { Service } from './Service';

export class ServiceImpl<T> implements Service<T> {
    
    constructor(public repository : Repository<T>) { }

    get(index:number) : T {
        return this.getList()[index];
    }

    put(dato: T) : number {
        return this.getList().push(dato);
    }

    shift() : T {
        return this.getList().shift()!;
    }

    pop() : T {
        return this.getList().pop()!;
    }

    length() : number {
        return this.getList().length;
    }

    private getList() {
        return this.repository.getList();
    }
}



