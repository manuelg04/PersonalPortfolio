// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiGithubLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
     
      <Link href={'https://www.facebook.com/manuel.gonzalez.18400/'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/04manuelg/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://github.com/manuelg04'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      
    
      
    </div>
  );
};

export default Socials;
