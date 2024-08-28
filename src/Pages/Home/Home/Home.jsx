import { Helmet } from "react-helmet";
import Card from "../../../componentes/Card/Card";
import PopularMenu from "../../../componentes/PopularMenu/PopularMenu";
import ChifService from "../../../componentes/SectionTitle/AddList/ChifService";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import TestimoniAls from "../TESTIMONIALS/TestimoniAls";

const Home = () => {
    return (
        <div>    <Helmet>
        <title>Natural hotel || Home</title>
    </Helmet>
           <Banner></Banner>
           <Category></Category>
           <ChifService></ChifService>
           <PopularMenu></PopularMenu>
           <Card></Card>
           <Featured></Featured>
           <TestimoniAls></TestimoniAls>
           
        </div>
    );
};

export default Home;