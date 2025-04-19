import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Home, Layers, Crown, User, BellPlus, Code } from "lucide-react";
function RightBar() {
  return (
  
      <aside className=" h-screen bg-gradient-to-b from-black via-blue-950 to-black p-6 border-r border-blue-900 shadow-xl">
        <div className="mb-10 flex items-center gap-3">
          <img src="./logo-tr.png" className=" w-14 h-14 " />
          <span className="text-xl font-bold tracking-wide">Dashboard</span>
        </div>
        <nav className="flex-col justify-center items-center text-base">
          {[
            { icon: <Home size={18} />, label: "Home", path: "/main" },
            {
              icon: <Layers size={18} />,
              label: "Explore",
              path: "/explore",
            },
            { icon: <Code size={18} />, label: "Premium", path: "/premium" },

            { icon: <User size={18} />, label: "Profile", path: "/profile" },
            {
              icon: <Crown size={18} />,
              label: "about",
              path: "/about  ",
            },
          ].map((item, index) => (
            <a key={index} href={item.path} className="">
              {item.icon}
              {item.label}
            </a>
          ))}
          <Sheet>
            <SheetTrigger className="text-white hover:text-blue-400 flex items-center gap-2 bg-transparent  ">
              notification
            </SheetTrigger>

            <SheetContent className="w-full sm:w-[380px] bg-black-900 flex flex-col items-center overflow-auto py-8 px-6">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="w-full bg-gray-900 rounded-lg shadow-md p-4 flex items-center gap-3"
                >
                  <BellPlus className="text-white w-6 h-6" />
                  <div>
                    <h3 className="text-white text-xs font-light">Rahul :</h3>
                    <p className="text-gray-300 text-sm">posted a new video.</p>
                  </div>
                </div>
              ))}
            </SheetContent>
          </Sheet>
        </nav>
      </aside>
    
  );
}

export default RightBar;
