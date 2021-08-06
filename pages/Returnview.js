
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
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';


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


export class Returnview extends Component {  
  constructor(props) {  

    super(props)  
    this.state = {  
    ProductData: [] 
    
    }  
  }  

  componentDidMount() {  
    axios.get('http://localhost:3003/get').then(response => {  
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

  const editIcon = (
    <IconButton component={Link} to="/EditReturn">
      <EditIcon color="primary" />
    </IconButton>
  );
 
    console.log(this.state.ProductData);  
    return (  
 
      
      <TableContainer component={Paper}> 
      <div align = 'right'> <Link  to='/AddForm' className="Addbtn"><AddCircleIcon style={{marginTop:'5px'}}/> Add New </Link> <br/></div> 
        <br/>
        <Table stickyHeader  aria-label="sticky table">  
         <TableHead >  
            <TableRow>  
              <StyledTableCell>Return Id</StyledTableCell>  
              <StyledTableCell align="center">Order ID</StyledTableCell>   
              <StyledTableCell align="center">Product ID</StyledTableCell>   
              <StyledTableCell align="center">Return Date</StyledTableCell>  
              <StyledTableCell align="center" >Action</StyledTableCell>   
            </TableRow>  
          </TableHead>  
          <TableBody>  
            {  
              this.state.ProductData.map((p, index) => {  
                return <TableRow key={index}>  
                  <TableCell component="th" scope="row">  
                    {p.return_id}  
                  </TableCell>  
                  <TableCell align="center">{p.order_id}</TableCell>  
                  <TableCell align="center">{p.product_id}</TableCell>  
                  <TableCell align="center">{p.return_date}</TableCell>  
                  <TableCell align="center"> {deleteIcon} {editIcon}</TableCell>
                </TableRow>  
              })  

            }  
          </TableBody> 
          
        </Table>  

     </TableContainer>  
    );  
  }  
}  

export default Returnview; 
