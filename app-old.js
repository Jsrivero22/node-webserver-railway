
const http = require('http');

http.createServer(( request, response ) => {

    // console.log(request);

    // response.writeHead(200, { 'Content-Type': 'application/json'});
    // response.writeHead(200, { 'Content-Type': 'text/plain'});

    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // response.writeHead(200, { 'Content-Type': 'application/csv'});

    // const persona = {
    //     id: 1,
    //     name: 'Antonio'
    // }
    // response.write( JSON.stringify(persona));

    // response.write('id, nombre\n' );
    // response.write('1, Anotnio\n' );
    // response.write('2, Jose\n' );
    // response.write('3, Franci\n' );
    // response.write('4, Dhamelys\n' );


    // response.write('404 | Page not found');

    response.write('hola mundo');
    response.end();

})
.listen( 8080 );

console.log('Escuchando el puerto', 8080)