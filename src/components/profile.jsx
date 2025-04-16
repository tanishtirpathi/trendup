import React, { useState, useEffect } from "react";
import { Home, Layers, Crown, User, Code } from "lucide-react";
("use client");
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import "./style.css";
import RightBar from "./rightBar";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [bio, setBio] = useState(
    "A passionate coder from india 💯 coder work hard never stop"
  );
  const [description, setDescription] = useState("");
  const [Post, setPost] = useState("18");
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();

    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };
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
          
          <RightBar>
  {/* children here if needed */}
</RightBar>
     
      <main className="flex-1 p-6 overflow-y-auto bg-gradient-to-br from-black via-gray-900 to-gray-950">
        {loading && <p className="text-center text-gray-300">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {profileData && (
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md w-full max-w-sm">
              <img
                src="./logo-tr.png"
                alt="Avatar"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h2 className="text-center text-2xl font-bold mb-2">
                {profileData.name}
              </h2>
              <p className="text-center text-gray-300 mb-2">
                {profileData.bio}
              </p>
              <div className="flex justify-around text-sm text-gray-400">
                <span>Followers: {profileData.followers}</span>
                <span>Following: {profileData.following}</span>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="space-y-6">
                <div className="bg-white/10 p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                    Links
                  </h3>
                  <a
                    href="https://tanishtirpathi.netlify.app/"
                    className="block text-blue-400 hover:underline"
                  >
                    tanishtirpathi.netlify.app
                  </a>
                  <a
                    href="https://tanishtirpathi.netlify.app/"
                    className="block text-blue-400 hover:underline"
                  >
                    tanishtirpathi.netlify.app
                  </a>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <label
                      htmlFor="bio"
                      className="block text-sm text-cyan-300 mb-1"
                    >
                      Bio
                    </label>
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
                    <label
                      htmlFor="description"
                      className="block text-sm text-cyan-300 mb-1"
                    >
                      Description
                    </label>
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
                    <label
                      htmlFor="posts"
                      className="block text-sm text-cyan-300 mb-1"
                    >
                      Posts
                    </label>
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
        <div className="fixed top-10 right-10">
          {" "}
          <Button className="px-13  text-white bg-black " onClick={handleClick}>
            log out
          </Button>{" "}
        </div>{" "}
      </main>
    </div>
  );
}

export default Profile;
