import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiServer, FiCpu, FiDatabase, FiCloud } from 'react-icons/fi';

const projects = [
  {
    title: "Image Processing",
    description: "A robust backend service for image transformations such as resizing, formatting, and optimized processing. It supports webhooks and CSV uploads for batch processing. The system uses a queue to manage background image processing tasks, with workers listening to the queue to process tasks asynchronously. The system is hosted on Google Cloud Platform (GCP), leveraging Google Cloud Storage for secure image storage and processing tasks managed via GCP services.",
    technologies: ["Node.js", "Express", "Google Cloud Storage", "Redis", "MongoDB", "BullMQ", "Google Cloud Pub/Sub", "Worker", "Async Task Processing"],
    achievements: [
      "Implemented a queue system using BullMQ for background image processing tasks, improving scalability and task management.",
      "Set up worker processes that listen to the queue and process image transformation tasks asynchronously, ensuring high performance for batch processing.",
      "Optimized API responses by leveraging Redis for caching image transformation results, reducing processing time.",
      "Utilized Google Cloud Storage (GCS) for secure image storage and retrieval, ensuring reliable and scalable cloud-based storage.",
      "Implemented a robust webhook system to send updates on image processing status.",
      "Designed an error-handling and retry mechanism for failed webhooks and tasks in the queue.",
    ],
    category: "backend",
    links: {
      github: "https://github.com/rohit9123/image-processing",
      demo: "https://image-processing-frontend-gules.vercel.app/"
    }
  },  
  {
    "title": "QuickCut URL Shortener",
    "description": "A highly scalable and fault-tolerant URL shortener system designed for performance and reliability. Features distributed unique ID generation using multiple Zookeeper nodes with offset-based ID ranges, a Redis-backed token bucket rate limiter for abuse prevention, and caching for ultra-fast redirection. The backend is built using Express.js with Dockerized infrastructure for Redis and Zookeeper, making it ready for production-grade deployments.",
    "technologies": [
      "Node.js", 
      "Express", 
      "Redis", 
      "Zookeeper", 
      "MongoDB Atlas", 
      "Docker", 
      "Tailwind CSS", 
      "React"
    ],
    "achievements": [
      "Implemented distributed unique ID generation using 3 Zookeeper nodes with offset-based ID ranges and fallback logic for seamless ID assignment across nodes.",
      "Built a Redis-powered token bucket rate limiter as middleware to protect the system from abuse and excessive API usage.",
      "Optimized redirection speed using Redis caching and minimized database hits for high-throughput URL resolutions.",
      "Structured backend with dedicated services for Redis, Zookeeper, and rate limiter for better modularity and maintainability.",
      "Containerized the entire backend stack using Docker Compose (v3.9) with proper volumes, healthchecks, and `depends_on` directives for Redis and Zookeeper.",
      "Stored short code to long URL mappings in MongoDB Atlas, ensuring persistent, scalable key-pair storage.",
      "Enabled production-safe setup of multiple Zookeeper nodes to ensure high availability in ID generation.",
    ],
    "category": "backend",
    "links": {
      "github": "https://github.com/rohit9123/quickcut",
      "demo": "https://url-shortner-frontend-green.vercel.app/"
    }
  },
  {
    "title": "Globetrotter",
    "description": "A dynamic, multiplayer geography-based trivia game that challenges players on their global knowledge. The backend supports features such as player authentication, real-time leaderboard updates, and game progress saving, allowing players to compete in real-time, track their performance, and resume games from where they left off. Built with a robust backend architecture using Node.js and MongoDB, the system offers a seamless experience while ensuring game state persistence even when the player exits unexpectedly.",
    "technologies": ["Node.js", "Express", "MongoDB", "JWT", "Redis", "React", "AWS", "Google Cloud Storage", "RESTful API", "Leaderboard", "Authentication", "Authorization"],
    "achievements": [
      "Implemented JWT-based authentication and authorization for secure player login and session management.",
      "Designed a real-time leaderboard to showcase top players based on their performance in geography trivia.",
      "Developed game progress persistence allowing players to save their progress and resume the game later even if they exit unexpectedly.",
      "Optimized game data storage and retrieval using MongoDB, providing fast access to user scores, game history, and session data.",
      "Implemented a flexible game configuration system that allows admins to set game parameters like the number of questions and time limits.",
      "Developed a comprehensive API for player actions, game updates, and leaderboard management."
    ],
    "category": "backend",
    "links": {
      "github": "https://github.com/rohit9123/globetrotter",
      "demo": "https://globetrotter-frontend-puce.vercel.app/"
    }
  },
  {
    "title": "WeatherNow - Live Weather App",
    "description": "A sleek and responsive web application that provides real-time weather updates using OpenWeatherMap API. The app displays current temperature, humidity, weather conditions, and other meteorological data with a modern UI built using Tailwind CSS. Users can search for any city and view weather instantly with animated icons and a clean UX.",
    "technologies": [
      "React.js", 
      "Tailwind CSS", 
      "OpenWeatherMap API", 
      "JavaScript"
    ],
    "achievements": [
      "Integrated OpenWeatherMap API to fetch real-time weather data dynamically based on user input.",
      "Implemented city-based search functionality with error handling for invalid or unavailable cities.",
      "Crafted a responsive and visually appealing UI using Tailwind CSS for clean layout and ease of access.",
      "Displayed comprehensive weather details including temperature, humidity, wind speed, and live condition icons.",
      "Added loading states and graceful UI fallbacks for improved user experience.",
      "Optimized API requests and structured state management for a smooth, reactive interface.",
      "Achieved 100% test coverage with unit and component-level testing to ensure application reliability and robustness."
    ],
    "category": "frontend",
    "links": {
      "github": "https://github.com/rohit9123/weather-app",
      "demo": "https://weather-app-beige-theta-60.vercel.app/"
    }
  }
  
  
];

const ProjectCard = ({ project, index }) => {
  const categoryIcons = {
    backend: <FiServer className="text-purple-400" />,
    data: <FiDatabase className="text-purple-400" />,
    architecture: <FiCpu className="text-purple-400" />,
    frontend: <FiCloud className="text-purple-400" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col"
    >
      <div className="p-8 flex-grow">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-800/30">
            {categoryIcons[project.category]}
          </div>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        </div>
        
        <p className="text-gray-300 mb-6">{project.description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-purple-300 mb-3">KEY ACHIEVEMENTS</h4>
          <ul className="space-y-2 text-gray-300">
            {project.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-purple-300 mb-3">TECHNOLOGY STACK</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-200 border border-gray-600/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 border-t border-gray-700/50 bg-gray-800/20 flex justify-end gap-4">
        {project.links.github && (
          <a 
            href={project.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-purple-300 hover:text-white hover:bg-purple-900/30 transition-all"
          >
            <FiGithub /> Code
          </a>
        )}
        {project.links.demo && (
          <a 
            href={project.links.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white bg-purple-600/90 hover:bg-purple-500 transition-all"
          >
            <FiExternalLink /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section 
      id="projects"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl sm:leading-[66px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400 mb-4">
            Engineering Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Production-grade systems with measurable business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
