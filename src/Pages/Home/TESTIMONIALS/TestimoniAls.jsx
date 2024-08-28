import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


import '@smastrom/react-rating/style.css'
const TestimoniAls = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("reveis.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <SectionTitle
                subHeading={'what our client say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}

                    >
                        <div className="m-24 flex flex-col items-center ">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                         
                         
                            <p className="py-16">{review.details}</p>
                            <h3 className="text-2xl text-orange-400
                    ">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default TestimoniAls;