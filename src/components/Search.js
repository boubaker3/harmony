import React from 'react'
import './Styles/Search.css';
import { Avatar , Typography,Button ,Box  ,FormControl,Select,MenuItem ,Grid,Input,InputAdornment} from '@mui/material';
import {useState,useEffect} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Restaurents } from './restaurents';
import RestaurentItem from './RestaurentItem';
export default function Search() {
  const [searchedFor,setSearch]=useState("");
  const [filtredRestaurents,setFiltredRestaurents ]=useState([]);

  
   const SearchedFor=(event)=>{
    setSearch(event.target.value);

    if(event.target.value!=""){
      setFiltredRestaurents(Restaurents.filter((restaurent=>restaurent.name.toLowerCase().startsWith(searchedFor.toLowerCase()))));
    }else{
      setFiltredRestaurents([])
    }
   }
 
  return (
    < > 
    <Grid container sx={{height:"100%",width:"100%"}}>
    <Grid xs={12} md={6}>
    <Typography sx={{fontFamily:"Bungee Inline",fontWeight:"bold",fontSize:{xs:"24px",md:"28px",lg:"32px"}}} variant='h1'>Search for Restaurents</Typography>
    </Grid>
    <Grid xs={12} md={6}>
    <Input onChange={SearchedFor} sx={{margin:{xs:"25px",md:"0px"}}} className='searchInput'  disableUnderline  autoFocus  placeholder='Search for restaurents' startAdornment={<InputAdornment position='start'> <SearchIcon/></InputAdornment>}  ></Input>
    </Grid>
    <Grid xs={12} >
    <Typography   sx={{margin:{xs:"25px",md:"0px",fontFamily:"montserrat",fontSize:"20px",display:searchedFor.length==0&&"none"}}} >Results for {searchedFor}  </Typography>
    </Grid>
    <Grid xs={12} >
<Box sx={{marginTop:"50px"}}>
    { filtredRestaurents.length>0 && filtredRestaurents.map((Restaurent)=><Box sx={{display:"inline-block",marginLeft:"20px"}}><RestaurentItem item={Restaurent}  margin={true}/></Box>)  }
  </Box>
     </Grid>
    
          </Grid>
    </ >
  )
}
