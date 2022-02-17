const http = require('http')

const handler = function(request, response) {
    return response.end('Hello World!')
}

const app = http.createServer(handler)
                .listen(3000, () => console.log("app running on", 3000))

module.exports = app