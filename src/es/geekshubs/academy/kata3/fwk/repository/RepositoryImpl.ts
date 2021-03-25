import { Repository } from "./Repository";

export class RepositoryImpl<T> implements Repository<T> {

    private list!: Array<T>;

    constructor(list: Array<T>) { 
        this.list = list;
    }

    getList() : Array<T> {
        return this.list;
    }
}