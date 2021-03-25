
    

    /// MOCKS ///

    test('Mock getMockName example', function () {
        //Arrange
        const mock = jest.fn();
        //Act
        var name =  mock.getMockName();
        //Assert
        expect(name).toEqual("jest.fn()");

        var expectedSetter = "Soy un mock";
        mock.mockName(expectedSetter);
        expect(mock.getMockName()).toEqual(expectedSetter);
    });

    
    test('Mock toHaveBeenCalled example', function () {
        //Arrange
        const mock = jest.fn().mockName("Mock");
        //Act
        var call = mock();
        //Assert
        expect(mock).toHaveBeenCalled();
    });


    test('Mock function example', function () {
        //Arrange
        const list = [1,2,3,4,5];
        const mock = jest.fn(()=>{
            return list;
        });
        
        //Act
        var call = mock();
        //Assert
        expect(call).toBe(list);
    });


    test('Mock mockReturnValue example', function () {
        //Arrange
        const list = [1,2,3,4,5];
        const mock = jest.fn().mockReturnValue(list);
        //Act
        var call = mock();
        //Assert
        expect(call).toBe(list);
    });

    test('Mock mockReturnValueOnce example', function () {
        //Arrange
        const list1 = [1,2,3,4,5];
        const list2 = [1,2,3,4];
        const mock = jest.fn()
            .mockReturnValue(list1)      // llamada por defecto
            .mockReturnValueOnce(list2); // Primera llamada ...
        //Act
        var call1 = mock();
        var call2 = mock();
        //Assert
        expect(call1).toBe(list2);
        expect(call2).toBe(list1);
    });

    function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    test('Mock Async example', async () => {
        //Arrange
        const expected = "Resolved";
        
        //La 2 siguientes llamadas son equivalentes
        const _mockAsync = jest.fn().mockImplementation( async () => {
            await delay(5000);
            return expected;
        } );

        const mockAsync = jest.fn().mockResolvedValue(expected);

        //Act
        var call = await _mockAsync();
        //Assert
        expect(call).toEqual(expected);
    });

    
    test('Mock Async mockReturnValueOnce example',  async () => {
        //Arrange
        const list1 = [1,2,3,4,5];
        const list2 = [1,2,3,4];
        const mock = jest.fn()
            .mockResolvedValue(list1)      // llamada por defecto
            .mockResolvedValueOnce(list2); // Primera llamada ...

        //Act
        var call1 = await mock();
        var call2 = await mock();
        //Assert
        expect(call1).toBe(list2);
        expect(call2).toBe(list1);
    });

    
    test('Mock Async rejected example',  async () => {
        //Arrange

        try {
        //La 2 siguientes llamadas son equivalentes
        //jest.fn().mockImplementation(() => Promise.reject(value));
        const mock = jest.fn().mockRejectedValue(new Error('Async error'));

        //Act
        await mock();
        }
        catch(e) {
            //Assert
            expect(e.message).toBe('Async error');
        }

    });