import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.header
        className="bg-white border-b border-gray-100 relative z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "Outfit, sans-serif" }}>
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center">
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 overflow-hidden"
                  style={{ borderRadius: "1px" }}
                >
                  <ImageWithFallback
                    src="https://i.postimg.cc/dtwYq2Kw/image-89.png"
                    alt="Dreamxworld Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="ml-2 sm:ml-3 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900" style={{ fontFamily: "Outfit, sans-serif" }}>
                  Dreamxworld
                </span>
              </div>
            </motion.div>

            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              <motion.a
                href="#"
                className="text-sm xl:text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                style={{ fontFamily: "Outfit, sans-serif" }}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
              >
                Mentorship
              </motion.a>
              <motion.a
                href="#"
                className="text-sm xl:text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                style={{ fontFamily: "Outfit, sans-serif" }}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
              >
                Platform
              </motion.a>
              <motion.a
                href="#"
                className="text-sm xl:text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                style={{ fontFamily: "Outfit, sans-serif" }}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
              >
                Support
              </motion.a>
            </nav>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:block"
              >
                <Button
                  className="bg-black text-white hover:bg-gray-800 px-5 sm:px-6 lg:px-7 py-2.5 font-medium transition-all duration-200 text-sm xl:text-base cursor-pointer"
                  style={{ borderRadius: "1px", fontFamily: "Outfit, sans-serif" }}
                >
                  Get the app
                </Button>
              </motion.div>

              <motion.button
                className="lg:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-sm transition-colors duration-200"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ borderRadius: "1px" }}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 left-0 w-full bg-white shadow-xl"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.3,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={toggleMenu}
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-6">
                  <a
                    href="#"
                    className="block text-lg text-gray-700 hover:text-gray-900 transition-colors"
                    onClick={toggleMenu}
                  >
                    Mentorship
                  </a>
                  <a
                    href="#"
                    className="block text-lg text-gray-700 hover:text-gray-900 transition-colors"
                    onClick={toggleMenu}
                  >
                    Platform
                  </a>
                  <a
                    href="https://dreamxworld.com/"
                    className="block text-lg text-gray-700 hover:text-gray-900 transition-colors"
                    onClick={toggleMenu}
                  >
                    Support
                  </a>
                </nav>

                {/* Get App Button */}
                <div className="mt-8">
                  <Button
                    className="w-full bg-black text-white hover:bg-gray-800 py-3 transition-all duration-200"
                    style={{ borderRadius: "1px" }}
                    onClick={toggleMenu}
                  >
                    Get the app
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
