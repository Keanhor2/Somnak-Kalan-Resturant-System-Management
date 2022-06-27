import { Kitchen } from "./Kitchen/Kitchen";
import { Room } from "./Room";
export class RoomsManager {
  public rooms: Room[] = [];
  public kitchen: Kitchen;
  addRoom(room: Room) {
    return this.rooms.push(room);
  }
  listRoomInRestart() {
    let roomInRestaurant:Room[]=[];
    for(let room of this.rooms) {
      roomInRestaurant.push(room);
    }
    return roomInRestaurant;
  }
  findRoomByRoomId(roomId:Room):Room | undefined {
    for(let room of this.rooms){
      if(room.getRoomId() === roomId.getRoomId()){
        return room
      }
    }
  }
}
