import { Cheif } from "../../human/staff/Cheif";
import { Foods } from "./Food";

export abstract class Kitchen{
    private chief:Cheif[] = [];
    private foods:Foods[] = [];
}