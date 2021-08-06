
import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class ViewReturn extends Component{
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      isLoaded: false,
    };
  }

  
    render(){
      //const { records } = this.state;
     return(
        
              <Table striped bordered hover responsive>
              <thead >
                <tr>
                  <th scope="col">Delivery Id</th>
                  <th scope="col">Order Id Name</th>
                  <th scope="col">User Id </th>
                  <th scope="col"> Date</th>
                  <th scope="col">Status</th>

                  <th>Returned Id</th>
                </tr>
              </thead>

             <tbody>
                 {this.state.records.map((record)=>{
                   return(
                    <tr>
                    <th scope="row">{record.delivery_id}</th>
                    <td>{record.e_order_id}</td>
                    <td>{record.e_user_id}</td>
                    <td>{record.e_date}</td>
                    <td>{record.e_status}</td>
                    <td>{record.e_returned_id}</td>
                    
                    
                  </tr>
                   )
                 })}
              </tbody> 
            </Table>
        
     )
    }
}

export default ViewReturn;
