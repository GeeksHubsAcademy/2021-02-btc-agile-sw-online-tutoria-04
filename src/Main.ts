import { RepositoryImpl } from "./es/geekshubs/academy/kata3/fwk/repository/RepositoryImpl";
import { ServiceImpl } from "./es/geekshubs/academy/kata3/fwk/service/ServiceImpl";

function main() : void {

        const listMock = new Array<number>();
        listMock.push(1);
        listMock.push(2);
        listMock.push(3);

        var repository = new RepositoryImpl<number>(listMock);

        var service =  new ServiceImpl<number>(repository);
        service.put(5);
        const res = service.length();
        console.log("service - length: "+ res);
}

main();