import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";

const SideForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Button - Now Movable */}
      <motion.div
        drag
        dragElastic={0.6}
        dragConstraints={{
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: window.innerHeight,
        }}
        className="fixed right-3 bottom-5 z-50 cursor-pointer"
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          repeatDelay: 5,
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <motion.button
          onClick={toggleForm}
          whileTap={{ scale: 0.9 }}
          className="w-20 h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-all"
        >
          {isOpen ? (
            <IoClose size={22} />
          ) : (
            <IoChatbubbleEllipsesOutline size={22} />
          )}
        </motion.button>
      </motion.div>

      {/* Slide-In Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="side-form"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed right-0 mt-17 bottom-0 top-0 w-full max-w-xs bg-white shadow-2xl z-40 p-4 border-l border-gray-200"
          >
            <h2 className="text-lg font-semibold mb-3 text-gray-800">
              Quick Contact
            </h2>
            <form className="space-y-3 text-sm">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  rows="2"
                  placeholder="Type here..."
                  className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-1.5 rounded-md hover:bg-indigo-700 transition text-sm"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideForm;
