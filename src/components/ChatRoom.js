import React from 'react'
import {useState,useEffect} from 'react';

import { Avatar , Typography,Button , Grid,Input,Tab,InputAdornment,Box,Divider  } from '@mui/material';
 import Chat from '@mui/icons-material/Send'; 

export default function ChatRoom() {
  const [sentMsg,setSentMsg ]=useState("");
  const msgs=[ {photo:"https://i.pinimg.com/564x/1f/2e/d3/1f2ed39d2f22151712b2ccf0f16dc91d.jpg",msg:"Hello sir",who:"me"}
  ,{photo:"https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000",msg:"Hello sir",who:"notme"},
  {photo:"https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000",msg:"leave your message",who:"notme"},
  {photo:"https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000",msg:"we will be replying soon",who:"notme"},
 ];

  return (
    < >
    <Box sx={{width:{xs:"450px ",md:"580px "},height:{xs:"500px",md:"580px"},boxShadow:"rgba(149, 157, 165, 0.5) 0px 8px 24px",
    borderRadius:"38px", position:"relative" ,margin:"auto"}}>

    <Avatar src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000" sx={{width:{xs:"80px"},height:"80px" ,borderRadius:"50%",display:"inline-block",verticalAlign:"middle"}}> </Avatar>
 
       
 <Typography sx={{fontFamily:"Montserrat",color:"gray",verticalAlign:"middle",display:"inline-block" }}    >
Grill
</Typography>
<Divider/>

<Box sx={{overflowY:"auto",height:"300px",padding:"10px"}}>
{
  msgs.map(msg=>msg.who=="notme"?
<Box sx={{display:"block",marginTop:"5px"  ,width:"100%",position:'relative'}}>
<Box sx={{float:"left"}}>
<Avatar src={msg.photo} sx={{width:{xs:"50px"},height:"50px" ,borderRadius:"50%",display:"inline-block", }}> </Avatar>
  <Box sx={{  width:"200px" ,padding:"20px",borderRadius:"12px", backgroundColor:"#F4F4F4" , display:"inline-block" ,marginLeft:"5px",overflow:"hidden"}}>

    <Typography sx={{fontFamily:"Montserrat",color:"gray" }}    >
   {msg.msg}
   </Typography>
   </Box>
 </Box>
</Box>:
<Box sx={{display:"block",marginTop:"5px"  ,width:"100%",position:'relative'}}>
  <Box sx={{float:"right"}}>


  <Avatar src={msg.photo} sx={{width:{xs:"50px"},height:"50px" ,borderRadius:"50%",display:"inline-block", }}> </Avatar>
  <Box sx={{  width:"200px" ,padding:"20px",borderRadius:"12px", backgroundColor:"#EDBB00" , display:"inline-block" ,marginLeft:"5px",overflow:"hidden"}}>

    <Typography sx={{fontFamily:"Montserrat",color:"white" }}    >
   {msg.msg}
   </Typography>
   </Box>
   </Box>
</Box>)
}
</Box>
<Input onChange={(event)=>{setSentMsg(event.target.value)}} 
sx={{backgroundColor:"#F4F4F4",borderRadius:"12px",paddingRight:"100px",height:"50px", bottom:"0",position:"absolute",marginLeft:"50px"
     ,marginBottom:"20px" }}    disableUnderline  autoFocus  placeholder='write something...' startAdornment={<InputAdornment position='start'> 
     <Box sx={{backgroundColor:"#EDBB00" ,width:"50px",height:"50px",borderRadius:"12px",justifyContent:"center",alignItems:"center",display:"flex"}}>
      <Chat sx={{ color:"white",width:"40px",height:"40px", }}/></Box> </InputAdornment>}> </Input>

    </Box>
    
    </ >
  )
}
