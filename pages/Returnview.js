import React, { Component } from 'react'  
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';  
import axios from 'axios';  
import { Link } from "react-router-dom"; 
import { withStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';



const styles = {
  viewbtn:{
  backgroundColor: '#33b5e5',
  width: '200px',
  textDecoration: 'none',
  height: '100px',
  marginRight: '5px',
  fontSize: '17px',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '5px',
  paddingBottom: '5px',
  color: 'white',
  borderRadius: '7px',
},
updatebtn:{
  backgroundColor: '#8738a1',
  width: '200px',
  textDecoration: 'none',
  height: '100px',
  marginRight: '5px',
  fontSize: '17px',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '5px',
  paddingBottom: '5px',
  color: 'white',
  borderRadius: '7px',
},
deletebtn:{
  backgroundColor: '#CC0000',
  width: '200px',
  textDecoration: 'none',
  height: '100px',
  marginRight: '5px',
  fontSize: '17px',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '5px',
  paddingBottom: '5px',
  color: 'white',
  borderRadius: '7px',
},
Addbtn:{
  backgroundColor: '#CC0000',
  width: '200px',
  textDecoration: 'none',
  height: '100px',
  marginRight: '5px',
  fontSize: '17px',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '5px',
  paddingBottom: '5px',
  color: 'white',
  borderRadius: '7px',
}
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const dateOnly = (d) => {
  const date = new Date(d);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year} - ${month} - ${day}`;
};

export class Returnview extends Component {  
  constructor(props) {  

    super(props)  
    this.state = {  
    ProductData: [], 
    
    }  
  }  

componentDidMount() {  
    axios.get('http://localhost:3001/returnItem').then(response => {  
      console.log(response.data);  
      this.setState({  
        ProductData: response.data  
      });  
    });  
  }  


render() { 
  const deleteReturnitems =(order_id)=>{
       axios.delete(`http://localhost:3001/deleteReturnitem/${order_id}`).then(()=>{
      alert('Item deleted successfully')
      });
  }

return (  
       <TableContainer component={Paper}> 
           <div align = 'right'>
             <br/>
             <Link  to='/AddForm' className="Addbtn"><AddCircleIcon style={{marginTop:'5px'}}/> Add New </Link> <br/>

            </div> 
        <br/>
        <Table stickyHeader  aria-label="sticky table">  
         <TableHead >  
            <StyledTableRow >  
              <StyledTableCell>Return Id</StyledTableCell>  
              <StyledTableCell align="center">Order ID</StyledTableCell>   
              <StyledTableCell align="center">Product ID</StyledTableCell>   
              <StyledTableCell align="center">Return Date</StyledTableCell>  
              <StyledTableCell align="center" >Action</StyledTableCell>   
            </StyledTableRow >  
          </TableHead>  
          <TableBody>  
            {  
              this.state.ProductData.map((record, index) => {  
                return <StyledTableRow key={index}  >  
                  <TableCell component="th" scope="row">  
                    {record.return_id}  
                  </TableCell>  
                  <TableCell align="center">{record.order_id}</TableCell>  
                  <TableCell align="center">{record.product_id}</TableCell>  
                  <TableCell align="center">{dateOnly(record.return_date)}</TableCell> 
                  <TableCell align="center"> 
                  <Link style={styles.viewbtn} to={location=> `/DpReturnItemInfoRoute/${record.order_id}`}> View </Link>
                  <Link style={styles.updatebtn} to={location=> `/UpdateReturnDetailRoute/${record.order_id}`}> Update </Link>
         {/*         <Link style={styles.deletebtn} onClick={()=>{deleteReturnitems(record.order_id)}}>Delete</Link> */} 

                  </TableCell>
                </StyledTableRow >  
				
              })  

            }  
          </TableBody> 
          
        </Table>  
        

     </TableContainer>  
	 
    
    );  
  }  
}  

export default Returnview; 



