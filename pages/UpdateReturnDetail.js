import React, { useState,useEffect } from "react";
import clsx from 'clsx';
import axios from "axios";

import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Redirect, useParams} from "react-router-dom"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { useForm } from "react-hook-form";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
 import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


import { DpListItems, Logout } from './dplistItems';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    fontSize:40,
    fontWeight:600,
  },
  userimage : {
    height: 60,
    width: 60,
    borderRadius:100,
    borderColor:'white',

  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    
  },
 
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop:'20px',
    marginLeft:'40px',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 'auto',
  },
  addbutton:{
      backgroundColor:'#0000ff',
      height:'50px',
      width:'160px',
      borderRadius:'5px',
      marginRight:'10px',
      textDecoration:'none',
      textAlign:'center',
      paddingTop:'10px'
  },
  addcategorybox:{
    width: '1100px',
    height:'120px',
    backgroundColor: '#fff',
    marginLeft: '30px',
    display:'flex',
    //boxShadow:'5px 1px 2px 2px '
    
  },
  categorybtn:{
      border:0,
      backgroundColor:'#9bddff',
      width:'800px',
      height:'40px',
      marginTop:'40px',
      marginLeft:'30px',
      fontSize:'20px',
      borderRadius:'5px'

  },
  addcategory:{
    height:'40px'
  },
  categoryimage:{
    height:'500px',
    width:'1100px'
},
btn:{
    color:'white',
    fontSize:'18px',
    width:'150px',
    height:'40px',
    backgroundColor:'blue',
    border:'none',
    borderRadius:'5px'
},
addproducts:{
    display:'flex',
},

  

}));

const styles = {
  side:{
    backgroundColor:'rgb(37, 37, 94)',
  }
};

const dateOnly = (d) => {
    const date = new Date(d);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year} - ${month} - ${day}`;
  };



export default function UpdateReturnDetail() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
 
  
 const {order_id} = useParams();
 const [Dt, setDt] = useState([])
 const [newProduct_id, setNewProduct_id] = useState(0);
 const [newReturn_date, setNewReturn_date] = useState(0);
 const [newReason,setNewReason]=useState(0);
 

  const [ReturnList, setReturnList] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get('http://localhost:3001/ReturnItemview', {
            params: {
               order_id: order_id,
                
            }
        });
  
        setDt(response.data[0]);
           console.log(response.data[0]);
    };
    fetchData();
  }, [order_id]);

  const UpdateReturnDetail = (order_id) => {
    axios.put(`http://localhost:3001/UpdateReturn/${order_id}`, {product_id: newProduct_id, return_date:newReturn_date,reason:newReason ,order_id:order_id}).then(
      (response) => {
        setReturnList(Dt.map((record) => {
          return record.id === order_id ? {order_id: record.order_id, product_id: record.product_id, return_date: record.return_date,reason:record.reason, 
            product_id: newProduct_id,return_date:newReturn_date, reason: newReason} : record
          
        }))
     }
    )
    alert("Return Item Edited successfully")  
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const[isAuth,setIsAuth]=useState(true);

  if(!isAuth){
    return <Redirect to="" />
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar} style={{backgroundColor: 'rgb(37, 37, 94)'}}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <b>DELIVERY PERSON</b>
          </Typography>


         
          <IconButton color="inherit" fontSize="inherit">
           <AccountCircleIcon   onClick={handleClick}/>
  
          </IconButton>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>setIsAuth(false)}>Logout</MenuItem>
      </Menu>

        </Toolbar>
        
      </AppBar>
      <div style={styles.side}>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon} style={{backgroundColor: 'rgb(37, 37, 94)', color:'white'}}>
          <IconButton onClick={handleDrawerClose} style={{color:'white'}}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider/>
        <List style={{backgroundColor: 'rgb(37, 37, 94)', color:'white'}}>{DpListItems}</List>
        <Divider/>
        <List style={{backgroundColor: 'rgb(37, 37, 94)', color:'red'}} onClick={()=>setIsAuth(false)}>{Logout}</List>
        <Divider/>
      </Drawer>
      </div>
     
      <main style={{backgroundColor: '#f0f8ff'}} className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container  maxWidth="lg" className={classes.container}>
        
        <Grid  container spacing={10}>
      
        <Grid item xs={11}  direction="row"  >
      
        <div >
           <Paper className={classes.paper}>
               
           <Typography component="h1" variant="h6" color="inherit" align="center" width="100%" noWrap className={classes.title}>
                  <strong> UPDATE RETURN ITEMS DETAILS </strong>
                </Typography><br/>

                <Form >
                <Form.Group as={Row} controlId="formHorizontalProduct_id">
                  <Form.Label column lg={2} >
                    Product ID :
                  </Form.Label>
                  <Col >
                    <Form.Control type="text"  defaultValue={Dt.product_id}
       onChange={(event)=> {
         setNewProduct_id(event.target.value);
       }}  required />                     
                  </Col>
                </Form.Group><br/>

                <Form.Group as={Row} controlId="formHorizontalReturnDate">
                  <Form.Label column lg={2} >
                   Return Date :
                  </Form.Label>
                  <Col >
                    <Form.Control type="text" defaultValue={(Dt.return_date)}  onChange={(event)=> {
        setNewReturn_date(event.target.value);
       }} required />                      
                  </Col>
                </Form.Group><br/>
                
                 <Form.Group as={Row} controlId="formHorizontalReason">
                  <Form.Label column lg={2} >
                   Reason :
                  </Form.Label>
                  <Col >
                    <Form.Control type="text" defaultValue={Dt.reason}  onChange={(event)=> {
         setNewReason(event.target.value);
       }} required />                   
                  </Col>
                </Form.Group><br/>



              
                <div align="center">
                 <Button  style={{fontSize:'20px',width:'200px'}} type="submit" onClick={() => {UpdateReturnDetail(Dt.order_id)}} >Update</Button>
                 </div> 
               
         </Form>
                
  
    
          </Paper>
         </div>
        
        </Grid>

      </Grid>
        </Container>
      </main>
    </div>
  );
}