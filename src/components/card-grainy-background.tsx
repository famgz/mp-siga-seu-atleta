import { getRandomHexColor } from '@/lib/utils';

export default function CardGrainyBackground() {
  return (
    <div
      className='absolute inset-0 border-2 border-dashed border-black'
      style={{ background: getRandomHexColor() }}>
      <div className='w-full h-full'></div>
    </div>
  );
}
