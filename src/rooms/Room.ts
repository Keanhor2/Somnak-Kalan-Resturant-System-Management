import { Tables } from "./tables/Tables";
export class Room {
  private tables: Tables[]=[];
  constructor(private id: number) {}
  addTable(...table: Tables[]){
    this.tables = this.tables.concat(table);
  }
  getRoomId():number{
    return this.id;
  }
  getTable(){
    return this.tables;
  }

 
}
