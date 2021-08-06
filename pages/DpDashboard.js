import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import  './DpDashboard.css';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import { DpListItems, Logout } from './dplistItems';
import Testimonial  from './Testimonial';
import shop1 from '../../../images/shop1.jpg'

import { fontSize } from '@material-ui/system';
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
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
   
  },
  custom:{
    display:'flex',
    paddingLeft:'20px',
    
   height:'80px',
   paddingBottom:'10px',
    color:'black',
    fontSize:'20px',
   
  
},
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 'auto',
  },
  maindash:{
    display:'flex'
  }

}));

const styles = {
  side:{
    backgroundColor:'rgb(37, 37, 94)',
  }
};



export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
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

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar} style={{backgroundColor: 'rgb(37, 37, 94)'}}>
          <IconButton
            edge="start"
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <b>DELIVERY PERSON</b>
          </Typography>


          <Paper variant="outlined">
          <div>
   
   <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
   </div>
</Paper>
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
        <List style={{backgroundColor: 'rgb(37, 37, 94)', color:'white'}}>{DpListItems}</List>
        <Divider />
        <List style={{backgroundColor: 'rgb(37, 37, 94)', color:'red'}}>{Logout}</List>
        <Divider />
      </Drawer>
      </div>

      {/* <main className={classes.content}>
      <Adminmain />
        

 </main> */}
 <main style={{backgroundColor: '#f0f8ff'}} className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
          
            <Grid item xs={12} >

              <Paper className={fixedHeightPaper}>
                  <div className={classes.maindash}>
                    <div className='charts_left'>
                     <div className="charts_right_title">
                         <div>
                             <h1>Stats Reports</h1>
                          </div>
                          
                      </div>

                       <div className="charts_right_cards">
                           <div className="card1">
                               <h3>Total Cash On Payments</h3>
                               <p>Rs.125,300</p>
                           </div>

                           <div className="card2">
                               <h3>Total No of Deliveries</h3>
                               <p>52</p>
                           </div>

                           <div className="card3">
                               <h3>Pending Deliveries</h3>
                               <p>4</p>
                           </div>

                           <div className="card4">
                               <h3>Total Return Items </h3>
                               <p>13</p>
                           </div>
                           <div className="card1">
                               <h3>Free Deliveries </h3>
                               <p>over Rs.50 000</p>
                           </div>

                           <div className="card2">                      
                               <h3>Offers During </h3>
                               <p>Festivals and anniversaries</p>
                           </div>
                       </div>
                       </div>
                  <div className="charts_left">
                     
                     <h1> Order Details</h1>
                     <table>
                         <thead>
                         <th>Month</th>
                         <th>Deliveries</th>
                         <th>Total Distance</th>
                        
                         </thead>
                         
                         <tbody>
                         
                         <tr>
                             <td>january</td>
                             <td>4</td>
                             <td>128Km</td>
                             
                         </tr>
                         <tr>
                             <td>February</td>
                             <td>8</td>
                             <td>240Km</td>
                             
                         </tr>
                         <tr>
                             <td>March</td>
                             <td>6</td>
                             <td>210Km</td>
                             
                         </tr>
                         <tr>
                             <td>April</td>
                             <td>11</td>
                             <td>420Km</td>
                           
                         </tr>
                         <tr>
                             <td>May</td>
                             <td>5</td>
                             <td>223Km</td>
                             
                         </tr>
                         <tr>
                             <td>June</td>
                             <td>8</td>
                             <td>400Km</td>
                             
                         </tr>
                         <tr>
                             <td>July</td>
                             <td>6</td>
                             <td>350Km</td>
                             
                         </tr>
                         
                         </tbody>
                      
                     </table>
               
               
           </div>  
                       </div>
              </Paper>
            </Grid>
            
            
         </Grid>
<Testimonial />  
        </Container>
      </main>
    </div>
  );
}
