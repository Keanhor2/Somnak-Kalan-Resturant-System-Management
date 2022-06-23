import { Bed } from "./Bed";

/**
 * A room is composed of many beds
 */
export class Room {
  findFreeRoom() {
    throw new Error("Method not implemented.");
  }
  private beds: Bed[] = [];
  constructor(private id: number) {}
  getNumberOfBeds() {
    return this.beds.length;
  }
  getBeds() {
    return this.beds;
  }
  addBed(bed: Bed) {
    return this.beds.push(bed);
  }
}
