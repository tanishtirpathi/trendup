import axios from "axios";

const API_KEY = "l4TW7s3pFyIwQpqJ5TisMrwthQloY6e3ZSVRYHUBqtvCgG6DafKUuMee"; // replace with your actual key

const client = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: API_KEY,
  },
});

export const fetchRandomPhotos = async (count = 20) => {
  const res = await client.get(`/curated?per_page=${count}`);
  return res.data.photos;
};
