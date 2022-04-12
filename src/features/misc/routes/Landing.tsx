import { Brushstroke } from '@/components/Elements';

export const Landing = () => {
  return (
    <div className='max-w-[800px] w-[75vw] m-auto'>
      <img
        src='https://via.placeholder.com/3500x1500.png/658589/f5f3ef?text=Steele+Moments+Video'
        alt='placeholder'
        className='w-full h-auto'
      />
      <div className='mt-8'>
        <div className='text-deep-sea-blue text-7xl font-brittany align-bottom whitespace-nowrap'>
          Oh Hey!
        </div>
        <div className='text-earth text-4xl font-code whitespace-nowrap text-right relative bottom-8 my-4'>
          <span className='border-b-[1px] border-earth md:text-6xl '>
            We{"'"}re the Steele{"'"}s
          </span>
        </div>
      </div>
      <p>
        Just a Photo/Video Power Couple who love Cameras, Mesican Food and a
        good Movie Night. Want to learn more about us?
      </p>
      <div className='grid grid-cols-2 grid-rows-[minmax(0,_1fr)_auto_minmax(0,_1fr)] items-center justify-center'>
        <Brushstroke className='flex justify-center items-center'></Brushstroke>
        <div className='border-deep-sea-blue border-8 p-2 row-span-3 col-start-2'>
          <img
            src='https://via.placeholder.com/3000x3000.png/658589/f5f3ef?text=Were+the+Steeles'
            alt='placeholder'
            className='w-full h-auto'
          />
        </div>
        <div className='w-full h-[2px] bg-steele opacity-25' />
        <div className='font-brittany text-earth md:text-5xl text-center'>
          Glad you Stopped By...{' '}
        </div>
      </div>
      <p>Looking for a Comfrotable and fun experience...</p>
    </div>
  );
};
