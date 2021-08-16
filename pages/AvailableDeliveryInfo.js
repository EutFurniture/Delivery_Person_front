import clsx from 'clsx';
import axios from "axios";
import React, {useState, useEffect} from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
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
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {useParams} from 'react-router-dom'
import { Form,Row,Col } from "react-bootstrap";

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
    alignContent:'center',
    align:'center',
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
}));

const styles = {
  side:{
    backgroundColor:'rgb(37, 37, 94)',
  },

  card:{
    display:"flex",
    flexDirection :"row",
    justifyContent:"space-between",
  },

  pack:{
    justifyContent:'flex-around',
    marginLeft:'20px'
  }  
};


const dateOnly = (d) => {
  const date = new Date(d);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year} - ${month} - ${day}`;
};

export default function AvailableDeliveryInfo() {
  const { order_id } = useParams();
  const [Dt, setDt] = useState([])
 
 useEffect(() => {
  const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/DeliveryDetails', {
          params: {
              order_id: order_id,
              
          }
          
      });

      setDt(response.data[0]);
         console.log(response.data[0]);

  };
  fetchData();
}, [order_id]);

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


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
        <div className={classes.toolbarIcon} style={{backgroundColor: 'rgb(37, 37, 94)', color:'white'}}>
          <IconButton onClick={handleDrawerClose} style={{color:'white'}}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List style={{backgroundColor: 'rgb(37,37,94)', color:'white'}}>{DpListItems}</List>
        <Divider />
        <List style={{backgroundColor: 'rgb(37,37,94)', color:'white'}}>{Logout}</List>
        <Divider />
      </Drawer>
      </div>
     
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
                  
           
          <Grid item xs={10} style={styles.pack} >
            <div >
              <Paper className={classes.paper}>
              <Typography component="h1" variant="h6" color="inherit" align="center" width="100%" noWrap className={classes.title}>
                    <strong>DELIVERY DETAILED INFORMATION</strong>
              </Typography>
              <br></br>
              <div>

              <Form.Group as={Row} controlId="formHorizontalName">
                  <Form.Label column lg={2} >
                   Order Id :
                  </Form.Label>
                  <Col >
                  <Form.Label column lg={2} >
                  {Dt.order_id}
                  </Form.Label>
                  </Col>
              </Form.Group><br/>
              <Form.Group as={Row} controlId="formHorizontalName">
                  <Form.Label column lg={2} >
                   Employee Id :
                  </Form.Label>
                  <Col >
                  <Form.Label column lg={2} >
                  {Dt.employee_id}
                  </Form.Label>
                  </Col>
              </Form.Group><br/>
             
              <Form.Group as={Row} controlId="formHorizontalName">
                  <Form.Label column lg={2} >
                   Order Desription :
                  </Form.Label>
                  <Col >
                  <Form.Label column lg={2} >
                  {Dt.o_description}
                  </Form.Label>
                  </Col>
              </Form.Group><br/>              
              <Form.Group as={Row} controlId="formHorizontalOrderdate">
                  <Form.Label column lg={2} >
                   Order Date :
                  </Form.Label>
                  <Col >
                  <Form.Label column lg={2} >
                  {dateOnly(Dt.o_date)}
                  </Form.Label>
                  </Col>
              </Form.Group><br/>
              <Form.Group as={Row} controlId="formHorizontalOrderlastdate">
                  <Form.Label column lg={2} >
                   Order Last Date :
                  </Form.Label>
                  <Col >
                  <Form.Label column lg={2} >
                  {dateOnly(Dt.order_last_date)}
                  </Form.Label>
                  </Col>
              </Form.Group><br/>
              </div>
              </Paper>
              </div>
            </Grid>
 
          </Grid>
          
          
        </Container>
      </main>
    </div>
  );
}