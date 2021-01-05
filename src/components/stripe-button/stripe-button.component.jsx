import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey = 'pk_test_51I5LwdH2FRjnfEHBV723StdyeDwxDVlkSDermf1b3elwlRu3R20dffG3BzNAPsZf3xAmSEGQDRwmmygZ7jeb5HUL009Q4n5XQo';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default StripeCheckoutButton;
