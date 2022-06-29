import { Orders } from "./Orders/Orders";
import { Tables } from "./tables/Tables";
export enum typeNumber{
  number1=1,
  number2=2,
  number3=3,
  number4=4,
  number5=5
}
export class Room {
  private tables: Tables[]=[];
  constructor(private id: number) {}
  addTableToRoom(...table: Tables[]){
    this.tables = this.tables.concat(table);
  }
  getRoomId():number{
    return this.id;
  }
  getCheckTable(num:typeNumber){
    let tables:Tables[]=[]
    for(let table of this.tables){
      if(table.getTableID()!==num){
        tables.push(table)
      }
    }
    return tables
  }

 
}
