const Fibonacci = require('./fibonacci')
const sinon = require('sinon')
const assert = require('assert')

/*
Fibonacci: o próximo valor corresponde à soma dos dois anteriores

dado 3

0,1,1

dado 5

0,1,1,2,3

*/
;
(async() => {
    {
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(fibonacci, fibonacci.execute.name)
        fibonacci.execute(3)
        // nosso algoritmo sempre vai começar do 0
        const expectedCallCount = 4
        assert.deepStrictEqual(spy.callCount, expectedCallCount)
        
    }
})()