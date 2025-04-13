import React, { useEffect, useState } from 'react';

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const accessKey = '0LAwzTKj3q-net_pL6SfJiAhIPxcEzUT-egpYZey8ZI'; 

  const fetchRandomImage = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${accessKey}`
      );
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
      }
    const data = await response.json();
    setImageUrl(data.urls.regular);
    } catch (error) {
      console.error("Failed to fetch image:", error);
    }
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <div className="p-4 text-center">
      {imageUrl ? (
        <img src={imageUrl} alt="Random from Unsplash"   className="h-100 w-full m-5 rounded-md object-cover"/>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomImage;
