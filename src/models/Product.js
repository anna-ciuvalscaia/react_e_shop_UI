

class Product {
    constructor (id, name, imageUrls, description, price, attributes){
this.id = id;
this.name = name;
this.imageUrls = imageUrls;
this.description = description;
this.price = price;
this.attributes = attributes;
    }
    toPOJO() {
return {
    id: this.id,
    name: this.name,
    imageUrls: this.imageUrls,
    description: this.description,
    price: this.price,
    attributes: this.attributes,
}
    }
    toJSON(){
     return JSON.stringify(this.toPOJO())   
    }
}

export default Product