import FoodCard from "../../../../componentes/FoodCard/FoodCard";


const OrderTeb = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-4'>
        {
               items.map(item=> <FoodCard
               key={item._id}
               item={item}
   
               ></FoodCard>)
           }
        </div>
    );
};

export default OrderTeb;