
import './App.css';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx';
//import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ShareIcon from '@material-ui/icons/Share';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';



// alias import
import ProductModel from './models/Product';
import {ProductFull} from './components/product/Product';
import Money from './models/Money';
import Attribute from './models/Attribute';
import CartModel from './models/Cart';
import {AddToCartButton, CartContextWrapper, Cart} from './components/cart/Cart';



//import {HOC} from './components/cart/Cart';
//import {Header, Footer, ContactPhoneContext, ContactEmailContext} from './components/ContextComponents';


import ProductCard from './components/product/ProductCard';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";



const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));






function App() {

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

  const product = {
    id: 111,
    name: "iphone XXII",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000",
 }
  const Action = ({id}) => (
    <>
<IconButton aria-label="add to favorites" color="primary" onClick={()=>{console.log(`Adding ${id} to cart`)}}>
<AddShoppingCartIcon />
</IconButton>

<IconButton onClick={()=>{console.log(`Sharing ${id} to FB`)}}>
<ShareIcon />
</IconButton>
</>
  )
 
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const products = [
     new ProductModel(1, "Iphone", ["https://enter.online/images/detailed/84/apple_iphone_11_purple1qq.png","https://telefonplus.ru/wp-content/uploads/2020/10/iphone-12-red-select-2020.png"], "4 ГБ/ 128 ГБ/ Single SIM", new Money(100, "USD"), new Attribute("color", "silver")),
     new ProductModel(2, "Samsung", ["https://enter.online/images/detailed/89/samsung_galaxy_a515_black1qqq_idsz-mm.png", "https://images.samsung.com/is/image/samsung/p6pim/ru/sm-a127fzbvser/gallery/ru-galaxy-a12-a127-sm-a127fzbvser-thumb-484878146?$320_320_PNG$"], "6 ГБ/ 128 Гб/ Dual SIM", new Money(180, "USD"), new Attribute("color", "gray")),
     new ProductModel(3, "Xiaomi", ["https://enter.online/images/detailed/121/xiaomi_redmi_note_10_black_0_1616503840758.png", "https://enter.online/images/detailed/95/xiaomi_redmi_note_9_green_1qqq.png"], "3 ГБ/ 64 ГБ/ Dual SIM", new Money(70, "USD"), new Attribute("color", "black light")),
     new ProductModel(4, "Huawei", ["https://enter.online/images/detailed/74/huawei_p30_lite_midnight_black1qqq.png", "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p40-pro/p40-pro-gold.png"], "4 ГБ/ 128 Гб/ Dual SIM", new Money(140, "USD"), new Attribute("color", "black")),
    ]

    const cart = new CartModel(1)
   

  return (
    <div className="App">

      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
  <Toolbar>


     <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
    
    <Typography variant="h5" className={classes.title}>
     e-Shop
    </Typography>

    


         


    <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

      <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
       <ShoppingCartIcon/>
      </Button>
      <Menu 
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>My Cart </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  </Toolbar>
</AppBar>

<Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Iphone', 'Xiaomi', 'Samsung', 'Huawei'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>

  

     <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      
     <CartContextWrapper cart={cart}>
       <Cart />
      <AddToCartButton />
     </CartContextWrapper>
        
     <hr/>


{/*nav router*/}

<div>
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

{/*nav router*/}



{  products.map(product =>
<div>
    <ProductFull product={product}/>
</div>
 ) }



      </main>

    


 {/*<ProductCard />*/}
 <ProductCard product={product} 
 actions={<Action id={product.id}/>}/>

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
