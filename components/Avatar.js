import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const Avatar = () => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(true);
  }, []);

  return (
    <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
      <ReactPlayer
        url='/videomanuel.mp4'
        playing={playing}
        controls={true}
        width='100%'
        height='100%'
      />
    </div>
  );
};

export default Avatar;
