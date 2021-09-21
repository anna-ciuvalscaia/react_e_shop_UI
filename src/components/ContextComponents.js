import { createContext, useContext } from "react"

//create the context that will share the data
//global storage container
const ContactPhoneContext = createContext()
const ContactEmailContext = createContext()


const Header = ({}) => {
   const phone = useContext(ContactPhoneContext) 
    return (
       
         <header>
            <h1> HEADER </h1>
            <h2>{phone}</h2>
            
         </header>
     )}

     const Footer = ({}) => {
    
        return (
           <footer>
            <h1>
                FOOTER 
             </h1>
            <ContactEmailContext.Consumer>
                { value => <h2>{value}</h2>}
            </ContactEmailContext.Consumer>
            
         </footer>
         )}    

         export {Header, Footer, ContactPhoneContext, ContactEmailContext}