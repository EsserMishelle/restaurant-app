/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./Checkout.module.css";

function Checkout() {
  const stripe = useStripe();
  const element = useElements();

  const pay = async () => {
    try {
      const response = await fetch(
        "https://restaurant-app-nnv7.onrender.com/pay",
        {
          method: "POST",
          headerL: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.data();
      const CardElement = elements.getElement(CardElement);
      const confirmPayment = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: { card: CardElement },
        }
      );
      console.log(confirmPayment);
      const { paymentIntent } = confirmPayment;
      if (paymentIntent.status === "succeeded") alert("Payment successful");
      else alert("Payment failed");
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    }
  };

  return (
    <div className="checkout" style={{ width: "25%" }}>
      <CardElement />
      <button onClick={pay}>Pay</button>
    </div>
  );
}

export default Checkout;
