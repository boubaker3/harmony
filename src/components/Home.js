import * as React from 'react';
 import { Avatar , Typography,Button ,Box  ,FormControl,Select,MenuItem ,Grid } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { } from '@mui/material';
import { Restaurents } from './restaurents';
import "./Styles/Home.css";
import RestaurentItem from './RestaurentItem';
import  Carousel from 'react-elastic-carousel';
 export default function Home() {
  const [order, setOrder] = React.useState('The Most Rated');
  const [title, setTitle] = React.useState('The Most Rated');

  const handleChange = (event) => {
    setOrder(event.target.value);
    setTitle(event.target.value)
  };

  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch();
  },[]);
const fetch=async()=>{
  await axios.get('http://localhost:8000/api/users').
  then(
    (res)=>{
       setUsers(res)
       console.log(res);
    })
};


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
    fontSize: "24px"}}>{title}</Typography>
    </Grid>
    <Grid xs={4}  sx={{marginTop:"50px"}}>
 
    <FormControl   sx={{display:'inline-block'  }}>
         <Select   
           value={order}
           onChange={handleChange}
             >
           <MenuItem    value="The Most Rated">By rating</MenuItem>
          <MenuItem value="The Newest">Newest</MenuItem>
          <MenuItem value="The Oldest">Oldest</MenuItem>
        </Select>
      </FormControl>
    
      </Grid>


      <Grid xs={12}  >
        <Box   >

       <Carousel  enableSwipe    breakPoints={breakPoints}>
 { Restaurents.map((item )=> <RestaurentItem item={item}  /> )}
  </Carousel>
  </Box>
     </Grid>
      



          </Grid>
    </ >
  )
}
