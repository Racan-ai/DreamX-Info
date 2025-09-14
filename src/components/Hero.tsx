import image_e3887c33dfd5b145b2bfa9f8627950976f86dd4c from "figma:asset/e3887c33dfd5b145b2bfa9f8627950976f86dd4c.png";
import image_52e042a2de315f7176112fa8a569274e12af85a2 from "figma:asset/52e042a2de315f7176112fa8a569274e12af85a2.png";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen  bg-[url('https://i.pinimg.com/1200x/e8/14/cb/e814cb3d5899657546a01ca263c7c8c9.jpg')] bg-cover bg-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-20 rounded-[12px]">
        {/* User testimonial section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[rgba(218,234,255,1)] text-xs sm:text-sm">
            <span className="font-semibold text-green-600">
              1K
            </span>{" "}
            Trusted by 600 users with a 4.5/5rating
          </p>
        </motion.div>

        {/* Main headline */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[rgba(255,255,255,1)] leading-tight mb-6 sm:mb-8 px-4">
            From{" "}
            <span
              className="bg-gradient-to-r from-lime-400 to-green-500 px-2 sm:px-3 py-1 text-white"
              style={{ borderRadius: "1px" }}
            >
              fashion ideas
            </span>{" "}
            to daily
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>essentials,
            build smarter!
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-gradient-to-r cursor-pointer from-emerald-600 to-green-700 text-white hover:from-emerald-700 hover:to-green-800 px-6 sm:px-8 py-3 font-medium w-full sm:w-auto"
                style={{ borderRadius: "1px" }}
              >
                Vist Site
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className="text-gray-700 cursor-pointer bg-white hover:text-white-900 px-6 sm:px-8 py-3 font-medium w-full sm:w-auto"
                style={{ borderRadius: "1px" }}
              >
                Download Pitch Deck
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Main content area with phone and feature cards */}
        <div className="relative">
          {/* Central phone mockup */}
          <motion.div
            className="flex items-center justify-center mb-8 px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative rounded-[12px]">
              <motion.div
                className="w-64 h-[480px] sm:w-72 sm:h-[540px] lg:w-80 lg:h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-2 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ borderRadius: "1px" }}
              >
                <div
                  className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden"
                  style={{ borderRadius: "1px" }}
                >
                  <ImageWithFallback
                    src={
                      image_e3887c33dfd5b145b2bfa9f8627950976f86dd4c
                    }
                    alt="Dreamxworld Fashion App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature cards - Responsive Layout */}

          {/* Desktop: Positioned around phone, Mobile: Stacked below */}
          <div className="lg:block hidden">
            {/* Top Left Card */}
            <motion.div
              className="absolute left-0 top-16 max-w-xs"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div
                className="bg-white p-6 border border-gray-200"
                style={{ borderRadius: "1px" }}
              >
                <div
                  className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 mb-4 flex items-center justify-center"
                  style={{ borderRadius: "1px" }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Problem & Solution
                </h3>
                <p className="text-gray-600 text-sm">
                  Marketplaces dominated by top brands block new
                  entrants. Our platform exclusively supports
                  emerging brands with complete ecosystem
                  support.
                </p>
              </div>
            </motion.div>

            {/* Top Right Card */}
            <motion.div
              className="absolute right-0 top-24 max-w-xs"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div
                className="bg-white p-6 border border-gray-200"
                style={{ borderRadius: "1px" }}
              >
                <div
                  className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 mb-4 flex items-center justify-center"
                  style={{ borderRadius: "1px" }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Platform Features
                </h3>
                <p className="text-gray-600 text-sm">
                  E-commerce platform for new brands with
                  mentoring, R&D services, and end-to-end
                  support to build sustainable businesses.
                </p>
              </div>
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div
              className="absolute right-0 bottom-24 max-w-xs"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div
                className="bg-white p-6 border border-gray-200"
                style={{ borderRadius: "1px" }}
              >
                <div
                  className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 mb-4 flex items-center justify-center"
                  style={{ borderRadius: "1px" }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Financial Growth
                </h3>
                <p className="text-gray-600 text-sm">
                  Earning ₹98.5L+ annually with strategic
                  spending on R&D, platform development, and
                  comprehensive brand support services.
                </p>
              </div>
            </motion.div>

            {/* Bottom Left Card */}
            <motion.div
              className="absolute left-0 bottom-16 max-w-xs"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div
                className="bg-white p-6 border border-gray-200"
                style={{ borderRadius: "1px" }}
              >
                <div
                  className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 mb-4 flex items-center justify-center"
                  style={{ borderRadius: "1px" }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Future Expansion
                </h3>
                <p className="text-gray-600 text-sm">
                  Expanding to all industries, launching drop
                  shipping, opening offline stores, and building
                  quick e-commerce solutions.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mobile: Feature cards stacked below phone */}
          <div className="lg:hidden block mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className="bg-white p-5 border border-gray-200"
                  style={{ borderRadius: "1px" }}
                >
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 mb-3 flex items-center justify-center"
                    style={{ borderRadius: "1px" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">
                    Problem & Solution
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Marketplaces dominated by top brands block
                    new entrants. Our platform exclusively
                    supports emerging brands.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className="bg-white p-5 border border-gray-200"
                  style={{ borderRadius: "1px" }}
                >
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 mb-3 flex items-center justify-center"
                    style={{ borderRadius: "1px" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">
                    Platform Features
                  </h3>
                  <p className="text-gray-600 text-sm">
                    E-commerce platform with mentoring, R&D
                    services, and end-to-end support for
                    sustainable businesses.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className="bg-white p-5 border border-gray-200"
                  style={{ borderRadius: "1px" }}
                >
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 mb-3 flex items-center justify-center"
                    style={{ borderRadius: "1px" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">
                    Financial Growth
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Earning ₹98.5L+ annually with strategic
                    spending on R&D and comprehensive brand
                    support services.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className="bg-white p-5 border border-gray-200"
                  style={{ borderRadius: "1px" }}
                >
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 mb-3 flex items-center justify-center"
                    style={{ borderRadius: "1px" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">
                    Future Expansion
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Expanding to all industries, launching drop
                    shipping, opening offline stores, and
                    building quick e-commerce solutions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Curved connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <motion.path
              d="M200 200 Q 400 100 600 300"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, delay: 1.6 }}
            />
            <motion.path
              d="M150 500 Q 350 400 550 600"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, delay: 1.8 }}
            />
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#84cc16" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              <linearGradient
                id="gradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}