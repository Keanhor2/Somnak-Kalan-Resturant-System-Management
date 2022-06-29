import { Orders } from "./Orders";
export class Invoice{
    protected orders:Orders[]=[];
    addCustomerDone(...order:Orders[]){
        this.orders = this.orders.concat(order)
    }
    getInvoices(num:number){
        let date:String='';
        let times:String='';
        let orderIdAndTableId:String='';
        let foods:String='';
        let drinks:String='';
        let total:number = 0;
        for(let invoice of this.orders){
            if(invoice['tables'][0]['tableID']===num){
                date= invoice['times']['day']+'-'+invoice['times']['month']+'-'+invoice['times']['year'];
                orderIdAndTableId= 'OrderId :'+invoice['orderID']+'  '+ 'tableId :'+invoice['tables'][0]['tableID'];
                times ="Eat In "+"  "+ invoice['times']['time']+" am"
                for(let item of invoice['menuItems']){
                    for(let food of item['foods']){
                        foods += food['food']+' - '+food['price']+'\n'
                        total+= food['price'];
                    }
                    for(let drink of item['drinks']){
                        drinks += drink['name']+' - '+drink['price']+'\n'
                        total+=drink['price'];
                    }
                }
            }
        }
        return date+'\n'+times+'\n'+orderIdAndTableId+'\n'+foods+'\n'+drinks+'\n'+total
    
    }
}