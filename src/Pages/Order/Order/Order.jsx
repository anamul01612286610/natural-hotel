import { useState } from 'react';
import coverOr from '../../../assets/shop/banner2.jpg'
import { Helmet } from 'react-helmet';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hocks/useMenu';
import OrderTeb from './OrderTebs/OrderTeb';
import { useParams } from 'react-router-dom';

const Order = () => {
    <Helmet>
    <title>Natural hotel || order</title>
</Helmet>
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <div
                className="hero min-h-screen h-[300px]" style={{ backgroundImage: `url("${coverOr}")` }}>
                <div className="hero-overlay "></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md w-[1300px] h-[250px] mt-60 border border-indigo-600  bg-opacity-50" >
                        <h1 className="mb-5 text-5xl font-bold uppercase">our shop</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>

                    </div>
                </div>
            </div>
            <Tabs className="mx-auto items-center" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salad </Tab>
        <Tab>Pizza </Tab>
        <Tab>Soup </Tab>
        <Tab>Dessert </Tab>
        <Tab>Drink</Tab>
      </TabList>
      <TabPanel>
     <OrderTeb
       items={salad}
     ></OrderTeb>
      </TabPanel>
      <TabPanel>
        <OrderTeb
         items={pizza}
        ></OrderTeb>
      </TabPanel>
      <TabPanel>
        <OrderTeb
        items={soup}
        ></OrderTeb>
      </TabPanel>
      <TabPanel>
        <OrderTeb
          items={dessert}
        ></OrderTeb>
      </TabPanel>
      <TabPanel>
        <OrderTeb
        items={offered}
        ></OrderTeb>
      </TabPanel>
    </Tabs>

        </div>
    );
};

export default Order;