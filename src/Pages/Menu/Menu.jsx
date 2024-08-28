
import { Helmet } from 'react-helmet';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../../src/assets/menu/pizza-bg.jpg'
import SectionTitle from '../../componentes/SectionTitle/SectionTitle';
import MenuCategory from '../Shared/Cover/MenuCategory/MenuCategory';
import useMenu from '../../hocks/useMenu';
import desserts from '../../../src/assets/menu/dessert-bg.jpeg'
import Soups from '../../../src/assets/menu/soup-bg.jpg'
import salads from '../../../src/assets/menu/salad-bg.jpg'
import pizzas from '../../../src/assets/menu/pizza-bg.jpg'


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Natural hotel || menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={"our menu"}
            ></Cover>
            <SectionTitle
                subHeading={"DON'T MISS"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>
            <MenuCategory
                items={offered}
            ></MenuCategory>
            <MenuCategory items={dessert} title="Dessert"
                img={desserts}
            ></MenuCategory>
            <MenuCategory
                items={salad}
                title="salad"
                img={salads}
            ></MenuCategory>
            <MenuCategory
                items={pizza}
                title="pizza"
                img={pizzas}
            ></MenuCategory>
            <MenuCategory
                items={soup}
                title="Soup"
                img={Soups}
            ></MenuCategory>
        </div>
    );
};

export default Menu;