const Money = ({price:{amount, currency}, type="sale"}) => {
  const procentSale = 7/100
    return (
      <>
      { 
      type==="std"? <p>{amount} {currency}</p>
   :  
      type==="sale"? 
        <p>  <s>{amount} {currency}</s>   
        <b style={{fontSize:"x-large"}}>  {amount-(amount*procentSale)} {currency}</b> </p>
   : ''
      }  
  </>
    ) 



    
}

export default Money