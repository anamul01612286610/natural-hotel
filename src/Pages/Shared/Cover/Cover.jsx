import { Parallax } from 'react-parallax';

const Cover = ({img ,title}) => {
    return (
      <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
  >
    <div
        className="hero min-h-screen h-[300px]">
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md w-[1300px] h-[250px] mt-60 border border-indigo-600  bg-opacity-50" >
            <h1 className="mb-5 text-5xl font-bold u">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
      
          </div>
        </div>
      </div>
  </Parallax>
      
     
    );
};

export default Cover;