import { Customer } from "../../human/Customers/Customers";
import { TableID } from "../tables/Tables";
import { OrderType } from "./Invoice";
import { Payment } from "./Payment";

export class CheckPayment{
    protected payments: Payment[] = [];
    addPayment(...payment: Payment[]){
        this.payments=this.payments.concat(payment);
    }
    checkListCustomerHasPayAndNotPay(isPay:Boolean){
        for(let list of this.payments){
            if(isPay ===list['isPay']){
                return list;
            }
        }
    }
    checkCustomerByTime(time: number){
        for(let list of this.payments){
            for(let order of list['invoices']){
                for(let times of  order['orders']){
                    if(time === times[OrderType.TIMES][OrderType.TIME]){
                        return times['customers']
                    }
                }
            }
        }
    }
    checkAmountOfCustomerByTimeAndTable(time: number, id: TableID) {
        for(let list of this.payments){
            for(let order of list['invoices']){
                for(let times of  order['orders']){
                    if(time === times[OrderType.TIMES][OrderType.TIME]){
                        if(times['tables'][OrderType.TABLEID]==id){
                            return times['customers']
                        }
                        return 'This '+time+' Do not have customers on table: '+id
                    }
                }
            }
        }
    }
    checkFoodDrinkCustomerOrderByName(name: Customer) {
        for(let list of this.payments){
            for(let order of list['invoices']){
                for(let customer of  order['orders']){
                    if(customer['customers']===name){
                        return customer['menuItems']
                    }
                }
            }
        }
        
    }
}