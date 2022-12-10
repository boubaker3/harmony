import React from 'react'
 import { Input,Box,Grid,Checkbox,FormControlLabel,Button,Tab } from '@mui/material';
 import Logo from './Assets/Logo.png';
 import pic from './Assets/cover.png';

export default function UploadPicture() {
  
  const categories= ["Saab", "Volvo", "BMW"];
    return (
        <Grid container>
             <Grid xs={12}>
 
            <Box sx={{width:{xs:"200px",sm:"200px",md:"400px",lg:"400px",xl:"500px"},padding:"5px"  }} >
         <img id='logo' src={Logo} />
         <div id='container1'>
  
         <h6>Harmony</h6>
         </div>
         </Box>
        </Grid>
        <Box sx={{height:"500px",width:{xs:"450px",sm:"450px",md:"500px",lg:"500px",xl:"500px"},boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px',
          borderRadius: "20px",marginTop:"50px",left:"0",right:"0",marginRight:"auto",marginLeft:"auto" ,padding:"20px"}}>
         
         <Box sx={{height:"200px",position:"absolute",width:{xs:"450px",sm:"450px",md:"500px",lg:"500px",xl:"500px"},
          borderRadius: "20px",marginTop:"20px",left:"0",right:"0",marginRight:"auto",marginLeft:"auto",backgroundColor:"gray",opacity:"0.1" }}>
          </Box>
           
          <Box  sx={{width:{xs:"450px",sm:"450px",md:"500px",lg:"500px",xl:"500px"}  }}>
          <img src={pic} style={{width:"200px",height:"200px", marginLeft: "auto",
  marginRight: "auto",display:"block",marginTop:"100px",
  }} />
          </Box>
           
          <Grid xs={12}>
    
         <Button  disableElevation variant='contained' sx={{paddingLeft:"60px",paddingRight:"60px",  color:"white",borderRadius:"38px"
         ,fontFamily:"Montserrat",fontSize:"18px",justifyContent:"center", marginLeft: "auto",
         marginRight: "auto",display:"block",marginTop:"120px",}}>Upload It</Button>
         </Grid>
        
          
          
          </Box>
           </Grid> 
      )
}
