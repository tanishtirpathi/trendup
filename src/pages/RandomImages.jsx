import React, { useEffect, useState } from 'react';

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const accessKey = '0LAwzTKj3q-net_pL6SfJiAhIPxcEzUT-egpYZey8ZI'; // Replace with your key

  const fetchRandomImage = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${accessKey}`
      );
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
      <h1 className="text-xl font-bold mb-4">Random Unsplash Image</h1>
      {imageUrl ? (
        <img src={imageUrl} alt="Random from Unsplash" className="rounded shadow-md mx-auto max-w-md" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomImage;
