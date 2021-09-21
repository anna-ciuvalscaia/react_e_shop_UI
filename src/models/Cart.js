class Cart {
    constructor (id){
this.id = id;
this.items = []
    }
    toPOJO() {
return {
    id: this.id,
    items: this.items,
}
    }
    toJSON(){
     return JSON.stringify(this.toPOJO())   
    }

    // cart specific logic
    add(item) {
        let newCart = new Cart(this.id)
        newCart.items = this.items.concat([item])
        return newCart
    }

    getCount() {
        console.log("get")
        return this.items.length
    }
}

export default Cart