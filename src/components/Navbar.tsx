import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  ArrowRight, 
  LayoutDashboard, 
  Folder, 
  Bot, 
  Users, 
  BarChart3, 
  Settings,
  Search,
  Bell,
  HelpCircle
} from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { assets } from "../assets/assets";

const Navbar: React.FC = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const [isAppsOpen, setIsAppsOpen] = useState(false);

  const apps = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/ai/dashboard" },
    { name: "Projects", icon: Folder, path: "/ai/projects" },
    { name: "AI Copilots", icon: Bot, path: "/ai/copilots" },
    { name: "Community", icon: Users, path: "/ai/community" },
    { name: "Analytics", icon: BarChart3, path: "/ai/analytics" },
    { name: "Settings", icon: Settings, path: "/ai/settings" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-glass border-b border-border bg-background/70">
      <div className="flex justify-between items-center px-6 sm:px-20 xl:px-32 py-3">
        <NavLink to="/" className="flex items-center gap-2 w-32 sm:w-40">
          <img src={assets.logo} alt="VibeXCraft Logo" className="h-8 w-auto" />
        </NavLink>

        {user ? (
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-accent/50 rounded-full px-3 py-1.5">
              <Search className="w-4 h-4 text-foreground/50 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-sm w-40 sm:w-64"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-accent/50 transition-colors">
                <Bell className="w-5 h-5 text-foreground/80 hover:text-foreground" />
              </button>
              <button className="p-2 rounded-full hover:bg-accent/50 transition-colors">
                <HelpCircle className="w-5 h-5 text-foreground/80 hover:text-foreground" />
              </button>
              
              {/* 9-dot menu button */}
              <div className="relative">
                <button
                  onClick={() => setIsAppsOpen(!isAppsOpen)}
                  className="p-2 rounded-full hover:bg-accent/50 transition-colors"
                  aria-label="Apps"
                >
                  <div className="grid grid-cols-3 gap-0.5 w-5 h-5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-foreground/70 rounded-full" />
                    ))}
                  </div>
                </button>

                {/* Apps dropdown */}
                {isAppsOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-popover rounded-lg shadow-xl border border-border z-50">
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-foreground/70 mb-3 px-1">Apps</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {apps.map((app, index) => (
                          <NavLink
                            key={index}
                            to={app.path}
                            className="flex flex-col items-center p-3 rounded-lg hover:bg-accent/50 transition-colors"
                            onClick={() => setIsAppsOpen(false)}
                          >
                            <app.icon className="w-5 h-5 mb-1.5 text-foreground/80" />
                            <span className="text-xs text-center">{app.name}</span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        ) : (
          <button
            onClick={() => openSignIn()}
            className="flex items-center gap-2 px-6 py-2.5 text-sm rounded-full font-medium bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 shadow-glow-cyan"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Close dropdown when clicking outside */}
      {isAppsOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsAppsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;