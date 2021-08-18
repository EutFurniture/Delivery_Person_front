import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import SignUp from "./components/Login/Pages/SignUp";
import LoginScreen from "./components/Login/Pages/LoginScreen";
import ForgotPasswordScreen from "./components/Login/Pages/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/Login/Pages/ResetPasswordScreen";

//ADMIN
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

//DELIVERY MANAGER
import Dashboard from './components/dManager/pages/Dashboard';
import ManageDelivery from './components/dManager/pages/ManageDelivery';
import ManageDelivers from './components/dManager/pages/ManageDelivers';
import ManageReturnItems from './components/dManager/pages/ManageReturnItems';
import AssignDelivers from './components/dManager/pages/AssignDelivers';
import AddDelivers from './components/dManager/pages/AddDelivers';
import ManageCashOnDelivery from './components/dManager/pages/ManageCashOnDelivery';
import ManageSchedule from './components/dManager/pages/ManageSchedule';
import ManagePrioritize from './components/dManager/pages/ManagePrioritize';
import CashOnDeliveryInfo from './components/dManager/pages/CashOnDeliveryInfo';
//import ManageReports from './components/dManager/pages/ManageReports';

//SALES MANAGER
import sDashboard from './components/sManager/pages/sDashboard';
import Profile from './components/sManager/pages/profile';
import Payments from './components/sManager/pages/payments';
import Promotions from './components/sManager/pages/promotions';
import Customers from './components/sManager/pages/customers';
import Orders from './components/sManager/pages/Orders';
import DeliverySchedule from './components/sManager/pages/DeliverySchedule';

//DELIVERY PERSON
import DpDashboard from './components/dPerson/pages/DpDashboard';
import AddReturnedItem from './components/dPerson/pages/AddReturnedItem';
import ViewAvailableDelivery from './components/dPerson/pages/ViewAvailableDelivery';
import ConfirmCashPay from './components/dPerson/pages/ConfirmCashPay';
import ConfirmDelivery from './components/dPerson/pages/ConfirmDelivery';
import AddForm from './components/dPerson/pages/AddForm';
import UpdateReturnDetail from './components/dPerson/pages/UpdateReturnDetail';
import DpProfile from './components/dPerson/pages/DpProfile';
import Maps from './components/dPerson/pages/Maps';
import DpReturnItemInfoRoute from './components/dPerson/pages/DpReturnItemInfoRoute';
import DpReturnItemInfo from './components/dPerson/pages/DpReturnItemInfo';
import UpdateReturnDetailRoute from './components/dPerson/pages/UpdateReturnDetailRoute';
import AvailableDeliveryInfo from './components/dPerson/pages/AvailableDeliveryInfo';
import AvailableDeliveryInfoRoute from './components/dPerson/pages/AvailableDeliveryInfoRoute';
import DpProfileRoute from './components/dPerson/pages/DpProfileRoute';
import Calender from './components/dPerson/pages/Calender';
import UpdateConDeliveryRoute from './components/dPerson/pages/UpdateConDeliveryRoute';
import UpdateConDelivery from './components/dPerson/pages/UpdateConDelivery';



//CUSTOMER
import Productl  from './components/customer/landing/Pproduct';
import ProductListl from './components/customer/landing/Products/ProductList';
import Detaill from './components/customer/landing/Products/Details';
import Table from './components/customer/landing/Products/Table';
import Chair from './components/customer/landing/Products/Chair';
import Bed from './components/customer/landing/Products/Bed';
import Sofa from './components/customer/landing/Products/Sofa';
import Aboutl from './components/customer/landing/About';
//import ProductList from './Products/category/ProductList';
import Details from './components/customer/Products/Details';
import Checkout from './components/customer/Products/checkout/Checkout';
import Cart from './components/customer/Products/Cart/Cart';

import New from './New'


export default   function App() {

  

  return (
    <>
    <Router>
    
      <Switch>
         
  
          <Route path='/Aboutl'  component={Aboutl}/>    
          <Route path='/productl'  component={Productl}/>
          <Route path='/detaill'  component={Detaill}/>
          <Route path='/dining'  component={ProductListl}/>
          <Route path='/chair'  component={Chair}/>
          <Route path='/table'  component={Table}/>
          <Route path='/sofa'  component={Sofa}/>
          <Route path='/bed'  component={Bed}/>
          <Route path="/detail" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/checkout" component={Checkout}/>


          <Route path='/customer'  ><New /></Route>
          
         
          <Route path='/dManager/pages/Dashboard'  component={Dashboard}/>
          <Route path='/dManager/pages/ManageDelivery' component={ManageDelivery}/>
          <Route path='/dManager/pages/ManageDelivers' component={ManageDelivers}/>
          <Route path='/dManager/pages/AddDelivers' component={AddDelivers}/>
          <Route path='/dManager/pages/ManageReturnItems' component={ManageReturnItems}/>
          <Route path='/dManager/pages/AssignDelivers' component={AssignDelivers}/>
          <Route path='/dManager/pages/ManageCashOnDelivery' component={ManageCashOnDelivery}/>
          <Route path='/dManager/pages/ManageSchedule' component={ManageSchedule}/>
          <Route path='/dManager/pages/ManagePrioritize' component={ManagePrioritize}/>
          <Route path='/CashOnDeliveryInfo' component={CashOnDeliveryInfo}/> 

        
          <Route path='/DpDashboard' component={DpDashboard}/>
          <Route path='/ViewAvailableDelivery' component={ViewAvailableDelivery}/>  
          <Route path='/AddReturnedItem' component={AddReturnedItem}/>
          <Route path='/ConfirmCashPay' component={ConfirmCashPay}/>
          <Route path='/ConfirmDelivery' component={ConfirmDelivery}/>
          <Route path='/AddForm' component={AddForm}/>
          <Route path='/Maps' component={Maps}/>
          <Route path='/UpdateReturnDetail' component={UpdateReturnDetail}/>
          <Route path='/DpProfile' component={DpProfile}/>
          <Route path='/DpProfileRoute' component={DpProfileRoute}/>
          <Route path='/DpReturnItemInfo' component={DpReturnItemInfo}/>
          <Route path='/DpReturnItemInfoRoute' component={DpReturnItemInfoRoute}/>
          <Route path='/UpdateReturnDetailRoute' component={UpdateReturnDetailRoute}/>
          <Route path='/AvailableDeliveryInfo' component={AvailableDeliveryInfo}/>
          <Route path='/AvailableDeliveryInfoRoute' component={AvailableDeliveryInfoRoute}/>
          <Route path='/Calender' component={Calender}/>
          <Route path='/UpdateConDelivery' component={UpdateConDelivery}/>
          <Route path='/UpdateConDeliveryRoute' component={UpdateConDeliveryRoute}/>


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
           
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
          <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen} /> 
         

      </Switch>
    </Router>
    
   
	
    </>
  );
}
    



