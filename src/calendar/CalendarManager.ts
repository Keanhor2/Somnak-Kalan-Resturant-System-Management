import { Room } from "../rooms/Room";
import { Book } from "./Book";
import { roomID } from "./CustomerBook";

export class CalendarManagers {
  public books: Book[] = [];
  addBook(...allBook:Book[]){
    this.books= this.books.concat(allBook);
  }
  addBookCheck(book: Book) {
    for(let bookId of this.books) {
      if(book[roomID.roomID].getRoomId()!==bookId[roomID.roomID].getRoomId()) {
        this.books.push(book);
        return bookId[roomID.roomID];
      };
      return 'This room has been Order'
    }
  }
  getAllBooksByCustomer() {
    return this.books
  }
}
