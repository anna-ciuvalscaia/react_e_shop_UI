import React from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


  



  const NavRouter = () => {
        {/*nav router*/}
    const Home = () => {
        return(
          <>
          This is the home page
          </>
        )
      }
  
      const Catalog = () => {
        return(
          <>
          Products
          </>
        )
      }
  
      const Carts = () => {
        return(
          <>
          Cart
          </>
        )
      }
  
      const ProductsByTag = () => {
        let {tag} = useParams()
        return(
          <>
          Products tagged with: "{tag}" 
          </>
        )
      } 
    {/*nav router*/}


    return (
        <div className="NavRouter">

<Router>

{/*navigation */}
<nav>
<Link to="/">Home</Link>
<Link to="/catalog">Catalog</Link>
<Link to="/cart">Cart</Link>
</nav>

<div>
  TAGS: <Link to="/tags/apple">Apple</Link>, 
        <Link to="/tags/samsung">Samsung</Link>
</div>

{/*dynamic content */}
<section>

  <Switch>
<Router exact path="/"><Home/></Router> 
<Router path="/catalog"><Catalog/></Router>  
<Router path="/cart"><Carts/></Router>  

{/* route with params*/}
<Route path="/tags/:tag">
  <ProductsByTag></ProductsByTag>
</Route>
 
</Switch>

</section>

  </Router>

        </div>
    )
  }

  export default NavRouter;