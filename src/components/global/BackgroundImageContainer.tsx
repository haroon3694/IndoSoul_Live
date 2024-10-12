import React from 'react';

interface BackgroundImageContainerProps {
  backgroundImage: string;
  bgSize: string;
  children: React.ReactNode;
}

const BackgroundImageContainer: React.FC<BackgroundImageContainerProps> = ({ backgroundImage, children, bgSize }) => {
  return (
    <div 
      className="w-full h-full max-h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: bgSize }}
    >
      {children}
    </div>
  );
};

export default BackgroundImageContainer;