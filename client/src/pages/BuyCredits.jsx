import { Heading } from '../components';
import { PLANS } from './plans';
import { assets } from '../assets/assets';

const BuyCredits = () => {
  return (
    <div className=" text-center pt-14 mb-10">
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>
      <Heading
        className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 py-3 font-semibold mb-6 sm:mb-10"
        bgGradient={true}
      >
        Choose the plan that's right for you
      </Heading>

      <ul className="flex flex-wrap justify-center gap-6 text-left">
        {PLANS.map((plan) => (
          <li
            key={plan.name}
            className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500"
          >
            <img width={40} src={assets.logo_icon} alt="BG Removal Logo" />
            <h3 className='mt-3 font-semibold'>{plan.name}</h3>
            <p className='text-sm'>{plan.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'>${plan.price}</span> / <span>{plan.credits} credits</span>
            </p>
            <button className='w-full text-white bg-gray-800 mt-8 text-sm rounded-md py-2.5 min-w-52'>Purchase</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuyCredits;
