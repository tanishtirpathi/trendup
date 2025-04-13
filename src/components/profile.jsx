import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Layers, Settings, User, BarChart } from "lucide-react";

import "./style.css";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [bio, setBio] = useState('A passionate coder from india 💯 coder work hard never stop');
  const [description, setDescription] = useState('');
  const [Post, setPost] = useState('18');

  const navigate = useNavigate();

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

  useEffect(() => {
    fetchGitHubData();
  }, []);

  return (
    <div className="min-h-screen w-screen flex bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white font-sans">
      <aside className="h-screen bg-gradient-to-b from-black via-blue-950 to-black p-6 border-r border-blue-900 shadow-xl">
        <div className="mb-10 flex items-center gap-3">
          <div className="bg-white w-10 h-10 rounded-full" />
          <span className="text-xl font-bold tracking-wide">Dashboard</span>
        </div>
        <nav className="flex flex-col gap-6 text-base">
          {[
            { icon: <Home size={18} />, label: "Home", path: "/home" },
            {
              icon: <Layers size={18} />,
              label: "Explore",
              path: "/explore",
            },
            { icon: <BarChart size={18} />, label: "notification", path: "/notification" },
            { icon: <User size={18} />, label: "Profile", path: "/profile" },
            {
              icon: <Settings size={18} />,
              label: "Settings",
              path: "/settings",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="flex items-center gap-3 text-white no-underline hover:text-blue-400 transition-all duration-200"
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto bg-gradient-to-br from-black via-gray-900 to-gray-950">
        {loading && <p className="text-center text-gray-300">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {profileData && (
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md w-full max-w-sm">
              <img src={profileData.avatar_url} alt="Avatar" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h2 className="text-center text-2xl font-bold mb-2">{profileData.name}</h2>
              <p className="text-center text-gray-300 mb-2">{profileData.bio}</p>
              <div className="flex justify-around text-sm text-gray-400">
                <span>Followers: {profileData.followers}</span>
                <span>Following: {profileData.following}</span>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="space-y-6">
                <div className="bg-white/10 p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">Links</h3>
                  <a href="#" className="block text-blue-400 hover:underline">tanishtirpathi.netlify.app</a>
                  <a href="#" className="block text-blue-400 hover:underline">tanishtirpathi.netlify.app</a>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <label htmlFor="bio" className="block text-sm text-cyan-300 mb-1">Bio</label>
                    <textarea
                      id="bio"
                      className="w-full p-3 rounded-lg bg-gray-800 border border-cyan-500 text-white focus:ring-2 focus:ring-cyan-500"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      rows={2}
                      placeholder="Write your bio here"
                    />
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <label htmlFor="description" className="block text-sm text-cyan-300 mb-1">Description</label>
                    <textarea
                      id="description"
                      className="w-full p-3 rounded-lg bg-gray-800 border border-cyan-500 text-white focus:ring-2 focus:ring-cyan-500"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      placeholder="Describe yourself here"
                    />
                  </div>

                  <div className="md:col-span-2 bg-white/10 p-4 rounded-xl">
                    <label htmlFor="posts" className="block text-sm text-cyan-300 mb-1">Posts</label>
                    <textarea
                      id="posts"
                      className="w-full p-3 rounded-lg bg-gray-800 border border-cyan-500 text-white focus:ring-2 focus:ring-cyan-500"
                      value={Post}
                      onChange={(e) => setPost(e.target.value)}
                      rows={3}
                      placeholder="Your posted posts"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
<button  
  onClick={() => navigate("/")} 
  className="pl-7 pr-7 pt-2 pb-2 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white fixed right-10 bottom-10"
>
  Log out
</button>
                       </main>
    </div>
  );
}

export default Profile;
