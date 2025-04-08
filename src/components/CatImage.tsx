import React from 'react';
import styled from 'styled-components';

interface CatImageProps {
  imageUrl: string | null;
}

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Placeholder = styled.div`
  width: 200px;
  height: 200px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M65.7,45c0.3-0.8,0.5-1.7,0.5-2.6c0-4.1-3.3-7.4-7.4-7.4c-1.9,0-3.7,0.7-5,2c-2.3-3.5-6.2-5.8-10.8-5.8 c-7.1,0-12.8,5.7-12.8,12.8c0,0.9,0.1,1.7,0.3,2.5c-3.7,0.8-6.5,4.1-6.5,8c0,4.5,3.7,8.2,8.2,8.2h27.8c4.5,0,8.2-3.7,8.2-8.2 C68.2,48.1,67.2,46.1,65.7,45z" fill="%23ddd"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const CatImage: React.FC<CatImageProps> = ({ imageUrl }) => {
  return (
    <ImageContainer>
      {imageUrl ? (
        <Image src={imageUrl} alt="Random cat" />
      ) : (
        <Placeholder />
      )}
    </ImageContainer>
  );
};

export default CatImage; 