import { Customer } from "../human/Customers/Customers";
import { Room } from "../rooms/Room";
import { Book, BookCategory } from "./Book";
import { DateTimes } from "./DateTime";
export enum roomID{
  roomID='roomID'
}
export class CustomerBook extends Book {
  constructor(
    category: BookCategory,
    start: DateTimes,
    end: DateTimes,
    roomID:Room,
    private customer:Customer
  ) {
    super(category, start, end,roomID);
  }
}
