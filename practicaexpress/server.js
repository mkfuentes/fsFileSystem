const http = require ('http')

const server = http.createServer((request, response) => {
    console.log('Request ;d')
    console.log('headers', request.url)
    console.log(request.method)
    if (request.url === '/miguel'){
        if (request.method === 'GET'){
        response.write('Hola Miguel')
    } else {
        response.write('no eres Miguel')
    }
    response.end()
})

server.listen(8080, () => {
    console.log('Server is listening in localhost:8080')
})