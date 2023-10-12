import { UUID, randomUUID } from "crypto";


export class Database {
  #videos = new Map();

  public list(){
    return Array.from(this.#videos.entries()).map((items) => {
      const id = items[0];
      const data = items[1];
      return {
        id, 
        ...data
      }
    });
  }

  public create (video:Ivideo){
    const id = randomUUID();
    this.#videos.set(id, video);
    //console.log(Array.from(this.#videos.entries()));
  }

  public update(id: UUID, video:Ivideo){
    this.#videos.set(id, video);
  }

  public delete(id:UUID){
    this.#videos.delete(id);
  }
}


export interface Ivideo{
  title: string
  description: string, 
  duration: number
}