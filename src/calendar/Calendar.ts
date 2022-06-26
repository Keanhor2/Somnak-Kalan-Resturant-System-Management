import { Book } from "./Book";

export class CalendarManager {
  public books: Book[] = [];
  addEvent(book: Book) {
    this.books.push(book);
  }
  }
