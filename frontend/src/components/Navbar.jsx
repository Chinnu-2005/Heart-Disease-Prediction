import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <motion.div 
          className="navbar-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="heart-icon"
          >
            ❤️
          </motion.div>
          <div>
            <h1>Heart Disease Predictor</h1>
            <p>AI-Powered Health Analysis</p>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;