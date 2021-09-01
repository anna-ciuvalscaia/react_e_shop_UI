class Money {
    constructor (amount, currency){
this.amount = amount;
this.currency = currency;
    }
    toPOJO() {
return {
    amount: this.amount,
    currency: this.currency,
}
    }
    toJSON(){
     return JSON.stringify(this.toPOJO())   
    }
}

export default Money