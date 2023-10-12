import fastify from 'fastify'
import { Database, Ivideo } from './database'

const server = fastify()
const database = new Database();

server.get('/videos', () => {
    console.log('teste');
    const videos = database.list();
    return videos ;
})

server.post('/videos', (request, reply) => {
    const  body = request.body as Ivideo;
    
    console.log(body);

    database.create({
        title: body.title,
        description: body.description,
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

server.listen({ 
    port: 8080 
}, (err, address) => {
  
    if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})