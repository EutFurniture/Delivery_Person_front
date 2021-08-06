import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

import clsx from 'clsx';
import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';



import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import { DpListItems, Logout } from './dplistItems';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Eut Furniture
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    backgroundColor:'#ede7f6'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    alignContent:'center',
    align:'center',
    
  },
  paper: {
    position:'relative',
    align:'center',
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
   
  },
  fixedHeight: {
    height: 240,
  },
  
}));

const styles = {
  side:{
    backgroundColor:'#0E1372',
  },
  pack:{
    justifyContent:'flex-around',
    marginLeft:'20px'
  }  ,
  button_style:{
    display:'flex',
    justifyContent:'space-between',
  }
  
};



export default function AddForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


   const [product_id, setProduct_id]= useState("");
   const [order_id, setOrder_id]= useState("");
   const [return_date, setReturn_date]= useState("");
   const [reason, setReason]= useState("");
  
  


    const addReturnItem = () => {
      Axios.post('http://localhost:3003/create', {
       
        product_id: product_id,
        order_id: order_id,
        return_date: return_date,
        reason: reason,
     
      }).then(() => { 
        alert("Details added success");
      });
    };

    


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar} style={{backgroundColor: '#0E1372'}}>
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
            <strong>DELIVERY PERSON</strong>
          </Typography>

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
        <div className={classes.toolbarIcon} style={{backgroundColor: '#0E1372', color:'white'}}>
          <IconButton onClick={handleDrawerClose} style={{color:'white'}}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List style={{backgroundColor: '#0E1372', color:'white'}}>{DpListItems}</List>
        <Divider />
        <List style={{backgroundColor: '#0E1372', color:'red'}}>{Logout}</List>
        <Divider />
      </Drawer>
      </div>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
        
            
            

            {/* Recent Orders */}
            <Grid item xs={10} style={styles.pack} >
            
  
            <div >
              <Paper className={classes.paper}>
              <Typography component="h1" variant="h6" color="inherit"  width="100%" noWrap className={classes.title}>
              <strong>ADD RETURNED ITEM DETAILS</strong>
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
                          setProduct_id(event.target.value);
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
                          setOrder_id(event.target.value);
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
                          setReturn_date(event.target.value);
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
                          setReason(event.target.value);
                        }}/>
                      </Col>
                    </Form.Group><br/>

                          </div>
  
                  

                    
                        <div     align='center' style={styles.button_style}>
                        <Button  type="submit" size='lg' href= '/AddReturnedItem' >View Return Item</Button>

                        <Button  type="submit" size='lg' onClick={addReturnItem}>Add Returned Items</Button>
                         
                     </div>
                </Form>
            
              </Paper>
              </div>
            </Grid>
 
          </Grid>
          
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

