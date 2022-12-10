import React from 'react'
import './Styles/Search.css';
import { Avatar , Typography,Button ,Box  ,FormControl,Select,MenuItem ,Grid,Input,InputAdornment} from '@mui/material';
import {useState,useEffect} from 'react';
  import NotificationsItem from './NotificationsItem';
export default function Notifications() {
  const [searchedFor,setSearch]=useState("null");
  const NotificationsData=[{name:"Montana",city:"new york",country:"United States",address:"Boulevard 19",
photo:"https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000",cover:"https://media-cdn.tripadvisor.com/media/photo-s/05/ac/6a/91/restaurant-le-velocipede.jpg",rating:"4.5"},{name:"Grill",city:"new york",country:"AmeUnited Statesrica",address:"Boulevard 19",
photo:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chef-food-restaurant-logo-editable-design-template-949091af7f6dc8b1fc80d8669faab4d6_screen.jpg?ts=1619030187",cover:"https://www.imperium-ouvertures.fr/wp-content/uploads/2019/09/imperium-ouvertures-chantier-restaurant-veranda2.jpg",rating:"4.5"},{name:"Shawarma",city:"new york",country:"United States",address:"Boulevard 19",
photo:"https://thumbs.dreamstime.com/b/restaurant-logo-design-idea-chef-hat-fork-graphic-leaf-shape-food-drinks-symbol-concept-cooking-eating-vector-template-173237325.jpg",cover:"https://tybraz.fr/wp-content/uploads/2016/03/final.jpg",rating:"4.5"},{name:"Barbecue",city:"new york",country:"United States",address:"Boulevard 19",
photo:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-08a68b9418adeb6c8599892284a22ef1_screen.jpg?ts=1599559226",cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WKdQVGDyhQltS_pqWjBkw1ypSI6qMn5A_Q&usqp=CAU",rating:"4.5"},{name:"Thai Tanic",city:"new york",country:"United States",address:"Boulevard 19",
photo:"https://s3.amazonaws.com/thumbnails.venngage.com/template/6114cd0a-e706-4e1b-85b5-8aca4c480570.png",cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1MM5vrQgmFMfcw6i04QbBli7gRU5E5xrEr9LVKlwODZituE7bxLrkUiwjZn8AUDXyfY&usqp=CAU",rating:"4.5"},{name:"The Chef In the Hat",city:"new york",country:"United States",address:"Boulevard 19",
photo:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cooking-restaurant-logo-editable-design-template-1937334dced5f5057b812d746dbffc28_screen.jpg?ts=1597223944",cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbMtA38UFSKMjpBcNaa6wx-LQNRXTXrUKk5hxZDmRfkolZTUD52TmfjzWRs0Ec8l76tA&usqp=CAU",rating:"4.5"},];
  return (
    < > 
    <Grid container sx={{height:"100%",width:"100%"}}>
    <Grid xs={12} md={6}>
    <Typography sx={{fontFamily:"Bungee Inline",fontWeight:"bold",fontSize:{xs:"24px",md:"28px",lg:"32px"}}} variant='h1'>Your Orders</Typography>
    </Grid>
    

    <Grid xs={12} >
<Box sx={{marginTop:"50px"}}>
 {NotificationsData.map((notification)=> <NotificationsItem  item={notification}/>)}
   </Box>
     </Grid>
   
          </Grid>
    </ >
  )
}