import { motion } from 'framer-motion';
import { FiAward, FiCode, FiCloud, FiCpu, FiDatabase, FiMonitor } from 'react-icons/fi';

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl sm:leading-[66px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400 mb-4">
            Engineering Philosophy
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Shipping scalable systems, one async task at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <FiDatabase className="text-purple-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">Backend Engineering</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Building resilient, testable APIs using <span className="text-purple-300 font-medium">Node.js, Express</span> and 
                <span className="text-purple-300 font-medium"> Springboot</span>, with clean architecture and 
                <span className="text-purple-300 font-medium"> middleware-first design</span>. Skilled in 
                <span className="text-purple-300 font-medium"> asynchronous task orchestration, </span>
                <span className="text-purple-300 font-medium">rate limiting</span>, and 
                <span className="text-purple-300 font-medium"> input validation pipelines</span>. Leveraging 
                <span className="text-purple-300 font-medium"> Redis</span> for caching & queues, 
                <span className="text-purple-300 font-medium"> MongoDB</span> for flexible schema design, and 
                <span className="text-purple-300 font-medium"> Docker</span> for containerized microservices. 
                Focused on <span className="text-purple-300 font-medium">API versioning</span>, 
                <span className="text-purple-300 font-medium"> graceful degradation</span>, 
                and <span className="text-purple-300 font-medium"> structured observability</span>.
              </p>
            </div>



            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <FiCloud className="text-purple-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">Distributed Systems</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Architected horizontally scalable systems using <span className="text-purple-300 font-medium">replicated Redis clusters</span>, 
                <span className="text-purple-300 font-medium"> distributed task queues</span>, and 
                <span className="text-purple-300 font-medium"> message-driven pipelines</span>. Integrated 
                <span className="text-purple-300 font-medium"> ZooKeeper</span> for coordination and offset-based 
                <span className="text-purple-300 font-medium">unique ID generation</span> across services. 
                Proficient in <span className="text-purple-300 font-medium">stream processing</span> architectures and designing 
                <span className="text-purple-300 font-medium"> eventual consistency</span> patterns. Ensured high availability through 
                <span className="text-purple-300 font-medium"> multi-node orchestration</span>, 
                <span className="text-purple-300 font-medium"> health checks</span>, and intelligent 
                <span className="text-purple-300 font-medium"> failover strategies</span>.
              </p>
            </div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <FiCpu className="text-purple-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">Frontend Engineering</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Crafting highly performant and interactive UIs using modern frameworks like <span className="text-purple-300 font-medium">React</span> and 
                <span className="text-purple-300 font-medium"> Tailwind CSS</span>. Specialized in implementing <span className="text-purple-300 font-medium">debouncing</span> and 
                <span className="text-purple-300 font-medium"> throttling</span> strategies to optimize API calls, and leveraging <span className="text-purple-300 font-medium">lazy loading</span>, 
                <span className="text-purple-300 font-medium">code-splitting</span>, and <span className="text-purple-300 font-medium">SSR (Server-Side Rendering)</span> to boost performance. 
                Focused on accessibility, micro-interactions, and building component-driven design systems for scalability.
              </p>
            </div>


            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <FiAward className="text-purple-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">Achievements</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Ranked among Top 300 coders in India</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>2000+ DSA problems solved across LeetCode, Codeforces, and HackerRank</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>LeetCode Guardian – consistently maintaining high-quality problem solving</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
