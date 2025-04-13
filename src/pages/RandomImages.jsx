import React, { useEffect, useState } from 'react';

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  // const accessKey = '0LAwzTKj3q-net_pL6SfJiAhIPxcEzUT-egpYZey8ZI'; 

  const fetchRandomImage = () => {
    const url = `https://picsum.photos/id/237/200/300`
    setImageUrl(url);

  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <div className="p-4 text-center">
      {imageUrl ? (
        <img src={imageUrl} alt="Random from Unsplash" className="h-100 w-full m-5 rounded-md object-cover" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomImage;
