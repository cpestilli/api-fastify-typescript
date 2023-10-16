import { UUID, randomUUID } from "crypto";


export class DatabaseMemory {
  #videos = new Map();

  public list(search: string){
    return Array.from(this.#videos.entries()).map((items) => {
      const id = items[0];
      const data = items[1];
      return {
        id, 
        ...data
      }
    })
    .filter(video =>  {
      if(search){
          return video.title.includes(search);
      }
      return true;
    })
  }
  

  public create (video:Ivideo){
    const id = randomUUID();
    this.#videos.set(id, video);  
  }

  public update(id: UUID, video:Ivideo){
    this.#videos.set(id, video);
  }

  public delete(id:UUID){
    this.#videos.delete(id);
  }
}


export interface Ivideo{
  id: UUID,
  title: string, 
  description: string, 
  duration: number
}