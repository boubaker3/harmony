import React from 'react'
import cover from './Assets/restauCover.jpg';
import logo from './Assets/restauLogo.jpeg';
import { TabContext, TabList,TabPanel } from '@mui/lab';
import { Avatar , Typography,Button , Grid,Input,Tab,Chip,Box,Divider,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle ,Rating ,Snackbar} from '@mui/material';
 import './Styles/Profile.css';
import { useState } from 'react';
 import './Styles/RestaurentItem.css'; 
 import StarIcon from '@mui/icons-material/Star';
  import   Feedbacks   from './Feedbacks';

import ChefProducts  from './ChefProducts';
import {Restaurents} from './restaurents';
export default function ChefProfile() {
  const [name,setName]=useState("Boubaker");
  const [email,setEmail]=useState("BoubakerAchkhbar@gmail.com");
  const [country,setCountry]=useState("Morocco");
  const [city,setCity]=useState("Guelmim");
  const [address,setAddress]=useState("Boulevard Mo6");
  const [open,setOpen]=useState(true);
  const [rating,setRating]=useState("2.5");

  const products=[{name:"Pizza",price:"10$", 
  photo:"https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-2-500x375.jpg" ,rating:"4.5"}, 
  {name:"Pizza",price:"10$", 
  photo:"https://www.maspatule.com/blog/wp-content/uploads/2021/07/BLOG-IMG_MISE_EN_AVTtacos.jpg" ,rating:"4.5"},
  {name:"Tacos",price:"8$", 
  photo:"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR%20_02_03_11b.jpg" ,rating:"4.5"},
  {name:"Fried Chicken",price:"10$", 
  photo:"https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg" ,rating:"4.5"},
  {name:"Hamburger",price:"7$", 
  photo:"https://www.tastingtable.com/img/gallery/steakburger-vs-hamburger-whats-the-biggest-difference/l-intro-1657643502.jpg" ,rating:"4.5"}, ];
  
  const [openDialog, setOpenDialog] = React.useState(true);

 
  const handleCloseDialog = () => {
    setOpenDialog(false);
    handleClickSnackBar();
  };

  const feedbacks=[{feedback:"good work",date:"20/10 12:50",photo:"https://i.pinimg.com/736x/d1/6f/5f/d16f5f20ddf55e164b9e6739e09c6b86.jpg",name:"Jack" },
  {feedback:"unique service",date:"20/10 12:50",photo:"https://i.pinimg.com/564x/8b/2b/07/8b2b071a1c9abe181055a10043a6f7f8.jpg",name:"Benjamin" },
  {feedback:"keep up the good work",date:"20/10 12:50",photo:"https://i.pinimg.com/564x/63/f2/81/63f281b0f562313b40cc6d78f36fe967.jpg",name:"alex" },
  {feedback:"fantastic <3",date:"20/10 12:50",photo:" https://i.pinimg.com/564x/08/01/39/0801395ffeae2f146bf413e30164c4c0.jpg",name:"Alice" },];
  const [value, setValue] = React.useState("1");
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  const handleClickSnackBar = () => {
    setOpenSnackBar(true);
   };

  
  return (
    < >
    <Grid container>
    <Grid xs={12}  >
    <Typography sx={{fontFamily:"Bungee Inline",fontWeight:"bold",fontSize:{xs:"24px",md:"28px",lg:"32px"}}} variant='h1'>Profile</Typography>
    </Grid>
    <Grid xs={6}  sx={{marginTop:"20px"}}> 
    
      
      <Chip sx={{backgroundColor:"white",color:"black",fontWeight:"bold",fontSize:"16px" }}
       icon={<StarIcon sx={{color:"var(--yellow) !important",width:"35px",height:"35px"}} />} label={4.5} />
      <Avatar src={ cover} sx={{borderRadius:"38px 38px 0  0", width:{xs:"100%",md:"75%", lg:"50%"},height:"150px",position:"absolute"}}>

</Avatar>
<Avatar src={ logo} sx={{borderRadius:"100%",width:{xs:"80px",lg:"100px"},height:{xs:"80px",lg:"100px"},marginLeft:"20px", marginTop:"100px",border:"var(--yellow) 4px solid"}}>

</Avatar>
      
       
         <Grid container>
          <Grid xs={12} md={8} >  
          <Typography   sx={{fontFamily:"Montserrat",fontWeight:"bold",marginLeft:"20px"  }} variant="h5"   >
         {name}</Typography> 
         </Grid>
         <Grid xs={12} md={4} >  
          <Button  disableElevation variant='contained' sx={{paddingLeft:"25px",paddingRight:"25px",  color:"white",borderRadius:"38px"
       ,fontFamily:"Montserrat",fontSize:"14px",justifyContent:"center", marginLeft: "auto",
       marginRight: "auto"  }} onClick={()=>{setOpen(true)}}  >Join Chat</Button>
         </Grid>
            
         
          
           
            <Grid xs={12}  >
            <Input className='InputProfile' sx={{display:open&&"none"}}   value={email} disabled={open}></Input>
            </Grid>
           
            <Grid xs={12}  >
      <Input className='InputProfile' sx={{display:open&&"none"}}  value={country} disabled={open}></Input>
             </Grid>
            
            <Grid xs={12}  >
      <Input className='InputProfile'sx={{display:open&&"none"}}  value={city} disabled={open}></Input>
            </Grid>
            
            <Grid xs={12} >
      <Input className='InputProfile'  sx={{display:open&&"none"}}  value={address} disabled={open}></Input>
            </Grid>
            <Divider sx={{marginTop:"25px",marginBottom:"25px"}} />

          <Grid xs={12} xl={4}>
         <Button  disableElevation variant='contained' sx={{paddingLeft:"40px",paddingRight:"40px",  color:"white",borderRadius:"38px"
       ,fontFamily:"Montserrat",fontSize:"14px",justifyContent:"center", marginLeft: "auto",
       marginRight: "auto",marginTop:"10px"}} onClick={()=>{setOpen(false)}} disabled={!open}>Edit Profile</Button>
            </Grid>
            <Grid xs={12} xl={4}>
            <Button  disableElevation variant='contained' sx={{paddingLeft:"25px",paddingRight:"25px",  color:"white",borderRadius:"38px"
       ,fontFamily:"Montserrat",fontSize:"14px",justifyContent:"center", marginLeft: "auto",
       marginRight: "auto",marginTop:"10px" }} onClick={()=>{setOpen(true)}} disabled={open}>Update Profile</Button>
          </Grid>
         
           </Grid>

    </Grid>
    <Grid xs={12}  sx={{marginTop:"20px"}}> 
    <TabContext   value={value} >
  <Grid xs={12} sx={{marginTop:"20px"}}>
    <TabList    onChange={handleChange}  >
  
  <Tab  sx={{ fontSize:"18px",fontWeight:"bold",fontFamily:"montserrat"}} label="products" value="1"/>
   
  <Tab    sx={{  fontSize:"18px",fontWeight:"bold",fontFamily:"montserrat"}} label="Feedbacks"  value="2"  />
 
 
  </TabList>
    </Grid>

    <TabPanel  value="1" index={0}>
    <Grid xs={12}  sx={{marginTop:"20px"}}>
       
    {products.map((product )=><Box sx={{ display:'inline-block'}}> <ChefProducts  item={product}/> </Box>)}


 
  </Grid>
</TabPanel>
<TabPanel sx={{ width:"100%",}} value="2" index={1}>
    <Grid xs={12}>
    <Avatar src='https://i.pinimg.com/564x/cc/e5/21/cce521acf55e8cee224946e12db18ec3.jpg' sx={{display:'inline-block',width:"60px",height:"60px"}}>  </Avatar>
        <Input sx={{marginLeft:"20px",width:"350px"}} placeholder='write your feedback about this restaurent...'></Input>
        
        <Button  disableElevation variant='contained' sx={{paddingLeft:"60px",paddingRight:"60px",  color:"white",borderRadius:"38px"
         ,fontFamily:"Montserrat",fontSize:"18px",justifyContent:"center", marginLeft: "auto",
         marginRight: "auto",display:"block",marginTop:"12px",}}>Share It</Button>
    </Grid>
<Grid xs={12}  sx={{marginTop:"20px"}}>

{feedbacks.map((feedback )=><Box sx={{ display:'block'}}> <Feedbacks  item={feedback}/> </Box>)}

 
 </Grid>
   
     </TabPanel>
    

  </TabContext>
  </Grid>

    </Grid>
    <Dialog
        open={openDialog}
         sx={{borderRadius:"38px"}}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Rate The Restaurent</DialogTitle>
        <DialogContent>
          <DialogContentText >
           Share your exprience with the restaurent by rating.
          </DialogContentText>
          <Rating  size="large" name="half-rating" onChange={(event)=>{setRating(event.target.value)}}  defaultValue={2.5} precision={0.5} />
          <Typography  >Rated with {rating}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} >Send the rating</Button>
         </DialogActions>
      </Dialog>

      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
         message="Your rating has been sent😊"
       />
    </ >
  )
}
