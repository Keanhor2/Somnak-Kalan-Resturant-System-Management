import { Book } from "./Book";

export class BookCalendar {
  public books: Book[] = [];
  addEvent(book: Book) {
    this.books.push(book);
  }
  }
