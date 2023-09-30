import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const Avatar = () => {
  const [volume, setVolume] = useState(0.8); // inicializa el volumen al 80%

  // función para manejar el cambio de volumen
  const handleVolumeChange = (e) => setVolume(parseFloat(e.target.value));

  return (
    <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
      <ReactPlayer
        url='/videomanuel.mp4'
        playing={true} // auto-play
        controls={true} // muestra los controles del reproductor
        volume={volume} // establece el volumen del reproductor
        width='100%'
        height='100%'
      />
      {/* Control deslizante para el volumen */}
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
