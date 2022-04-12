import { Logo } from '@/components/Elements';

export const Landing = () => {
  return (
    <div className='text-center'>
      <header className='bg-cream min-h-screen flex flex-col items-center justify-center text-white text-xl'>
        <Logo />
        <p className='text-steele'>
          Edit <code className='text-deep-sea-blue'>src/App.tsx</code> and save
          to reload. changes
        </p>
        <a
          className='text-earth'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
        <p className='text-sage font-montserrat'>
          Montserat - Steele Family Moments
        </p>
        <p className='text-sage font-code'>Code - Steele Family Moments</p>
        <p className='text-sage font-brittany'>
          Brittany - Steele Family Moments
        </p>
      </header>
    </div>
  );
};
