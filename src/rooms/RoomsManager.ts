import { Kitchen } from "./Kitchen/Kitchen";
import { Room } from "./Room";
import { Chair } from "./tables/Chairs";
export class RoomsManager {
  public rooms: Room[] = [];
  public kitchen: Kitchen;
  addRoom(...room: Room[]) {
    this.rooms = this.rooms.concat(room);
  }
  countRoomInrestaurant(){
    return this.rooms.length;
  }
  listRoomInRestart() {
    let roomInRestaurant: Room[] = [];
    for (let room of this.rooms) {
      roomInRestaurant.push(room);
    }
    return roomInRestaurant;
  }
  findRoomByRoomId(roomId: Room): Room | undefined {
    for (let room of this.rooms) {
      if (room.getRoomId() === roomId.getRoomId()) {
        return room
      }
    }
  }
  checkAllRoomFreeChair() {
    let roomId:number[] =[];
    for (let room of this.rooms) {
      if (room.isFreeRoom() !== 0) {
        for (let chair of room['chairs']) {
          if (!chair.getCustomerInChair()) {
            roomId.push(room['id'])
          }
        }
      }
    }
    return roomId
  }
  checkFreeChair() {
    let chairs:Chair[] =[];
    for (let room of this.rooms) {
      if (room.isFreeRoom() !== 0) {
        for (let chair of room['chairs']) {
          if (!chair.getCustomerInChair()) {
            chairs.push(chair)
          }
        }
      }
    }
    return chairs
  }
  checkRoomNotHaveTable() {
    let roomID:number[] =[]
    for (let room of this.rooms) {
      if(! room.getTable()){
        roomID.push(room['id'])
      }
    }
    return roomID
  }
  checkRoomNotHaveChair() {
    let roomID:number[] =[]
    for (let room of this.rooms) {
      if(room.getChair()==0){
        roomID.push(room['id'])
      }
    }
    return roomID
  }
 
}

