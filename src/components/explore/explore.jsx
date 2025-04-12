import { useState, useEffect } from 'react';
import { Home, Layers, Settings, User, BarChart, Heart, MessageCircle, Share2, Bookmark, X, Search, Filter, ChevronLeft, ChevronRight, Camera, TrendingUp, Zap } from "lucide-react";
import RandomImage from '../../pages/RandomImages';

export default function ExplorePage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [gridItems, setGridItems] = useState([
    { size: 'row-span-2 col-span-1', text: 'Video 1', likes: 1243,  comments: 87, isLiked: false, isBookmarked: false },
    { size: 'row-span-1 col-span-1', text: 'Tony Stark', likes: 5678, comments: 132, isLiked: false, isBookmarked: false },
    { size: 'row-span-2 col-span-1', text: 'Construction', likes: 342, comments: 24, isLiked: false, isBookmarked: false },
    { size: 'row-span-1 col-span-1', text: 'Retro Tech', likes: 876, comments: 53, isLiked: false, isBookmarked: false },
    { size: 'row-span-1 col-span-1', text: 'Network', likes: 432,  comments: 19, isLiked: false, isBookmarked: false },
    { size: 'row-span-1 col-span-1', text: 'Gaming', likes: 2145, comments: 97, isLiked: false, isBookmarked: false },
    { size: 'row-span-1 col-span-1', text: 'Video 2', likes: 765,  comments: 42, isLiked: false, isBookmarked: false },
    { size: 'row-span-1 col-span-1', text: 'Video 3', likes: 543, comments: 31, isLiked: false, isBookmarked: false },
    { size: 'row-span-1 col-span-1', text: 'Day 44', likes: 321, comments: 15, isLiked: false, isBookmarked: false },
  ]);


  useEffect(() => {
    // Add CSS animation definitions
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes scaleIn {
        from { transform: scale(0.95); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      
      @keyframes heartBeat {
        0% { transform: scale(1); }
        14% { transform: scale(1.3); }
        28% { transform: scale(1); }
        42% { transform: scale(1.3); }
        70% { transform: scale(1); }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out forwards;
      }
      
      .animate-scaleIn {
        animation: scaleIn 0.3s ease-out forwards;
      }
      
      .animate-heartBeat {
        animation: heartBeat 1s ease-in-out;
      }
      
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function for body overflow and styles
    return () => {
      document.body.style.overflow = 'auto';
      document.head.removeChild(style);
    };
  }, []);
  
  const handleImageClick = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  const loadMoreContent = () => {
    setIsLoading(true);
    
    // Simulate loading more content with proper state properties
    setTimeout(() => {
      const newItems = [
        { size: 'row-span-1 col-span-1', text: 'Mountain View', likes: 932, comments: 64, isLiked: false, isBookmarked: false },
        { size: 'row-span-2 col-span-1', text: 'Beach Sunset', likes: 1532,comments: 89, isLiked: false, isBookmarked: false },
        { size: 'row-span-1 col-span-1', text: 'Video 4', likes: 654, comments: 37, isLiked: false, isBookmarked: false },
        { size: 'row-span-1 col-span-2', text: 'Tokyo Nights', likes: 2134, comments: 128, isLiked: false, isBookmarked: false },
        { size: 'row-span-1 col-span-1', text: 'Coffee Art', likes: 875,comments: 52, isLiked: false, isBookmarked: false },
      ];
      
      setGridItems([...gridItems, ...newItems]);
      setIsLoading(false);
      
      // Show notification
      showNotificationMessage("New content loaded!");
    }, 800);
  };

  const toggleLike = (index) => {
    const updatedItems = [...gridItems];
    if (updatedItems[index].isLiked) {
      updatedItems[index].likes -= 1;
      updatedItems[index].isLiked = false;
      showNotificationMessage("Removed from likes");
    } else {
      updatedItems[index].likes += 1;
      updatedItems[index].isLiked = true;
      showNotificationMessage("Added to likes");
    }
    setGridItems(updatedItems);
  };

  const toggleBookmark = (index) => {
    const updatedItems = [...gridItems];
    updatedItems[index].isBookmarked = !updatedItems[index].isBookmarked;
    setGridItems(updatedItems);
    
    showNotificationMessage(updatedItems[index].isBookmarked 
      ? "Saved to collection" 
      : "Removed from collection");
  };

  const showNotificationMessage = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const shareContent = () => {
    navigator.clipboard.writeText(`https://tanishtirpathi.netlify.app/`)
      .then(() => {
        showNotificationMessage("Link copied to clipboard!");
      })
      .catch(() => {
        showNotificationMessage("Failed to copy link");
      });
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-black text-white w-screen">
      {/* Left Sidebar */}
      <aside className="h-screen bg-gradient-to-b from-black via-blue-950 to-black p-6 border-r border-blue-900 shadow-xl fixed top-0 left-0 w-48">
        <div className="mb-10 flex items-center gap-3">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
            <Camera size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-wide">Trend up</span>
        </div>
        <nav className="flex flex-col gap-6 text-base">
          {[
            { icon: <Home size={18} />, label: "Home" },
            { icon: <Layers size={18} />, label: "Explore" },
            { icon: <TrendingUp size={18} />, label: "Trending" },
            { icon: <User size={18} />, label: "Profile" },
            { icon: <Settings size={18} />, label: "Settings" },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center gap-3 text-white no-underline hover:text-blue-400 transition-all duration-200 p-2 rounded-lg ${
                item.label === "Explore" ? "bg-blue-900 bg-opacity-40 text-blue-400" : ""
              }`}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="bg-blue-900 bg-opacity-30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={16} className="text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Pro Tips</span>
            </div>
            <p className="text-xs text-gray-300">Discover trending content by exploring different categories!</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-48 flex-grow overflow-auto p-6">
        <div className="mb-6 sticky top-0 z-10 backdrop-blur-md bg-transparent bg-opacity-70 p-4 rounded-xl">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Explore Page </h2>  </div>
        
    
        </div>
        
        {/* Loading Indicator with improved animation */}
        {isLoading && (
          <div className="flex justify-center items-center py-8">
            <div className="relative w-12 h-12">
              <div className="absolute top-0 left-0 right-0 bottom-0 animate-ping rounded-full bg-blue-500 opacity-75"></div>
              <div className="absolute top-1.5 left-1.5 right-1.5 bottom-1.5 animate-spin rounded-full border-4 border-transparent border-t-blue-500"></div>
            </div>
          </div>
        )}
        
        {/* Image Grid with enhanced hover effects and animations */}
        <div className="grid grid-cols-3 gap-3 auto-rows-min">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className={`${item.size} relative rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group animate-fadeIn`}
              style={{ minHeight: '16rem', animationDelay: `${index * 0.05}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity z-10"></div>
              
              <RandomImage onClick={() => handleImageClick(index)} text={item.text} />
              
              {/* Media Type Indicator with animation */}
              <div className="absolute top-3 right-3 bg-black bg-opacity-70 rounded-full p-1.5 z-20 transform group-hover:scale-110 transition-transform">
                <Layers size={14} className="text-white" />
              </div>
              
              {/* Badge */}
              <div className="absolute top-3 left-3 bg-blue-600 bg-opacity-80 rounded-full px-2 py-1 z-20 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {item.category}
              </div>
              
              {/* Hover Overlay with Actions */}
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(index);
                      }}
                      className={`rounded-full p-1.5 bg-black bg-opacity-70 hover:bg-opacity-90 transition-colors hover:scale-110 transform duration-200 ${item.isLiked ? 'text-red-500' : 'text-white'}`}
                    >
                      <Heart size={16} fill={item.isLiked ? "currentColor" : "none"} />
                    </button>
                    <button className="rounded-full p-1.5 bg-black bg-opacity-70 hover:bg-opacity-90 transition-colors hover:scale-110 transform duration-200">
                      <MessageCircle size={16} />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        shareContent(index);
                      }}
                      className="rounded-full p-1.5 bg-black bg-opacity-70 hover:bg-opacity-90 transition-colors hover:scale-110 transform duration-200"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(index);
                    }}
                    className={`rounded-full p-1.5 bg-black bg-opacity-70 hover:bg-opacity-90 transition-colors hover:scale-110 transform duration-200 ${item.isBookmarked ? 'text-yellow-400' : 'text-white'}`}
                  >
                    <Bookmark size={16} fill={item.isBookmarked ? "currentColor" : "none"} />
                  </button>
                </div>
                <div className="mt-2 text-sm font-medium flex justify-between">
                  <span>{item.likes.toLocaleString()} likes</span>
                  <span>{item.comments} comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* No Results Message */}
        {filteredItems.length === 0 && !isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-medium mb-2">No results found</h3>
            <p className="text-gray-400">Try different search terms or categories</p>
          </div>
        )}
        
        {/* Load More Button with enhanced design */}
        {filteredItems.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button 
              onClick={loadMoreContent} 
              disabled={isLoading}
              className="group px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-70 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? 'Loading...' : 'Load More'}
                {!isLoading && (
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    <ChevronRight size={16} />
                  </span>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        )}
      </div>
      
      {/* Enhanced Modal for enlarged image with animations */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="relative w-4/5 h-4/5 max-w-5xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-white z-20 bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors hover:rotate-90 transform duration-300"
            >
              <X size={24} />
            </button>
            
            {/* Navigation arrows with animations */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage > 0 ? selectedImage - 1 : gridItems.length - 1);
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all hover:-translate-x-1 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage + 1) % gridItems.length);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all hover:translate-x-1 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="h-full w-full flex items-center justify-center">
              <RandomImage 
                dimensions="w-full h-full object-contain" 
                text={gridItems[selectedImage].text} 
              />
            </div>
            
            {/* Enhanced Modal Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold">@{gridItems[selectedImage].text.toLowerCase().replace(/\s+/g, '_')}</p>
                    <p className="text-sm text-gray-300">Exploring {gridItems[selectedImage].category} #trending</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={() => toggleLike(selectedImage)}
                    className={`flex items-center space-x-1 group ${gridItems[selectedImage].isLiked ? 'text-red-500' : 'text-white'}`}
                  >
                    <Heart 
                      size={20} 
                      fill={gridItems[selectedImage].isLiked ? "currentColor" : "none"} 
                      className="group-hover:animate-heartBeat"
                    />
                    <span>{gridItems[selectedImage].likes.toLocaleString()}</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <MessageCircle size={20} />
                    <span>{gridItems[selectedImage].comments}</span>
                  </button>
                  <button 
                    onClick={() => shareContent(selectedImage)}
                    className="flex items-center space-x-1"
                  >
                    <Share2 size={20} className="transform transition-transform group-hover:rotate-12" />
                  </button>
                  <button 
                    onClick={() => toggleBookmark(selectedImage)}
                    className={`flex items-center space-x-1 ${gridItems[selectedImage].isBookmarked ? 'text-yellow-400' : 'text-white'}`}
                  >
                    <Bookmark size={20} fill={gridItems[selectedImage].isBookmarked ? "currentColor" : "none"} />
                  </button>
                </div>
              </div>
              
              {/* Comments Section */}
              <div className="mt-4 border-t border-gray-800 pt-3">
                <div className="text-sm font-medium mb-2">Comments</div>
                <div className="max-h-24 overflow-y-auto">
                  <div className="flex items-start space-x-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-sm mr-2">@user123</span>
                      <span className="text-sm text-gray-300">Amazing shot! Love the composition.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 rounded-full bg-purple-600 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-sm mr-2">@photolover</span>
                      <span className="text-sm text-gray-300">This is absolutely stunning! 🔥</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Toast Notification */}
      <div 
        className={`fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 flex items-center gap-2 ${
          showNotification 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        {notificationMessage}
      </div>
    </div>
  );
}