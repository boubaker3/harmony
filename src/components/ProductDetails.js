import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import StarIcon from '@mui/icons-material/Star';
import { Avatar , Typography,Button , Grid,Input,Tab,Chip,Box,Divider,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle ,Rating ,Snackbar,ButtonGroup } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { decrementOrders, incrementOrders } from './redux/reducer';
export default function ProductDetails() {
  const query = new URLSearchParams(useLocation().search);
    const productId = query.get('productId');

  const {count}=useSelector((state)=>state.counter);
const dispatch=useDispatch();
  const products=[{name:"Pizza",price:"10$", 
    photo:"https://assets.afcdn.com/recipe/20160519/15342_w1024h1024c1cx3504cy2338.jpg" ,rating:"4.5",desc:"food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.12  "}, 
    {name:"Tacos",price:"10$", 
    photo:"https://www.maspatule.com/blog/wp-content/uploads/2021/07/BLOG-IMG_MISE_EN_AVTtacos.jpg" ,rating:"4.5",desc:"food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.12 "},
    {name:"Fried Chicken",price:"8$", 
    photo:"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR%20_02_03_11b.jpg" ,
    rating:"4.5",desc:"food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.12 "},
    {name:"Hamburger",price:"10$", 
    photo:"https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg" ,rating:"4.5",desc:"food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.12 "} ];
    const [myProduct,setMyProduct]=useState(products.filter(x=>  x.name==productId));
        return (
    < >  
     <Grid container sx={{height:"100%"}}>

<Grid xs={12}>
<Typography sx={{fontFamily:"Bungee Inline",fontWeight:"bold",fontSize:{xs:"24px",md:"28px",lg:"32px"}}} variant='h1'>Product details</Typography>
</Grid>

<Grid md={8} xs={12} sx={{marginTop:"50px"}} >
 <Box sx={{position:"relative",width:{md:"600px",lg:"800px",xl:"900px"},height:{md:"250px"}}}>
<Avatar src={myProduct[0].photo} sx={{position:{md:"absolute"},borderRadius:"38px 38px 0 0 ",width:"100%",height:{xs:"200px",md:"100%"}}}>

</Avatar>
<Box sx={{position:"absolute",bottom:"0",backgroundColor:"white",borderRadius:"38px 38px 0 0 ",padding:"12px",margin:"12px 0 0 12px"}}> 
    <Typography sx={{fontFamily:"montserrat",fontSize:"16px",display:"inline-block"}}>
{ myProduct[0].name} 
    </Typography>
    <Chip sx={{backgroundColor:"white",color:"black",fontWeight:"bold",fontSize:"16px" ,display:"inline-block",marginLeft:"100px",textAlign:"center"}}   
    icon={<StarIcon sx={{color:"var(--yellow) !important",width:"25px",height:"25px",verticalAlign:"middle"}} />} label={ myProduct[0].rating}  />

</Box>
 </Box>
</Grid>



  <Grid xs={6}  >
  <Typography sx={{fontFamily:"montserrat",fontSize:"20px",display:"inline-block"}}>
Product Details :    </Typography>
 </Grid>
  
 <Grid xs={4}  >
 <Typography sx={{fontFamily:"montserrat",fontSize:"18px",display:"inline-block"}}>
Price: { myProduct[0].price} 
    </Typography>
     </Grid>
     
 <Grid xs={10} md={4}  >
 <Typography sx={{fontFamily:"montserrat",fontSize:"14px",display:"inline-block",color:"gray"}}>
{ myProduct[0].desc} 
    </Typography>
     </Grid>   
     <Grid xs={12}  >
<Box sx={{margin:"50px", marginRight:"auto",marginLeft:"auto",display:"block",width:"50%"}}>

     <ButtonGroup variant="contained" aria-label="outlined primary button group" >
  <Button onClick={()=>dispatch(incrementOrders())}>+</Button>
  <Button>{count}</Button>
  <Button onClick={()=>dispatch(decrementOrders())}>-</Button>
</ButtonGroup>
</Box>
</Grid>   
<Button variant='contained' sx={{padding:"10px 50px 10px 40px",borderRadius:"38px",color:"white",boxShadow:"0"}} startIcon={<AddShoppingCartIcon/>}>Get it now</Button>

      </Grid>
    </ >
  )
}
