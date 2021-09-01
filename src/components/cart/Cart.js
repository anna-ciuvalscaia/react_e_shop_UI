// props -> const/ imutable
import {createContext, useContext, useState} from 'react'

const CartContext = createContext()

// 1. + context
// 2. + cart
// 3. + state
const CartContextWrapper = ({children, cart}) => {
    const [cart_, setCart] = useState(cart)
 return (
     <CartContext.Provider value={{cart: cart_,setCart}}>
         {children}
     </CartContext.Provider>
 )
}







{/*const addToCart = (cart) => {
    cart.add(
        {
            quantity: 1,
            item: {name: "iPhone"}
        }
    )
    console.log("Added to cart!")
}*/}



const Cart = () => {
    const {cart} = useContext(CartContext)
    return (
       
         <button>cart ({cart.getCount()})</button>
     )}

   
const AddToCartButton = () => {
 let {cart, setCart} = useContext(CartContext)
    return (
       
           <button
         onClick={ () => {
             cart = cart.add({id:2, qty: 10})
             setCart(cart)
             console.log(cart)
         }}
         >Add To Cart</button>

      )}

// Higher Order Component
// Drill Down Component
    {/*  const HOC = (props) => {
        let [count,setCount] = useState(props.count)
      return (
          <>
          <Cart count={count}/>
          <AddToCartButton count={count} setCount={setCount}/>
          </>
      )
    
          }
        */}



export {Cart, AddToCartButton, CartContextWrapper }