import UpdateCashOnDelivery from './UpdateCashOnDelivery'

const  UpdateCashOnDeliveryRoute=()=>{
    return(
        <div>
            <Switch>
                <Route path="/ UpdateCashOnDeliveryRoute/:order_id">
                    < UpdateCashOnDelivery />
                </Route>
            </Switch>
        </div>
    )
}

export default  UpdateCashOnDeliveryRoute;