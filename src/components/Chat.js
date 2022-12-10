import React from 'react'
  import { Avatar , Typography,Button , Grid,Input,Tab,Chip,Box   } from '@mui/material';
   import  Carousel from 'react-elastic-carousel';
import ChatRoom from './ChatRoom';
export default function Chat() {
  const breakPoints = [
    { width: 1, itemsToShow: 1  },
    { width: 550, itemsToShow: 1  },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3  },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 3 },
  ];
    const MessagedUsersData=[{name:"Montana"  , cover:"https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000",msg:"hello" }, 
{name:"Grill"  , cover:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chef-food-restaurant-logo-editable-design-template-949091af7f6dc8b1fc80d8669faab4d6_screen.jpg?ts=1619030187",msg:"im still waiting..." },
{name:"Thai Tanic"  , cover:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-08a68b9418adeb6c8599892284a22ef1_screen.jpg?ts=1599559226",msg:"here is 5 stars" },
{name:"Barbecue"  , cover:"https://s3.amazonaws.com/thumbnails.venngage.com/template/6114cd0a-e706-4e1b-85b5-8aca4c480570.png",msg:"incredible deliv..." },
{name:"Barbecue"  , cover:"https://s3.amazonaws.com/thumbnails.venngage.com/template/6114cd0a-e706-4e1b-85b5-8aca4c480570.png",msg:"incredible deliv..." },];
  return (
    < >
    <Grid container>
    <Grid xs={12}  md={3}>
    <Typography sx={{fontFamily:"Bungee Inline",fontWeight:"bold",fontSize:{xs:"24px",md:"28px",lg:"32px"}}} variant='h1'>Chat</Typography>
    </Grid>
    <Grid xs={12} md={9} > 
    <Carousel  itemPadding={[1, 5]} breakPoints={breakPoints}>
{MessagedUsersData.map(user=>
 <Box sx={{display:" block", width:"300px",height:"80px",borderRadius:"24px",padding:"5px",
backgroundColor:"#F4F4F4"   }}>
  
       <Avatar src={user.cover} sx={{width: "50px" ,height:"50px" ,borderRadius:"50%",display:"inline-block",verticalAlign:"middle"}}> </Avatar>
 
         <Typography sx={{fontFamily:"Montserrat",color:"gray",verticalAlign:"middle",display:"inline-block" }}    >
        {user.name}
        </Typography>
        
        <Button disableElevation variant='contained'   sx={{  margin:"auto",color:"white" 
       ,fontFamily:"Montserrat",fontSize:"12px", 
        display:"block" }} >Join Chat</Button>
          
     
  
  </Box> ) }
  </Carousel>
</Grid>    
<Grid xs={12}   > 
 <ChatRoom/>
</Grid>    

</Grid>    

    </ >
  )
}





