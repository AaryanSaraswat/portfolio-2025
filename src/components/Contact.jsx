import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import { SiLeetcode } from "react-icons/si";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      toast.success('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      toast.error('Failed to send message. Please try again.');
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section 
      id="contact"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      <Toaster position="top-center" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Let's discuss how I can contribute to your next engineering challenge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-800/30 mt-1">
                  <FiMail className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-purple-300 mb-1">Email</h4>
                  <a 
                    href="mailto:aaryansaraswat11@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    aaryansaraswat11@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-800/30 mt-1">
                  <FiMapPin className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-purple-300 mb-1">Location</h4>
                  <p className="text-gray-300">New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-800/30 mt-1">
                  <FiPhone className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-purple-300 mb-1">Phone</h4>
                  <a 
                    href="tel:+91-9123186232" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 9123186232
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-sm font-medium text-purple-300 mb-4">CONNECT WITH ME</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/rohit-kumpan/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700/50 rounded-lg border border-gray-600/30 hover:bg-purple-900/30 hover:border-purple-500/30 transition-all"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="text-gray-300 hover:text-white" />
                </a>
                <a 
                  href="https://github.com/rohit9123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700/50 rounded-lg border border-gray-600/30 hover:bg-purple-900/30 hover:border-purple-500/30 transition-all"
                  aria-label="GitHub"
                >
                  <FiGithub className="text-gray-300 hover:text-white" />
                </a>
                <a 
                  href="https://leetcode.com/rohitkumpan01/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700/50 rounded-lg border border-gray-600/30 hover:bg-purple-900/30 hover:border-purple-500/30 transition-all"
                  aria-label="Twitter"
                >
                  <SiLeetcode className="text-gray-300 hover:text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Send Me a Message</h3>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-purple-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                  placeholder="Describe your project or inquiry..."
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSending}
                className={`w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;