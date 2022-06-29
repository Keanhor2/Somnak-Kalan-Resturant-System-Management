import { Customer } from "../../human/Customers/Customers";
import { TableID } from "./Enum";
import { Orders } from "./Orders";
enum OrderType {
    TABLE = "tables",
    TABLEID = "tableID",
    TIMES = "times",
    TIME = "time",
    DAY = "day",
    MONTH = "month",
    YEAR = "year",
    FOOD = "foods",
    DRINK = "drinks",
    PRICE = "price",
    ORDERID = "orderID",
    NAME = "name",
}
export class Invoice {
    protected orders: Orders[] = [];
    addCustomerDone(...order: Orders[]) {
        this.orders = this.orders.concat(order)
    }
    getInvoicesBy(name: Customer) {
        let date: String = '';
        let times: String = '';
        let orderIdAndTableId: String = '';
        let foods: String = '';
        let drinks: String = '';
        let total: number = 0;
        for (let invoice of this.orders) {
            if (invoice['customers'] === name) {
                date = invoice[OrderType.TIMES][OrderType.DAY] + '-' + invoice[OrderType.TIMES][OrderType.MONTH] + '-' + invoice[OrderType.TIMES][OrderType.YEAR];
                orderIdAndTableId = 'OrderId :' + invoice[OrderType.ORDERID] + '  ' + 'tableId :' + invoice[OrderType.TABLE][OrderType.TABLEID];
                times = "Eat In " + "  " + invoice[OrderType.TIMES][OrderType.TIME] + " am"
                    for (let food of invoice['menuItems'][OrderType.FOOD]) {
                        foods += food[OrderType.NAME] + ' - ' + food[OrderType.PRICE] + '\n'
                        total += food[OrderType.PRICE];
                    }
                    for (let drink of invoice['menuItems'][OrderType.DRINK]) {
                        drinks += drink[OrderType.NAME] + ' - ' + drink[OrderType.PRICE] + '\n'
                        total += drink[OrderType.PRICE];
                    }
            }
        }
        return 'Entry: ' + date + '\n'
            + 'Date: ' + times + '\n'
            + 'ORD-TBL: ' + orderIdAndTableId + '\n'
            + 'Foods: ' + foods + '\n'
            + 'Drinks: ' + drinks + '\n'
            + 'Total: ' + total
    }
    checkCustomerByTime(time: number){
        for(let check of this.orders){
            if(check[OrderType.TIMES][OrderType.TIME]==time){
                return check
            }
        }
    }
    checkAmountOfCustomerByTimeAndTable(time: number,id:TableID){
        for(let check of this.orders){
            if(check[OrderType.TIMES][OrderType.TIME]==time){
                if(check[OrderType.TABLE][OrderType.TABLEID]==id){
                    return check
                }
                return 'This '+time +' time does not exist tableId: '+id
            }
        }
    }
    checkFoodDrinkCustomerOrderByName(name:Customer){
        for(let check of this.orders){
            if (check['customers'] === name) {
                return check['menuItems']
            }
        }
    }
    
}