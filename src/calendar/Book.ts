import { DateTime } from "./DateTime";

export enum BookCategory {
  CUSTOMERBOOK='Customer_book',
}
export abstract class Book {
  constructor(
    protected category: BookCategory,
    protected start: DateTime,
    protected end: DateTime
  ) {}
}
