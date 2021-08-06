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
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';



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


export class ViewCashon extends Component {  
  constructor(props) {  

    super(props)  
    this.state = {  
    ProductData: []  
    }  
  }  

  componentDidMount() {  
    axios.get('http://localhost:3003/viewcashOnDelivery').then(response => {  
      console.log(response.data);  
      this.setState({  
        ProductData: response.data  
      });  
    });  
  }  

  render() { 
    var deleteIcon =
  (<IconButton onClick={console.log("delete")}>
    <DeleteIcon color="secondary" />
  </IconButton>
  );

 
 
    console.log(this.state.ProductData);  
    return (  
      <TableContainer component={Paper}>  
        <Table stickyHeader  aria-label="sticky table">  
          <TableHead >  
            <TableRow>  
              
              <StyledTableCell align="center">OrderID</StyledTableCell>  
              <StyledTableCell align="center">Total Price</StyledTableCell>  
              <StyledTableCell align="center">Advance Price</StyledTableCell>   
              <StyledTableCell align="center">Order Status</StyledTableCell>  
              <StyledTableCell align="center" >Action</StyledTableCell>   
            </TableRow>  
          </TableHead>  
          <TableBody>  
            {  
              this.state.ProductData.map((p, index) => {  
                return <TableRow key={index}>  
                  <TableCell align="center" component="th" scope="row">  
                    {p.order_id}  
                  </TableCell>  
                  
                  <TableCell align="center">{p.total_price}</TableCell>  
                  <TableCell align="center">{p.advance_price}</TableCell>  
                  <TableCell align="center">{p.o_status}</TableCell> 
                  <TableCell align="center"> {deleteIcon}</TableCell>
                </TableRow>  
              })  

            }  
          </TableBody>  
        </Table>  

     </TableContainer>  
    );  
  }  
}  

export default ViewCashon; 
