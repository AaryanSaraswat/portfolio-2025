import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-6 w-full z-50 absolute top-0"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="select-none text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          My Portfolio
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {['/', '/about', '/skills', '/projects', '/contact'].map((path, i) => (
            <Link 
              key={i}
              to={path === '/' ? '/' : path}
              className="relative group"
            >
              <span className="text-white group-hover:text-purple-300 transition-colors select-none ">
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <MobileMenu />
      </div>
    </motion.nav>
  );
};

export default Navbar;