import React from 'react'
 import { Avatar , Typography,Button ,Box  ,FormControl,Select,MenuItem ,Grid,Input,InputAdornment} from '@mui/material';
import {useState  } from 'react';
import './Styles/addProduct.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import uploadDefault from './Assets/uploadDefault.png';

export default function AddProduct() {
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    const [upload,setUpload]=useState(uploadDefault);
    const [uploaded,setUploaded]=useState(false);
    function handleChange(e) {
        console.log(e.target.files);
        setUploaded(true);
        setUpload(URL.createObjectURL(e.target.files[0]));
    }
  return (
    < > 
    <Grid container sx={{height:"100%",width:"100%"}}>
    <Grid xs={12}  >
    <Typography sx={{fontFamily:"Bungee Inline",fontWeight:"bold",fontSize:{xs:"24px",md:"28px",lg:"32px"}}} variant='h1'>Add Product</Typography>
    </Grid>
    <Grid xs={12} md={5}  >
 <Box sx={{margin: '50px auto',display:"block",width:"50%",height:"200px",backgroundColor:"rgb(241, 241, 241)",borderRadius:"38px"  ,padding:uploaded?"0px":"20px",position:"relative"}}>
 <label for="avatar">
  <Avatar src={upload} sx={{width:uploaded?"100%":"120px",height:uploaded?"100%":"120px",borderRadius:"38px", margin:"auto",position:"absolute",top:"0",bottom:'0',left:"0",right:"0"}}></Avatar></label>

<Input sx={{visibility:"hidden"}} type="file"
       id="avatar" name="avatar" onChange={handleChange}
       accept="image/png, image/jpeg"></Input>
</Box>
    </Grid>

    <Grid  xs={12} md={6} sx={{marginTop:{xs:"20px",md:"100px"}}} >
    <Grid xs={12} >
    <Input value={title} onChange={(event)=>{setTitle(event.target.value)}} sx={{margin:{xs:"25px",md:"0px"}}} className='shareInput'  disableUnderline  autoFocus  placeholder='Title'  ></Input>
    </Grid>
    <Grid xs={12}   sx={{ marginTop:{xs:"10px",md:"50px"}}}>
     <Input value={price} onChange={(event)=>{setPrice(event.target.value)}} sx={{margin:{xs:"25px",md:"0px"}}} type="number"   className='shareInput'  disableUnderline  autoFocus  placeholder='Price'  ></Input>
     </Grid>
     <Grid xs={12}   sx={{ marginTop:{xs:"10px",md:"50px"}}}>
    <Input  value={description} onChange={(event)=>{setDescription(event.target.value)}} sx={{margin:{xs:"25px",md:"0px"}}} className='shareInput'  disableUnderline  autoFocus  placeholder='Description'  ></Input>
    </Grid>
    <Button    variant='contained' disableElevation  color="primary"
         sx={{fontFamily:'Montserrat',width:"60%",fontStyle:"bold",display:"block", textAlign:"center", margin: '0 auto',
        color:'white',marginTop:{xs:"2%",md:"5%"},fontSize:"20px",borderRadius:"24px",padding:"10px 20px 10px 20px" }}>Share It Now</Button>
    </Grid>
    
     
    
          </Grid>
    </ >
  )
}
