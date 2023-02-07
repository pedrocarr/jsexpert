const http = require('http')
const DEFAULT_USER = {
  username: "PedroCarvalho",
  password: "123"
}


const routes = {
  '/contact:get': (req, res) => {
    res.write('contact us page')
    return res.end()
  },

  '/rating:get': (req, res) => {
    res.write('rating page')
    return res.end()
  },

  '/login:post': async (req, res) => {
    for await (const data of req) {
      const obj = JSON.parse(data)
      const { username, password } = obj
      const isValid = DEFAULT_USER.username === username && DEFAULT_USER.password === password
      if (!isValid) {
        res.writeHead(401)
        res.write('Logging failed')
        return res.end()
      }
      res.write('Logging has succeeded!')
      return res.end()
    }
  },

  default: (req, res) => {
    res.write('Hello World!')
    return res.end()
  }
}

const handler = (req, res) => {
  const { url, method } = req
  const routeKey = `${url}:${method.toLowerCase()}`
    const chosen = routes[routeKey] || routes.default
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    return chosen(req, res)
}

const app = http.createServer(handler)
                .listen(3000, () => console.log('Server is running at http://localhost:3000'))


module.exports = app
