const { describe, it, before  } = require('mocha')
const CarService = require('./../../src/service/carService')

const { join } = require('path')
const assert = require('assert')

const carsDatabase = join(__dirname, './../../database', 'cars.json')


describe('CarService Suite Tests', () => {
  let carService = {}
  before(() => {
    carService = new CarService({
      cars: carsDatabase
    })
  })
  it('given a carCategory it should return an available car', async () => {
    const result = await carService.getAvailableCar()
    const expected = {}
    assert.deepStrictEqual(result, expected)
    

  })
})