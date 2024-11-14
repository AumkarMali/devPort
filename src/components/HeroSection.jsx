import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      id="start"
      className="flex flex-col items-center mt-6 lg:mt-20"
    >
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <TypeAnimation
          sequence={[
            'Developer Portfolio',
            1000,
          ]}
          wrapper="span"
          speed={20}
          style={{ fontSize: '1em' }}
          repeat={false}
        />
        <span className="bg-gradient-to-r from-red-500 to-red-900 text-transparent bg-clip-text">
          {" "}Aumkar Mali
        </span>
      </motion.h1>
      
      <motion.div
        className="flex justify-center my-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <a
          href="https://github.com/AumkarMali"
          className="bg-gradient-to-r from-blue-500 to-black-800 py-3 px-5 mx-3 rounded-md transition-opacity duration-300 hover:opacity-50"
        >
          <span className="typing-animation">GitHub</span>
        </a>
        
        <a
          href="https://www.youtube.com/@AumkarMali"
          className="bg-gradient-to-r from-red-500 to-black-800 py-3 px-4 mx-3 rounded-md transition-opacity duration-300 hover:opacity-50"
        >
          <span className="typing-animation">YouTube</span>
        </a>
        
        <a
          href="https://www.linkedin.com/in/aumkar-mali-3a1130327/"
          className="bg-gradient-to-r from-orange-500 to-black-800 py-3 px-4 mx-3 rounded-md flex items-center justify-center text-white transition-opacity duration-300 hover:opacity-50"
        >
          <span className="typing-animation">LinkedIn</span>
        </a>
      </motion.div>

      <motion.div
        className="flex mt-10 justify-center relative w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Video container with hover effects */}
        <div className="relative w-[45%] mx-2 group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-lg blur-2xl transform scale-110 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <video
            autoPlay
            loop
            muted
            className="rounded-lg border border-orange-700 w-full relative z-10 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/50"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="relative w-[45%] mx-2 group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-lg blur-2xl transform scale-110 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <video
            autoPlay
            loop
            muted
            className="rounded-lg border border-orange-700 w-full relative z-10 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/50"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>

      {/* Empty section for spacing */}
      <div className="h-32" />
    </motion.div>
  );
};

export default HeroSection;