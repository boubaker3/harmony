import * as React from 'react';
 import { Avatar , Typography,Button,Card,Box  ,Grid  } from '@mui/material';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
 import ClickAwayListener from '@mui/material/ClickAwayListener';
 import Dialog from '@mui/material/Dialog';
 import DialogActions from '@mui/material/DialogActions';
 import DialogContent from '@mui/material/DialogContent';
 import DialogContentText from '@mui/material/DialogContentText';
 import DialogTitle from '@mui/material/DialogTitle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Snackbar from '@mui/material/Snackbar';

import   './Styles/Notifications.css';
export default function Feedbacks(props) {

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };






  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {

    if ( anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    handleOpenDialog();
  };

   

 
  return ( 
       <Grid container>
     <Grid xs={12} md={8} xl={6}> 
    <Card className='notifCard'   elevation={false}
    sx={{  boxShadow: " 0px ",borderRadius:"38px", padding :"10px 40px 10px 10px",marginBottom:"50px" ,backgroundColor:"#EFEFEF"
   }}>
 
 <Grid container>
 <Grid xs={12}>
 <Typography    sx={{fontFamily:"Montserrat",fontSize:{xs:"8px",md:"12px"},left:"0",right:"auto",textAlign:"right"}}>{props.item.date} </Typography>
 </Grid>
<Grid xs={2}>

<Avatar src={props.item.photo} sx={{borderRadius:"100%",width:{xs:"60px",md:" 70px"},height:{xs:"60px",md:" 70px"} }}> 
</Avatar>
</Grid>
<Grid xs={9} sx={{margin:' auto 0',textAlign:"left"}}> 
       <Typography noWrap  sx={{ fontFamily:"Montserrat", textOverflow:'ellipsis' }}> {props.item.name}</Typography>
        
       </Grid>
  <Grid xs={12}>
  <Typography noWrap  sx={{ fontFamily:"Montserrat", textOverflow:'ellipsis',margin:"20px",fontSize:"14px",color:"gray" }}> {props.item.feedback}</Typography>

  </Grid>
 
       </Grid>
</Card>
</Grid>
 


     
</Grid>
  )
}
