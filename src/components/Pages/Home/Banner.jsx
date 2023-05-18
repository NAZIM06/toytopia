import Lottie from 'lottie-react'
import reader from '../../../assets/129806-baby-toy-train.json'

const Banner = () => {
  return (
    <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
      {/* Text Content */}
      <div className='mb-10 flex justify-between lg:mb-0'>
        <div className='max-w-lg mb-6 lg:mt-8'>
          <h2 className='text-6xl font-extrabold mb-5 text-blue-900'>
            Fun Toys For Your Kids.
          </h2>
          <p className='text-lg text-gray-500  font-serif'>
            Welcome to our Shop. Browse through our huge collection of fun toys, dolls, puzzle games and more for your kids. Shop, play and create fond memories with your little ones!
          </p>
        </div>
      </div>
      {/* Lottie Animation */}
      <div className=''>
        <div className='w-4/6 mx-auto'>
          <Lottie animationData={reader} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;