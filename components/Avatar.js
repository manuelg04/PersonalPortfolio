// next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none w-64'>
      <Image
        src={'/king.jpg'}
        width={737}
        height={678}
        alt=''
        className='translate-z-0 w-full h-full border-4 border-white rounded-full shadow-2xl'
      />
    </div>
  );
};

export default Avatar;
