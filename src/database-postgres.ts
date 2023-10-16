import { UUID, randomUUID } from "crypto";
import  {sql}  from './db'


export class DatabasePostgres {
  #videos = new Map();

  public async checkPostges(){
    console.log('checkPostges--------------->');

    //const result = await sql`select * from pg_catalog.pg_type where typname = ${ 'bool' }`;
    //let result = await sql`CREATE TABLE IF NOT EXISTS public."videos"(id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),title VARCHAR(32) unique, description VARCHAR(100) not null, duration integer);`
    //console.log(result);

     //result = await sql`CREATE EXTENSION IF NOT EXISTS pg_trgm SCHEMA pg_catalog;`
    const result = await sql`SELECT VERSION()`
    console.log('POSTGRES VERSION ---->' + result);

  }
  public async list(search: string){
    //const videos = await sql `SELECT * FROM videos ILIKE ${'%' + sql(search) + '%'}`
    const videos = await sql `SELECT * FROM videos`
    return videos;
  }

  public async create (video:Ivideo){
    //const id = randomUUID();
    console.log('---------------->'+video)
    await sql `INSERT INTO videos ${sql(video)}`;
    
  }

  public update(id: UUID, video:Ivideo){
    
  }

  public delete(id:UUID){
   
  }
}


export interface Ivideo{
  id?: UUID,
  title: string, 
  description: string, 
  duration: number
}