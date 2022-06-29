import { Room } from "./Room";
export class RoomsManager {
  public rooms: Room;
  addRoom(room: Room) {
    this.rooms = room;
  }
  getRoom(){
    return this.rooms
  }
}