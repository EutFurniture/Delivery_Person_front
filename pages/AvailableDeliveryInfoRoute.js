import {Route, Switch} from "react-router-dom";

import AvailableDeliveryInfo from './AvailableDeliveryInfo'

const AvailableDeliveryInfoRoute=()=>{
    return(
        <div>
            <Switch>
                <Route path="/AvailableDeliveryInfoRoute/:order_id">
                    <AvailableDeliveryInfo/>
                </Route>
            </Switch>
        </div>
    )
}
export default AvailableDeliveryInfoRoute;