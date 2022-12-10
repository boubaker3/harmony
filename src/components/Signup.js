import React from 'react'
import { Input,Box,Grid ,Button,Tab } from '@mui/material'
import { TabContext, TabList,TabPanel } from '@mui/lab';
import './Styles/Login.css';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [value, setValue] = React.useState("1");
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{height:"450px", width:{xs:"450px",sm:"450px",md:"500px",lg:"500px",xl:"500px"},boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px',
      borderRadius: "20px",marginTop:"50px",left:"0",right:"0",marginRight:"auto",marginLeft:"auto" }}>
    <Grid container>
      
    <Grid xs={12}>
    <TabContext   value={value} >
    <Box sx={{  width:"300px",left:"0",right:"0",marginRight:"auto",marginLeft:"auto"}}>

    
  <TabList    onChange={handleChange}  >
  
  <Tab  sx={{ fontSize:"18px",fontWeight:"bold"}} label="1" value="1"/>
   
  <Tab    sx={{  fontSize:"18px",fontWeight:"bold"}} label="2"  value="2"  />
  <Tab    sx={{  fontSize:"18px",fontWeight:"bold"}} label="3"  value="3"  />

  </TabList>
  </Box>
  <TabPanel sx={{ width:"100%",}} value="1" index={0}>
  <Grid  xs={12}>
     <Input  disableUnderline={true}   sx={{width:"100%",paddingLeft:"20px",paddingRight:"100px",paddingTop:"20px"}} id='input'  placeholder='Brand name'></Input>
     </Grid>
     <Grid xs={12}>
     <Input  disableUnderline={true} sx={{ marginTop:"20px",width:"100%",paddingLeft:"20px",paddingRight:"100px" }} id='input'  placeholder='Email'></Input>
     </Grid>
     <Grid  xs={12}>
     <Input  disableUnderline={true}   sx={{ width:"100%",paddingLeft:"20px",paddingRight:"100px",paddingTop:"20px"}} id='input'  placeholder='Password'></Input>
     </Grid>
</TabPanel>
<TabPanel sx={{ width:"100%",}} value="2" index={1}>
 
<Grid  xs={12}>
  
 <Grid  xs={12}>
      <Input  disableUnderline={true}   sx={{ width:"100%",paddingLeft:"20px",paddingRight:"100px",paddingTop:"20px"}} id='input'  placeholder='Country'></Input>
      </Grid>
      <Grid  xs={12}>
      <Input  disableUnderline={true}   sx={{ width:"100%",paddingLeft:"20px",paddingRight:"100px",paddingTop:"20px"}} id='input'  placeholder='City'></Input>
      </Grid>

     <Input  disableUnderline={true}   sx={{ width:"100%",paddingLeft:"20px",paddingRight:"100px",paddingTop:"20px"}} id='input'  placeholder='Phone number'></Input>
     </Grid>
   
     </TabPanel>
     <TabPanel sx={{ width:"100%",}} value="3" index={2}>
     <Grid  xs={12}>
     <Input  disableUnderline={true}   sx={{ width:"100%",paddingLeft:"20px",paddingRight:"100px",paddingTop:"20px"}} id='input'  placeholder='Address'></Input>
     </Grid>
     <Grid  xs={12}>
     <Input  disableUnderline={true}   sx={{ width:"100%",paddingLeft:"20px",paddingRight:"100px",paddingTop:"20px"}} id='input'  placeholder='Bio'></Input>
     </Grid>
      
      </TabPanel>
  </TabContext>

    
     </Grid>
     
     <Grid xs={12}>
    <Button component={Link } to='/home '  disableElevation variant='contained' sx={{paddingLeft:"60px",paddingRight:"60px",float:"right" ,marginRight:"50px",color:"white",borderRadius:"38px"
    ,fontFamily:"Montserrat",fontSize:"18px"}}>Signup</Button>
    </Grid>
   
     </Grid>   
     
     </Box>
  )
}
