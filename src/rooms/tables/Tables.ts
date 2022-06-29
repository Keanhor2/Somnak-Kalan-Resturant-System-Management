export enum TableID{
  ID1=1,
  ID2=2,
  ID3=3,
  ID4=4
}
export class Tables {
  constructor(private tableID:number) {}
  getTableID(){
    return this.tableID;
  }
}
