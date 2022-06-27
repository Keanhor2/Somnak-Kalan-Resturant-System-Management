import { Book } from "./Book";

export class CalendarManagers {
  public books: Book[] = [];
  addBook(book: Book) {
    this.books.push(book);
  }
  }
