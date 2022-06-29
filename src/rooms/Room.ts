import { Tables } from "./tables/Tables";

export class Room {
  private tables: Tables[]=[];
  constructor(private id: number) {}
  addTableToRoom(...table: Tables[]){
    this.tables = this.tables.concat(table);
  }
  getRoomId():number{
    return this.id;
  }
}
