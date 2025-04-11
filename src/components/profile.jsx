import React, { useState, useEffect } from 'react';
import './style.css';

function Profile() {
  // State hooks to manage loading, error, and data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileData, setProfileData] = useState(null);

  // Function to fetch GitHub user data
  const fetchGitHubData = async () => {
    try {
      const url = 'https://api.github.com/users/tanishtirpathi';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('User not found');
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
    <div className="min-h-screen w-screen flex text-white bg-red font-sans">
      <aside className="w-60 bg-gradient-to-b from-zinc-900 to-red-900 p-4 border border-gray-200">
        <div className="bg-gray-300 w-14 h-8 mb-6" />
        <nav className="flex flex-col gap-7 text-sm">
          <a href="#" className="text-xl text-white visited:text-white no-underline">Components</a>
          <a href="#" className="text-xl text-white visited:text-white no-underline">Home</a>
          <a href="#" className="text-xl text-white visited:text-white no-underline">Tasks</a>
          <a href="#" className="text-xl text-white visited:text-white no-underline">Settings</a>
          <a href="#" className="text-xl text-white visited:text-white no-underline">Profile</a>
        </nav>
      </aside>
      <main className="flex-1 p-4 bg-gradient-to-br from-black to-red-900 relative">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {profileData && (
          <div>
            <img src={profileData.avatar_url} className="h-40 w-40 rounded-full" alt="Avatar" />
            <h2>{profileData.name}</h2>
            <p>{profileData.bio}</p>
            {/* Add more profile details as needed */}
          </div>
        )}
      </main>
    </div>
  );
}

export default Profile;
