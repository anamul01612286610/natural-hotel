import Chif from '../../../assets/home/chef-service.jpg'

const ChifService = () => {
    return (
  <div className='mb-10'>
            <div className='relative'>
             <img src={Chif} alt="" />
        </div>

        <div className='bg-white md:max-w-screen-xl mx-auto h-60 text-center p-20 absolute z-10 -mt-80   '>
    <h2 className='text-3xl text-black font-bold'>Bistro Boss</h2>
    <p className='w-5/4 text-xl text-black '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
   </div>
  </div>
    );
};

export default ChifService;