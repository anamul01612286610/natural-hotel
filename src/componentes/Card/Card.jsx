import SectionTitle from "../SectionTitle/SectionTitle";
import salat from '../../assets/menu/salad-bg.jpg'

const Card = () => {
    return (
        <div className="mb-8">
            <section>
                <SectionTitle
                    subHeading={"should try"}
                    heading={"RECOMMENDS"}
                >
                </SectionTitle>
            </section>
            <div className="grid md:grid-cols-3 sm:grid-cols-2">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={salat}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl  font-bold">
                        Caeser Salad
                        </h2>
                        <p className="text-xl">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                          <button className="text-center btn btn-neutral">ADD TO CARD</button>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={salat}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl  font-bold">
                        Caeser Salad
                        </h2>
                        <p className="text-xl">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                          <button className="text-center btn btn-neutral">ADD TO CARD</button>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={salat}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl  font-bold">
                        Caeser Salad
                        </h2>
                        <p className="text-xl">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                          <button className="text-center btn btn-neutral">ADD TO CARD</button>
                    </div>
                </div>

               </div>
        </div>
    );
};

export default Card;