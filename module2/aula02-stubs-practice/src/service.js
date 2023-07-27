const https = require('https')
const { join } = require('path')
const { writeFile } = require('fs/promises')
const mocksBaseFolder = join(__dirname, '../src/', 'mocks')


class Service {
  async makeRequest(url) {
      return new Promise ((resolve, reject) => {
          https.get(url, response => {
              response.on("data", data => resolve(JSON.parse(data)))
              response.on("error", reject)
          })
      })
  }

  async getShips(url) {
      const result = await this.makeRequest(url)

      return {
          name: result.name,
          type: result.type,
          active: result.active,
          roles: result.roles,
          home_port: result.home_port,
          year_built: result.year_built
      }
  }
}

module.exports = Service
//   const write = (filename, data) => writeFile(join(mocksBaseFolder, filename), JSON.stringify(data, null, 2))
// // batendo na internet
// ;(async () => {

//     const result = await new Service().makeRequest('https://api.spacexdata.com/v4/ships/5ea6ed30080df4000697c916')

//     await write("rachel.json", result)
// })()
