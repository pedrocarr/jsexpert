const Service = require('./service')
const { deepStrictEqual } = require('assert')
const sinon = require('sinon')
const BASE_URL_1 = "https://api.spacexdata.com/v4/ships/5ea6ed2d080df4000697c901"
const BASE_URL_2 = "https://api.spacexdata.com/v4/ships/5ea6ed2e080df4000697c90a"
const BASE_URL_3 = "https://api.spacexdata.com/v4/ships/5ea6ed30080df4000697c916"


const mocks = {
  americanChampion: require('./mocks/americanChampion.json'),
  goPursuit: require('./mocks/goPursuit.json'),
  rachel: require('./mocks/rachel.json'),
}

;(async () => {
  const service = new Service()
  const stub = sinon.stub(service, service.makeRequest.name)

  stub.withArgs(BASE_URL_1).resolves(mocks.americanChampion)

  stub.withArgs(BASE_URL_2).resolves(mocks.goPursuit)

  stub.withArgs(BASE_URL_3).resolves(mocks.rachel)

  {
    const expected = {
      "name": "American Champion",
      "type": "Tug",
      "active": false,
      "roles": [
        "Support Ship",
        "Barge Tug"
      ],
      "home_port": "Port of Los Angeles",
      "year_built": 1976
    }
    const results = await service.getShips(BASE_URL_1)
    deepStrictEqual(results, expected)
  }

  {
    const expected = {
      "name": "GO Pursuit",
      "type": "Cargo",
      "active": false,
      "roles": [
        "Support Ship",
        "Fairing Recovery"
      ],
      "home_port": "Port Canaveral",
      "year_built": 2007
    }
    const results = await service.getShips(BASE_URL_2)
    deepStrictEqual(results, expected)
  }

  {
    const expected = {
      "name": "RACHEL",
      "type": "Tug",
      "active": false,
      "roles": [
        "ASDS Tug",
      ],
      "home_port": "Port Canaveral",
      "year_built": 1976
    }
    const results = await service.getShips(BASE_URL_3)
    deepStrictEqual(results, expected)
  }

})()
