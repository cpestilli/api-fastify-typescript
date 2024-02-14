import fastify from 'fastify'
import { DatabasePostgres, Ivideo } from './database-postgres'
import { randomInt } from 'crypto';

const server = fastify({
    logger: true
  });

const database = new DatabasePostgres();
 try{
    database.checkPostges();
 }catch(e){
    console.error(e);
 }

// Declare a route
server.get('/ping', async (request, reply) => {
return { pong: 'it worked!' }
})

server.get('/videos', async (request) => {
    const search = request.query.search;
    //console.log('entrou get -> search'+ search);
    const videos = database.list(search);
    return videos ;
})

server.post('/videos', async (request, reply) => {
    const  body = request.body as Ivideo;
    
    //console.log(body);

    const random = randomInt(1000);
   await database.create({
        title: body.title + random,
        description: body.description + random,
        duration: body.duration
    })
    
    return reply.status(201).send();
})


server.put('/videos/:id', (request, reply) => {
    //console.log(request.params);
    //console.log(request.query);

    const id = request.params.id;
    //console.log(id);
    const  body = request.body as Ivideo;
    console.log("update------------->>"+id+ '-'+JSON.stringify(body));
    database.update(id, {
        title: body.title,
        description: body.description,
        duration: body.duration
    })

    return reply.status(204).send();
})


server.delete('/videos/:id', async  (request, reply) => {
    const id = request.params.id;

    database.delete(id);

    return reply.status(200).send();
})

// Run the server!
server.listen({ port: 3000, host: '0.0.0.0'}, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })
