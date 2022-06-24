import { Customer } from "../human/Customers/Customers";
import { Book, BookCategory } from "./Book";
import { DateTime } from "./DateTime";

export class DoctorAppointment extends Book {
  constructor(
    category: BookCategory,
    start: DateTime,
    end: DateTime,
    private customer:Customer
  ) {
    super(category, start, end);
  }
}
