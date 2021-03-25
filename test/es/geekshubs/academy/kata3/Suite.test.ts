import { BuilderAnimal } from './../../../../../src/es/geekshubs/academy/kata3/animal/bulider/BuilderAnimal';
import { RepositoryImpl } from '../../../../../src/es/geekshubs/academy/kata3/fwk/repository/RepositoryImpl';
import { Repository } from '../../../../../src/es/geekshubs/academy/kata3/fwk/repository/Repository';
import { Animal } from "../../../../../src/es/geekshubs/academy/kata3/animal/model/animal/Animal";
import { AnimalImpl } from "../../../../../src/es/geekshubs/academy/kata3/animal/model/animal/AnimalImpl";
import { HorseImpl } from "../../../../../src/es/geekshubs/academy/kata3/animal/model/horse/HoreImpl";
import { Horse } from "../../../../../src/es/geekshubs/academy/kata3/animal/model/horse/Horse";
import { Snake } from "../../../../../src/es/geekshubs/academy/kata3/animal/model/snake/Snake";
import { SnakeImpl } from "../../../../../src/es/geekshubs/academy/kata3/animal/model/snake/SnakeImpl";
import { ServiceImpl } from '../../../../../src/es/geekshubs/academy/kata3/fwk/service/ServiceImpl';

const listMock = () => {
    const listMock = new Array<number>();
    listMock.push(1);
    listMock.push(2);
    listMock.push(3);
    return listMock;
}

const cookingMock = () => {
    const list = listMock();
    var mock = jest.fn().mockReturnValue(list);
    return mock();
}

describe('Testing', function (){

    test('Animal src name', function () {
        //Arrange
        var expected = "Animal-1";
        //Act
        var result = new AnimalImpl("Animal-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });

    test('Animal api name', function () {
        //Arrange
        var expected = "Animal-1";
        //Act
        var result : Animal = new AnimalImpl("Animal-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });

    test('Horse src name', function () {
        //Arrange
        var expected = "Horse-1";
        //Act
        var result = new HorseImpl("Horse-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });

    test('Horse api name', function () {
        //Arrange
        var expected = "Galloping...Horse-1 moved 45m.";
        //Act
        var result : Horse = new HorseImpl("Horse-1");
        //Assert
        expect(result.move()).toBe(expected);
    });

    test('Snake src name', function () {
        //Arrange
        var expected = "Snake-1";
        //Act
        var result = new SnakeImpl("Snake-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });

    test('Snake api name', function () {
        //Arrange
        var expected = "Slithering...Snake-1 moved 30m.";
        //Act
        var result: Snake = new SnakeImpl("Snake-1");
        //Assert
        expect(result.move()).toBe(expected);
    });


    /// REPOSITORY + BUILDER ///

    
    test('Repository<T extends number> api getList', function () {
       
        //Arrange
        var resultMock = cookingMock();
        //Act
        var result : Repository<number>  = new RepositoryImpl(resultMock);

        //Assert
        expect(result.getList()).toEqual(listMock());
    });

    test('Repository api getList Animal', function () {
        //Arrange
        var expected = new BuilderAnimal().list;
        //Act
        var result : Repository<Animal>  = new RepositoryImpl(expected);
        //Assert
        expect(result.getList()).toEqual(expected);
    });

    
    test('Repository api getList Animal', function () {
        //Arrange
        var expected = new BuilderAnimal().list;
        //Act
        var result  = new RepositoryImpl(expected);
        //Assert
        expect(result.getList()).toEqual(expected);
    });

    
    test('Repository<T> api getList', function () {
        //Arrange
        var resultMock = cookingMock();
        //Act
        var result  = new RepositoryImpl<number>(resultMock);
        //Assert
        expect(result.getList()).toEqual(listMock());
    });


    test('service - shift', function () {
        //Arrange
        var builder = new BuilderAnimal().list;
        var repository = new RepositoryImpl(builder);

        var horseExpected = builder[0];
        //Act
        var service =  new ServiceImpl(repository);
        var res = service.shift();

        //Assert
        expect(res).toEqual(horseExpected);
    });

    
    test('service - pop', function () {
        //Arrange
        var builder = new BuilderAnimal().list;
        var repository = new RepositoryImpl(builder);

        var SnakeExpected = builder[builder.length-1];
        //Act
        var service =  new ServiceImpl(repository);
        var res = service.pop();

        //Assert
        expect(res).toEqual(SnakeExpected);
    });

    test('service - push', function () {
        //Arrange
        var animal = new AnimalImpl("Animal");

        var builder = new BuilderAnimal().list;
        var repository = new RepositoryImpl(builder);
        //Act
        var service =  new ServiceImpl(repository);
        var res = service.put(animal);
        var animalExpected = builder[builder.length-1];

        //Assert
        expect(animal).toEqual(animalExpected);
    });

    test('service - get', function () {
        //Arrange
        const index = 1;
        var builder = new BuilderAnimal().list;
        var repository = new RepositoryImpl(builder);

        var animal = builder[index];
        //Act
        var service =  new ServiceImpl(repository);
        var res = service.get(index);

        //Assert
        expect(res).toEqual(animal);
    });

    test('service - length', function () {
        //Arrange
        var builder = new BuilderAnimal().list;
        const expected = builder.length + 1;
        var repository = new RepositoryImpl(builder);
        //Act
        var service =  new ServiceImpl(repository);
        service.put(new HorseImpl(""));
        const res = service.length();
        //Assert
        expect(res).toBe(expected);
    }); 

    
    test('service<T extends number> - length', function () {
        
        //Arrange
        const listMock = new Array<number>();
        listMock.push(1);
        listMock.push(2);
        listMock.push(3);

        var mock = jest.fn().mockReturnValue(listMock);
        const expected = listMock.length + 1;
        var repository = new RepositoryImpl<number>(mock());

        //Act
        var service =  new ServiceImpl<number>(repository);
        service.put(5);
        const res = service.length();
        //Assert
        expect(res).toBe(expected);
    }); 

});
