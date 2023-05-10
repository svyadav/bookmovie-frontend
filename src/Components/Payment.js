import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import cardImage from '../Image/cash-payment.png'
import { useNavigate } from 'react-router-dom';
const Payment=()=>{

    const navigate=useNavigate()
  
    const onToken=(token)=>{
        console.log(token)
        alert("Payment Successfull...!ThankYou for booking")
        navigate("/")
    }
    return (
        <>
        <div>
        <StripeCheckout
        label="Pay your amount"
        name="BookMyShow"
        shippingAddress
        billingAddress
        // description={`Pay your total amount`}
        panelLabel="Pay Money"
       
        image={cardImage}
        // currency="INR"
        token={onToken}
        stripeKey="pk_test_51N5tyYSAO3QZITEFuYB3qDqeZjbh6dV0Lg3yUKfAiunKnkvljrSX4lHJfxiWLJnynDwaXCE5Fkpmimeew8Zdfx8j00ehDu39Fq"
 
      />
            
        </div>
   
        </>
    )
}

export default Payment