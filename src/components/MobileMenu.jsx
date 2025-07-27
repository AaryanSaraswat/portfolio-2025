import { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on route change (if using React Router)
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <div className="md:hidden" ref={menuRef}>
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <FiX className="h-6 w-6" />
        ) : (
          <FiMenu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      <div className={`
        absolute w-[92vw] top-[48px] left-0 m-6 mt-4 transition-all duration-300 ease-in-out bg-gray-800/30 backdrop-blur-lg rounded-xl border border-gray-700/50
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        <div className="flex justify-center flex-col items-center gap-2 p-4">
        {['/', '/about', '/skills', '/projects', '/contact'].map((path, i) => (
            <Link 
              key={i}
              to={path === '/' ? '/' : path}
              className="relative group"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              <span className="text-white group-hover:text-purple-300 transition-colors select-none ">
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;