

const MenuItems = ({item}) => {
    const{name,recipe,image,price}=item;
    return (
        <div className="flex space-x-4 ">
            <div>
                <img style={{borderRadius:'0 200px 200px 200px'}}  className="w-[118px]" src={image} alt="" />
            </div>
            <div>
                <h3 className="uppercase">{name}----------</h3>
                <p>{recipe}</p>
            </div>
              <div>
                <p className="text-orange-400">${price}</p>
              </div>
              
        </div>
    );
};

export default MenuItems;