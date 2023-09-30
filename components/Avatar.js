const Avatar = () => {
  return (
    <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"> 
      {/* Estilos temporales para diagnóstico y dimensiones específicas para diferentes tamaños de pantalla */}
      <video
        src={'/videomanuel.mp4'}
        controls
        muted
        playsInline
        className="w-full h-full" 
      >
        Tu navegador no soporta el tag de video.
      </video>
    </div>
  );
};

export default Avatar;
