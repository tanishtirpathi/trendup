import React, { useEffect, useState } from 'react';
import "./css.css"
const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  // const accessKey = '0LAwzTKj3q-net_pL6SfJiAhIPxcEzUT-egpYZey8ZI'; 

  const fetchRandomImage = () => {
  const randomId = Math.floor(Math.random()*1000)
    const url = `https://picsum.photos/id/${randomId}/200/300`
    const img = new Image();
    img.onload = () => setImageUrl(url);
    img.onerror = () => {
      // fallback to random
      setImageUrl(`https://picsum.photos/300/200?random=${Math.floor(Math.random() * 10000)}`);
    };
    img.src = url;

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
