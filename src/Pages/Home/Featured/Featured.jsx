import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";
import FeaturedImg from "../../../assets/home/featured.jpg"
import './Featuted.css'
const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 bg-fixed" >
            <SectionTitle
                subHeading={'check it our'}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-8 pt-10 px-36">
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p className="text-white text-xl">Mac 20, 2029</p>
                    <p className="text-white">WHERE CAN I GET SOME?</p>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat 
                        recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;           