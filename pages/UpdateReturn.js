import React, { useState } from "react";
import clsx from 'clsx';
import axios from "axios";

import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Redirect} from "react-router-dom"
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

const schema = yup.object().shape({
  order_id: yup.string().required(),
  product_id: yup.string().email().required(),
  return_date: yup.string().required(),
  reason: yup.string().required(),

  
 
})


export default function UpdateReturn() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  //const[LoginStatus, setLoginStatus] = useState();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
});

  // const [order_id,setNewOrder_id] = useState("");
  // const [product_id,setNewProduct_id] = useState("");
  // const [return_date,setNewReturn_date] = useState("");
   //const [reason,setNewReason] = useState("");
   
  // const [email,setEmail] = useState("");
  // const [phone_no,setPhoneNo] = useState("");
  // const [job_start_date,setJobStartDate] = useState(0);
  // const [password,setPassword] = useState(0);
  // const [address,setAddress] = useState("");
  // const [role,setRole] = useState("");
  // const [confirm_password,setConfirmPassword] = useState("");
  
  



  const [newOrder_id, setNewOrder_id] = useState(0);
  const [newProduct_id, setNewProduct_id] = useState(0);
  const [newReturn_date, setNewReturn_date] = useState(0);
  const [newReason, setNewReason] = useState(0);
  

  const [returnList, setReturnList] = useState([]);

  const getReturn = () => {
    axios.get('http://localhost:3003/get').then((response) => {
      setReturnList(response.data);
    });
  };
  
  const updateReturnDetails = (order_id) => {
    axios.put("http://localhost:3003/update_return", { order_id: newOrder_id, product_id: newProduct_id, return_date: newReturn_date, reason: newReason}).then(
      (response) => {
        setReturnList(returnList.map((val) => {
          return val.order_id === order_id ? {order_id: val.order_id} : val
        }))
     }
    );
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
            <b>ADMIN</b>
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

         
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
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
        {/* Recent Orders */}
        <Grid item xs={11}  direction="row"  >
      
        <div >
           <Paper className={classes.paper}>
               
           <Typography component="h1" variant="h6" color="inherit"  width="100%" noWrap className={classes.title}>
              <strong>EDIT RETURN ITEMS</strong>
            </Typography><br/>

                 <Form >
                    <div className = "info">
                    <Form.Group as={Row} controlId="formHorizontalProduct_id">
                      <Form.Label column lg={2}>
                        Product ID :
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Product ID" 
                        onChange={(event)=> {
                          setNewProduct_id(event.target.value);
                        }}
                        />
                      </Col>
                    </Form.Group><br/>

                    <Form.Group as={Row} controlId="formHorizontalOrder_id">
                      <Form.Label column lg={2}>
                        Order ID :
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Order ID" 
                        onChange={(event)=> {
                          setNewOrder_id(event.target.value);
                        }}
                        />
                      </Col>
                    </Form.Group><br/>




                    <Form.Group as={Row} controlId="formHorizontalReturn_date">
                      <Form.Label column lg={2}>
                        Return Date :
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="date" placeholder="Return Date" 
                        onChange={(event)=> {
                          setNewReturn_date(event.target.value);
                        }}/>
                      </Col>
                    </Form.Group><br/>

                    <Form.Group as={Row} controlId="formHorizontalReason">

                      <Form.Label column lg={2}>
                        Reason :
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Reason" 
                        onChange={(event)=> {
                          setNewReason(event.target.value);
                        }}/>
                      </Col>
                    </Form.Group><br/>




                  </div>
  
                  

                    
                        <div     align='center' style={styles.button_style}>
                        
                        <Button  style={{fontSize:'20px',width:'200px'}} type="submit"  >Update</Button>
                         
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
