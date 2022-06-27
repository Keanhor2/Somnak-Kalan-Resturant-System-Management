import { Room } from "../rooms/Room";
import { DateTimes } from "./DateTime";

export enum BookCategory {
  CUSTOMERBOOK='CUSTOMERBOOK',
}
export abstract class Book {
  constructor(
    protected category: BookCategory,
    protected start: DateTimes,
    protected end: DateTimes,
    protected roomID: Room
  ) {}
}
