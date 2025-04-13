import axios from "axios";
import React, { useState, useEffect } from "react";

function ExploreImages() {
  const [images, setImages] = useState([]);

  const API_KEY = "l4TW7s3pFyIwQpqJ5TisMrwthQloY6e3ZSVRYHUBqtvCgG6DafKUuMee";

  const client = axios.create({
    baseURL: "https://api.pexels.com/v1/",
    headers: {
      Authorization: API_KEY,
    },
  });

  const fetchRandomPhotos = async (count = 20) => {
    try {
      const res = await client.get(`/curated?per_page=${count}`);
      return res.data.photos;
    } catch (err) {
      console.error("Failed to fetch images", err);
      return [];
    }
  };

  useEffect(() => {
    fetchRandomPhotos(14).then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
      {images.map((photo) => (
        <img
          key={photo.id}
          src={photo.src.medium}
          alt={photo.alt || "pexels image"}
          className="rounded-md shadow-md"
        />
      ))}
    </div>
  );
}

export default ExploreImages;
