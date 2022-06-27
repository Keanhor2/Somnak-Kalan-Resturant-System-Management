
import { RoomsManager } from "./rooms/RoomsManager";
import { HumanManager } from "./human/HumanManager";
import { CalendarManagers } from "./calendar/CalendarManager";
import { Menu } from "./rooms/Orders/Menu";

export class Restaurant {
  private address?: string;
  private name: string;
  // public services
  public calendar: CalendarManagers = new CalendarManagers();
  public rooms: RoomsManager = new RoomsManager();
  public hr: HumanManager = new HumanManager();

  constructor(name: string, address?: string) {
    this.name = name;
    this.address = address;
  }
}
