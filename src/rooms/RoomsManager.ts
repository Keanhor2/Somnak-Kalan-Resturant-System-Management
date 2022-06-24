import { Kitchen } from "./Kitchen/Kitchen";
import { Room } from "./Room";
export class RoomsManager {
  public rooms: Room[] = [];
  public kitchen: Kitchen;
  getNumberOfRooms(): number {
    return this.rooms.length;
  }
  addRoom(room: Room) {
    return this.rooms.push(room);
  }
}
