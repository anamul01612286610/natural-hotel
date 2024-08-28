

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../hocks/useAuth";
import useAxios from "../../../hocks/useAxios";
import './CheckoutFrom.css'

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const Axios = useAxios();  // Update here
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        Axios.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
            .catch(error => {
                console.error('Error creating payment intent:', error);
            });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            }
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent);
        setProcessing(false)

        if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id)
            const payment = {email: user?.email,
                 transactionId: paymentIntent.id,
                 Status: 'service pending',
                 date:new Date(),
                price,
                quantity: cart.length,
               cartItems: cart.map(item =>item._id),
               menuItems: cart.map(item => item._id),
                itemsName:cart.map(item=>item.name)
                }
                 Axios.post('/payments',payment)
                 .then(res =>{
                    console.log(res.data)
                    if(res.data.insertedId){
                        //inserted In 
                    }
                    
                 })
        }
    };

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn  btn-info btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing }>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-300">Transaction complete with transactionId {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;
