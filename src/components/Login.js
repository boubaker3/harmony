import React from 'react'
import { Input,Box,Grid,Checkbox,FormControlLabel,Button,Tab } from '@mui/material';
import { Link } from 'react-router-dom';

import './Styles/Login.css';
export default function Login() {
  return (
    <Box sx={{height:"450px",width:{xs:"450px",sm:"450px",md:"500px",lg:"500px",xl:"500px"},boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px',  borderRadius: "20px",marginTop:"50px",left:"0",right:"0",marginRight:"auto",marginLeft:"auto" }}>
     <Grid container>
      
      <Grid  xs={12}>
      
      <Input  disableUnderline={true}   sx={{ width:"100%",paddingLeft:"50px",paddingRight:"50px",paddingTop:"50px"}} id='input'  placeholder='Email'></Input>
      </Grid>
      <Grid xs={12}>
      <Input  disableUnderline={true} sx={{ marginTop:"20px",width:"100%",paddingLeft:"50px",paddingRight:"50px",paddingBottom:"50px"}} id='input'  placeholder='Password'></Input>
      </Grid>
     <FormControlLabel sx={{paddingLeft:"50px" }} control={<Checkbox  />} label="Stay Logged in"/>
     <Grid xs={12}>

     <Button component={Link } to='/home'  disableElevation variant='contained' sx={{paddingLeft:"60px",paddingRight:"60px",float:"right" ,margin:"50px",color:"white",borderRadius:"38px"
     ,fontFamily:"Montserrat",fontSize:"18px"}}>Login</Button>
     </Grid>
    
      </Grid>   
      
      </Box>
  )
}
