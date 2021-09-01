

import Image from "../ui/Image";
import Money from "../ui/Money";
import Attribute from "../ui/Attribute";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  rootCard: {
    maxWidth: 500,
  },

  rootGrid: {
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
});

  const Product = ({product: {id, name, imageUrls, price, description, attributes }}) => {
  const images = [imageUrls[0], imageUrls[1]]
  
  
    return (


      
        <>

            <h2>{name}</h2>   
           
            {images.map(url => <Image url={url} alt={name}/>)}
            
        
        
         {/*<Money price={{amount:price.amount, currency:price.currency}}/>*/}
         {/* <Attribute attribute={{name:attributes.name, value:attributes.value}}/>*/}

        </>
        
    )
}

const ProductFull = ({product}) => {
  const classes = useStyles();
   return (
     <>
      <div style={{ padding: 20 }}>
     <Grid className={classes.rootGrid}
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
      <Card className={classes.rootCard}>
       <CardMedia>
         <Product product={product}/>
       </CardMedia>
        
       
       <CardContent>
        <Money price={{amount:product.price.amount, currency:product.price.currency}}/>
       <p>{product.description}</p>
       
       <Attribute attribute={{name:product.attributes.name, value:product.attributes.value}}/> 
       </CardContent>

       <CardActions>
        <Button size="small" color="primary"variant="contained">
          Add to Cart
        </Button>
      </CardActions>
       
     </Card> 
     </Grid>
     </div>
       
    
      
     </>
   
   )
}



export {Product, ProductFull}