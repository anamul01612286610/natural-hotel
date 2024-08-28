import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hocks/useCart";

// ToDD: add Publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payments = () => {
    const [cart] =useCart();
    const total = cart.reduce((sum , item)=>sum + item.price,0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle heading="payment"  subHeading="Please pay to eat" ></SectionTitle>
            <h2 className="text-3xl">Please Process Taka</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm cart={cart} price={price} ></CheckoutForm>
                </Elements>
            </div>
        </div>
        
    );
};

export default Payments;