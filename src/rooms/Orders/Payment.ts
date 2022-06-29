import { Customer } from "../../human/Customers/Customers";
import { Tables } from "../tables/Tables";
import { Invoice } from "./Invoice";

export class Payment{
    private invoices:Invoice[] = [];
    constructor(private custumers:Customer, private tableId:Tables,private isPay:Boolean){}
    addInvoice(...invoice:Invoice[]){
        this.invoices = this.invoices.concat(invoice);
    }
    isPayAlready(customer:Customer,id:Tables){
        if(customer == this.custumers && id==this.tableId){
            if(this.isPay==true){
                return this.isPay;
            }
            else{
                return this.isPay;
            }
        }
    }
}