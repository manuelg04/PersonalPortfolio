// next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex w-86'>
      <video
        src={'/videomanuel.mp4'}
        width={737}
        height={678}
        controls
        muted
        autoPlay
        className='translate-z-0 w-full h-full border-4 border-white rounded-full shadow-2xl'
      >
        Tu navegador no soporta el tag de video.
      </video>
    </div>
  );
};

export default Avatar;
