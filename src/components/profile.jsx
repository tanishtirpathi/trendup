import React, { useState, useEffect } from "react";
import "./style.css";

function Profile() {
  // State hooks to manage loading, error, and data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileData, setProfileData] = useState(null); 
  const [bio, setBio] = useState('');
  const [description, setDescription] = useState('');

  // Function to fetch GitHub user data
  const fetchGitHubData = async () => {
    try {
      const url = "https://api.github.com/users/tanishtirpathi";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setProfileData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchGitHubData();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="min-h-screen w-screen flex text-white bg-red font-san ">
      <aside className="w-60 bg-gradient-to-b from-black-900 to-red-900 p-4 overflow-hidden ">
        <div className="bg-gray-300 w-14 h-8 mb-6" />
        <nav className="flex flex-col gap-7 text-sm">
          <a
            href="#"
            className="text-xl text-white visited:text-white no-underline"
          >
            Components
          </a>
          <a
            href="#"
            className="text-xl text-white visited:text-white no-underline"
          >
            Home
          </a>
          <a
            href="#"
            className="text-xl text-white visited:text-white no-underline"
          >
            Tasks
          </a>
          <a
            href="#"
            className="text-xl text-white visited:text-white no-underline"
          >
            Settings
          </a>
          <a
            href="#"
            className="text-xl text-white visited:text-white no-underline"
          >
            Profile
          </a>
        </nav>
      </aside>
      <main className="overflow-hidden flex-1 p-4 bg-gradient-to-br from-black to-red-900 relative">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        
          {profileData && (
          <div className="imageside">
            <img
              src={profileData.avatar_url}
              className="h-40 w-40 rounded-full"
              alt="Avatar"
            />
            <div className="p-10">
              {" "}
              <h2> {profileData.name}</h2>
              <p>{profileData.bio}</p>
            </div>
          </div>
        )}
    <div className="flex">  
       <div className="w-full"> 
        <div className="flex items-start justify-center flex-col p-4">
          <h2>Links</h2>
          <a href="#" className="text-blue visited:text-white no-underline">
            tanishtirpathi.netlify.app
          </a>
          <a href="#" className="text-blue visited:text-white no-underline">
            tanishtirpathi.netlify.app
          </a>

        </div>
        {profileData && (  <div className="flex ">
          <h3 className="pl-3 text-xl">follower: {profileData.followers}</h3>
          <h3 className="pl-10 text-xl" >following: {profileData.following}</h3>
        </div>)}
        <div className="flex flex-col p-2 max-w-md ">
      
      <div className="relative  m-3">
        <label 
          className="absolute -top-2 left-2 px-1 text-xs font-medium bg-black text-blue-500" 
          htmlFor="bio"
        >
          bio
        </label>
        <textarea
          id="bio"
          className="w-full p-3 border-2 border-blue-500 rounded focus:outline-none focus:ring-1 focus:ring-white-500"
          value={bio}
          placeholder="write your bio here"
          onChange={(e) => setBio(e.target.value)}
          rows={2}
        />
      </div>

      {/* Dark Border Text Box */}
      <div className="relative  m-3">
        <label 
          className="absolute -top-2 left-2 px-1 text-xs font-medium bg-black text-blue-500 " 
          htmlFor="description"
        >
          description
        </label>
        <textarea
          id="description" placeholder="discrbe yourself  here"
          className="w-full p-3 border-2 border-blue-500 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />
      </div>
      <div className="relative w-full m-3">
        <label 
          className="absolute -top-2 left-2 px-1 text-xs font-medium bg-black text-blue-500 " 
          htmlFor="description"
        >
          Posts
        </label>
        <textarea
          id="description" placeholder="your posted posts"
          className="w-full p-3 border-2 border-blue-500 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
        />
      </div>
    </div>
     </div><img src="./image11.png" className=" ml-30 h-130" alt="" /></div>
      </main>
    </div>   

        
  );
}

export default Profile;
