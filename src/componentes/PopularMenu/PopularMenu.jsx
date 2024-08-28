
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItems from "../../Pages/Shared/MenuItems/MenuItems";
import useMenu from "../../hocks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item =>item.category === 'popular')
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"Check it Our"}
                heading={"FROM OUR MENU"}
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 ">
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>

            <div className="w-3/12 mx-auto mb-6 mt-6">
                <p className="text-center font-bold text-2xl">view menu</p>
                <hr />
            </div>
               <div className="w-[1000px] h-[150px] mx-auto bg-black mt-6 mb-6 sm:col-span-1">
                     <p className="text-center py-14 text-red-50 text-2xl font-bold sm:col-start-1">Call Us: +88 0192345678910</p>
               </div>
        </section>
    );
};

export default PopularMenu;