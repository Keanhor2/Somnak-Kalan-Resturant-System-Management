import { Room } from "./Room";
export class RoomsManager {
  public rooms: Room[] = [];

  getNumberOfRooms(): number {
    return this.rooms.length;
  }
  addRoom(room: Room) {
    return this.rooms.push(room);
  }
  /** Find a room with a free bed
   * @return the first room available with a free bed
   */
  findFreeRoom(): Room | undefined {
    let result =undefined;
    for (let room of this.rooms) {
      if (room.getBeds()) {
        if (room.getNumberOfBeds() != 0) {
          for (let bed of room.getBeds()) {
            if (!bed.hasPatient()) {
              result= room;
            }
          }
        }
      }
    }
    return result
  }
 
}
