import brushstroke from '@/assets/brush-stroke.svg';
export type BrushstrokeProps = {
  className?: string;
};
export const Brushstroke = () => {
  return (
    <div className={'relative flex justify-center items-center'}>
      <img src={brushstroke} className='text-sage w-9/12' alt='logo' />
      <span className='absolute text-cream font-code text-[200%]'>
        CLICK HERE
      </span>
    </div>
  );
};
