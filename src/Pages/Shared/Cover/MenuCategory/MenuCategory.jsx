import { Link } from "react-router-dom";
import MenuItems from "../../MenuItems/MenuItems";
import Cover from "../Cover";

const MenuCategory = ({ items,title,img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 sm:grid-cols-1  my-16 ">
                {
                   items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
<Link to={`/order/${title}`}>  <button className="btn btn-outline border-0 border-b-4">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;