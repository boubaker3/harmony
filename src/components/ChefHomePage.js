import * as React from 'react';
 import { Avatar , Typography,Button ,Box  ,FormControl,Select,MenuItem ,Grid } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { } from '@mui/material';
 import "./Styles/Home.css";
import ChefProducts from './ChefProducts';
import  Carousel from 'react-elastic-carousel';
 export default function ChefHomePage() {
  
  const products=[{name:"Pizza",price:"10$", 
photo:"https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-2-500x375.jpg" ,rating:"4.5"}, 
{name:"Tacos",price:"10$", 
photo:"https://www.maspatule.com/blog/wp-content/uploads/2021/07/BLOG-IMG_MISE_EN_AVTtacos.jpg" ,rating:"4.5"},
{name:"Fried Chicken",price:"8$", 
photo:"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR%20_02_03_11b.jpg" ,rating:"4.5"},
{name:"Hamburger",price:"10$", 
photo:"https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg" ,rating:"4.5"}, , ];

const breakPoints = [
  { width: 1, itemsToShow: 1 ,showArrows:false},
  { width: 550, itemsToShow: 1 ,showArrows:false },
  { width: 850, itemsToShow: 2 },
  { width: 1150, itemsToShow: 3  },
  { width: 1450, itemsToShow: 3 },
  { width: 1750, itemsToShow: 3 },
];

   return (
    < > 
    <Grid container sx={{height:"100%"}}>

    <Grid xs={12}>
    <Typography sx={{fontFamily:"Bungee Inline",fontWeight:"bold",fontSize:{xs:"24px",md:"28px",lg:"32px"}}} variant='h1'>Home</Typography>
    </Grid>

    <Grid xs={8} sx={{marginTop:"50px"}} >

    <Typography  variant='h4' sx={{display:{xs:"none",md:"inline-block"}, fontFamily: "Montserrat",
    color: "gray",
    fontWeight: "bold",
    fontSize: "24px"}}>My Products</Typography>
    </Grid>
 


      <Grid xs={12}  >
        <Box  >

       <Carousel  enableSwipe    breakPoints={breakPoints}>
 { products.map((item )=> <ChefProducts item={item}  /> )}
  </Carousel>
  </Box>
     </Grid>
      



          </Grid>
    </ >
  )
}
