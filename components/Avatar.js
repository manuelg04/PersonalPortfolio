import dynamic from 'next/dynamic';
import { useState } from 'react';

// Importa ReactPlayer solo en el lado del cliente
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Avatar = () => {
  const [volume, setVolume] = useState(0.8);

  const handleVolumeChange = (e) => setVolume(parseFloat(e.target.value));

  return (
    <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
      <ReactPlayer
        url='/videomanuel.mp4'
        playing={true}
        controls={true}
        volume={volume}
        width='100%'
        height='100%'
      />
      <input 
        type="range" 
        value={volume} 
        min="0" 
        max="1" 
        step="0.01" 
        onChange={handleVolumeChange} 
        className="absolute bottom-0 left-0 w-full opacity-50"
      />
    </div>
  );
};

export default Avatar;
