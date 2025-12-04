import { useState } from 'react';
import pfp from '../assets/pfp.png';
import bg from '../assets/bg.jpg';
import { BellIcon } from "@heroicons/react/24/outline";

export default function Navbar(){
  const [mode, setMode] = useState("Dashboard");
  
  return(
    <nav className="bg-neutral-primary fixed w-full z-20 top-0 border-b border-gray-200">
      <div className="bg-white w-full px-4 py-4 flex items-center justify-between relative">

        {/* LEFT: Logo */}
        <div className="flex items-center px-4">
          <a href="#" className="flex items-center space-x-3">
            <img src={bg} className="h-7 rounded" alt="Logo" />
            <span className="text-xl text-heading font-semibold">MeshFold</span>
          </a>
        </div>

        {/* CENTER: Dashboard/Settings Toggle */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="relative bg-gray-100 w-40 h-10 rounded flex items-center p-1">
            <div
              className={`absolute h-8 w-1/2 bg-white rounded transition-all duration-300 ${
                mode === "Dashboard" ? "left-1" : "left-[78px]"
              }`}
            ></div>

            <button
              onClick={() => setMode("Dashboard")}
              className={`z-10 w-1/2 text-sm font-bold transition-colors duration-300 ${
                mode === "Dashboard" ? "text-black" : "text-gray-500"
              }`}
            >
              Dashboard
            </button>

            <button
              onClick={() => setMode("Settings")}
              className={`z-10 w-1/2 p-2 text-sm font-bold transition-colors duration-300 ${
                mode === "Settings" ? "text-black" : "text-gray-500"
              }`}
            >
              Settings
            </button>
          </div>
        </div>

        {/* RIGHT: Bell + Profile */}
        <div className="flex items-center space-x-4 px-4">
          <button className="relative p-2 rounded">
            <BellIcon className="w-6 h-6 text-gray-700" />
          </button>

          <button className="flex items-center">
            <img className="w-8 h-8 rounded-full" src={pfp} alt="user" />
          </button>
        </div>

      </div>
    </nav>
  );
}
