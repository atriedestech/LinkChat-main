import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom"; // Use NavLink for navigation items
import { useAuth } from "../hooks/useAuth";

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0a0a0a]/70 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Logo and Brand (using Link for non-nav items) */}
          <Link to="/" className="flex-shrink-0">
            <img src="/LinkChatLogo.jpeg" alt="LinkChat Logo" className="h-10 w-auto" />
          </Link>

          {/* Center: Navigation Links using NavLink */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                // This function dynamically applies classes
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/game"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${isActive
                    ? "bg-indigo-600/20 text-indigo-400 shadow-[0_0_15px_rgba(79,70,229,0.5)] border border-indigo-500/50"
                    : "text-gray-400 hover:bg-indigo-600/10 hover:text-indigo-300 border border-transparent hover:border-indigo-500/30"
                  }`
                }
              >
                🎮 Play Game
              </NavLink>
            </div>
          </div>

          {/* Right Side: Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-red-500/10 hover:text-red-400 transition-all duration-300"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition duration-150 ease-in-out"
              aria-label="Toggle menu"
            >
              <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 shadow-xl`}>
        <div className="px-4 pt-2 pb-3 space-y-2">
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isActive
                ? "bg-white/10 text-white shadow-sm"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/game"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-xl text-base font-bold transition-all duration-300 ${isActive
                ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/50"
                : "text-gray-400 hover:bg-indigo-600/10 hover:text-indigo-300"
              }`
            }
          >
            🎮 Play Game
          </NavLink>
        </div>
        <div className="pt-4 pb-4 border-t border-white/10 px-4">
          <div className="flex flex-col gap-3">
            {isAuthenticated ? (
              <button
                onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                className="w-full px-4 py-3 rounded-xl text-sm font-semibold text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500/20 transition-all duration-300 border border-red-500/20"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center px-4 py-3 rounded-xl text-sm font-semibold text-gray-300 bg-white/5 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/10"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center px-4 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/25 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
