import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForSrtipe = price * 100;
  const publishableKey = 'pk_test_X3I2MoKmjzkUe45Nsf8TKr7w0028IRw8Tn';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="flouze"
      billingAddress
      shippingAddress
      image="https://i.imgur.com/ljaRBSP.png"
      description={`Your total is $${price}`}
      amount={priceForSrtipe}
      panelLabel="Pay Now 2"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
