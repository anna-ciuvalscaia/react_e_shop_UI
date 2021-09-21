
import './App.css';

import React from 'react';




// alias import
import ProductModel from './models/Product';
import {ProductFull} from './components/product/Product';
import Money from './models/Money';
import Attribute from './models/Attribute';
import CartModel from './models/Cart';
import {AddToCartButton, CartContextWrapper, Cart} from './components/cart/Cart';

import Nav from './components/navbar/Navbar'
import NavRouter from './components/navbar/NavRouter';


//import {HOC} from './components/cart/Cart';
//import {Header, Footer, ContactPhoneContext, ContactEmailContext} from './components/ContextComponents';




import ActionCard from './components/ActionCard';

import OrderCart from './components/cart/OrderCart';



function App() {
 
  


  const products = [
     new ProductModel(1, "Iphone", ["https://enter.online/images/detailed/84/apple_iphone_11_purple1qq.png","https://telefonplus.ru/wp-content/uploads/2020/10/iphone-12-red-select-2020.png"], "4 ГБ/ 128 ГБ/ Single SIM", new Money(100, "USD"), new Attribute("color", "silver")),
     new ProductModel(2, "Samsung", ["https://enter.online/images/detailed/89/samsung_galaxy_a515_black1qqq_idsz-mm.png", "https://images.samsung.com/is/image/samsung/p6pim/ru/sm-a127fzbvser/gallery/ru-galaxy-a12-a127-sm-a127fzbvser-thumb-484878146?$320_320_PNG$"], "6 ГБ/ 128 Гб/ Dual SIM", new Money(180, "USD"), new Attribute("color", "gray")),
     new ProductModel(3, "Xiaomi", ["https://enter.online/images/detailed/121/xiaomi_redmi_note_10_black_0_1616503840758.png", "https://enter.online/images/detailed/95/xiaomi_redmi_note_9_green_1qqq.png"], "3 ГБ/ 64 ГБ/ Dual SIM", new Money(70, "USD"), new Attribute("color", "black light")),
     new ProductModel(4, "Huawei", ["https://enter.online/images/detailed/74/huawei_p30_lite_midnight_black1qqq.png", "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p40-pro/p40-pro-gold.png"], "4 ГБ/ 128 Гб/ Dual SIM", new Money(140, "USD"), new Attribute("color", "black")),
    ]

    const state = {
    products: {},
    order: {}
  }

    const cart = new CartModel(1)
   

  return (
    <div className="App">

    
<Nav/>



<hr/>
    <main style={{paddingTop: 70}} >
      
     <CartContextWrapper cart={cart}>
       <Cart />
      <AddToCartButton />
      </CartContextWrapper>  
        
     <hr/>

 {/*nav router*/}
 <NavRouter/>
 {/*nav router*/}

 


 <ActionCard />


{ products.map(product =>
<div>
    <ProductFull 
    product={product}
    />
</div>
 ) }

<hr/>

<OrderCart
            products={state.products}
            order={state.order} 
            />

      </main>

    



     {/*} <div>
       <HOC count={0}/>
  </div> */}

  
{/*<ContactPhoneContext.Provider value="+373 673 90 675">
 <Header /> 
</ContactPhoneContext.Provider>

<section>
 THIS IS THE CONTENT 
</section>

<ContactEmailContext.Provider value="info@gmail.com">
 <Footer /> 
</ContactEmailContext.Provider> */}



  
      
    </div>
  );
}

export default App;
