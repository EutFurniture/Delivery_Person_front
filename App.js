import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BackImage from "./components/Login/Pages/BackImage";
import LoginScreen from "./components/Login/Pages/LoginScreen";
import ForgotPasswordScreen from "./components/Login/Pages/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/Login/Pages/ResetPasswordScreen";
import ManageEmployee from "./components/admin/pages/ManageEmployee";
import ManageUser from "./components/admin/pages/ManageUser";
import ManagePayments from "./components/admin/pages/ManagePayments";
import ManageProducts from "./components/admin/pages/ManageProducts";
import AddEmployeeForm from "./components/admin/pages/AddEmployeeForm"
import UpdateEmployee from "./components/admin/pages/UpdateEmployee"
import Categories from "./components/admin/pages/Categories";
import AddProductForm from "./components/admin/pages/AddProductForm";
import EditProducts from "./components/admin/pages/EditProducts";
import CustomizedOrders from "./components/admin/pages/CustomizedOrders";
import ViewCustomizedOrder from "./components/admin/pages/ViewCustomizedOrder";
import EmpInfo from "./components/admin/pages/EmpInfo";
import ProductInfo from "./components/admin/pages/ProductInfo";
import ManageGifts from "./components/admin/pages/ManageGifts";
import AddGift from "./components/admin/pages/AddGift";
import EditGifts from "./components/admin/pages/EditGifts"
import GiftInfo from "./components/admin/pages/GiftInfo"
import DashboardNew from "./components/admin/pages/DashboardNew";
import Updateform from "./components/admin/pages/UpdateForm"
import AddProduct from "./components/admin/pages/Addproduct";
import ManageDelivery from './components/dManager/pages/ManageDelivery';
import ManageDelivers from './components/dManager/pages/ManageDelivers';
import ManageReturnItems from './components/dManager/pages/ManageReturnItems';
import AssignDelivers from './components/dManager/pages/AssignDelivers';
import AddDelivers from './components/dManager/pages/AddDelivers';
import EmployeePersonal from "./components/admin/pages/EmployeePersonal";
import EmployeeInfo from "./components/admin/pages/EmployeeInfo";

import sDashboard from './components/sManager/pages/sDashboard';
import Profile from './components/sManager/pages/profile';
import Payments from './components/sManager/pages/payments';
import Promotions from './components/sManager/pages/promotions';
import Customers from './components/sManager/pages/customers';
import Orders from './components/sManager/pages/Orders';
import DeliverySchedule from './components/sManager/pages/DeliverySchedule';

import DpDashboard from './components/dPerson/pages/DpDashboard';
import AddReturnedItem from './components/dPerson/pages/AddReturnedItem';
import ViewAvailableDelivery from './components/dPerson/pages/ViewAvailableDelivery';
import ConfirmCashPay from './components/dPerson/pages/ConfirmCashPay';
import ConfirmDelivery from './components/dPerson/pages/ConfirmDelivery';
import AddForm from './components/dPerson/pages/AddForm';
import UpdateReturn from './components/dPerson/pages/UpdateReturn';

import Maps from './components/dPerson/pages/Maps';

import Home from './components/customer/pages/Home';
import Services from './components/customer/pages/Services';
import Products from './components/customer/pages/Products';
import SignUp from './components/customer/pages/SignUp';
import EditReturn from './components/dPerson/pages/EditReturn';


function App() {
  return (
    <>
    <Router>
    
      <Switch>
         
        <Route path="/" exact component ={LoginScreen}/>
        <Route path="/services" component={Services}/>
        <Route path="/products" component={Products}/>
        <Route path="/sign-up" component={SignUp}/>
         
          
          <Route path='/ManageDelivery' component={ManageDelivery}/>
          <Route path='/ManageDelivers' component={ManageDelivers}/>
          <Route path='/AddDelivers' component={AddDelivers}/>
          <Route path='/ManageReturnItems' component={ManageReturnItems}/>
          <Route path='/AssignDelivers' component={AssignDelivers}/>  
        
          <Route path='/DpDashboard' component={DpDashboard}/>
          <Route path='/ViewAvailableDelivery' component={ViewAvailableDelivery}/>  
          <Route path='/AddReturnedItem' component={AddReturnedItem}/>
          <Route path='/ConfirmCashPay' component={ConfirmCashPay}/>
          <Route path='/ConfirmDelivery' component={ConfirmDelivery}/>
          <Route path='/AddForm' component={AddForm}/>
          <Route path='/EditReturn' component={EditReturn}/>
          <Route path='/Maps' component={Maps}/>
          <Route path='/UpdateReturn' component={UpdateReturn}/>
         
          

          <Route path='/sManager/pages/sDashboard' exact component={sDashboard}/>
          <Route path='/sManager/pages/Orders' component={Orders}/>
          <Route path='/sManager/pages/profile' component={Profile}/>
          <Route path='/sManager/pages/payments' component={Payments}/>
          <Route path='/sManager/pages/promotions' component={Promotions}/>
          <Route path='/sManager/pages/customers' component={Customers}/>
          <Route path='/sManager/pages/DeliverySchedule' component={DeliverySchedule}/>
          
          <Route path='/DashboardNew' exact component={DashboardNew}/>
          <Route path='/ManageEmployee' component={ManageEmployee} />
          <Route path='/ManageUser' component={ManageUser} />
          <Route path='/ManagePayments' component={ManagePayments} />
          <Route path='/ManageProducts' component={ManageProducts} />
          <Route path='/ManageGifts' component={ManageGifts} />
          <Route path='/Categories' component={Categories} />
          <Route path='/AddEmployeeForm' component={AddEmployeeForm} />
          <Route path='/AddProductForm' component={AddProductForm} />
          <Route path='/EditProducts' component={EditProducts} />
          <Route path='/CustomizedOrders' component={CustomizedOrders} />
          <Route path='/ViewCustomizedOrder' component={ViewCustomizedOrder} />
          <Route path='/EmpInfo' component={EmpInfo} />
          <Route path='/GiftInfo' component={GiftInfo} />
          <Route path='/ProductInfo' component={ProductInfo} />
          <Route path='/AddGift' component={AddGift} />
          <Route path='/EditGifts' component={EditGifts} />
          <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
          <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen}/> 
          <Route exact path="/UpdateEmployee" component={UpdateEmployee}/> 
          <Route exact path="/AddProduct" component={AddProduct}/>  
           
         
         
          <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
          <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen} /> 
          <Route exact path="/EmployeePersonal" component={EmployeePersonal} />
          <Route exactpath="/EmployeeInfo"component={EmployeeInfo} />
          <Route exact path="/UpdateEmployee" component={UpdateEmployee}/>



      </Switch>
    </Router>
    
   
	
    </>
  );
}

export default App;


