import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-orange-50 bg-[rgba(255,255,255,0)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-4">
            About Our Company
          </h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12"
          style={{ borderRadius: "1px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            {/* 10X Card */}
            <motion.div
              className="lg:col-span-4 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl p-6 text-white"
              style={{ borderRadius: "1px" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl lg:text-5xl mb-3">
                10X
              </div>
              <p className="text-sm lg:text-base text-purple-100">
                Dreamxworld helps business profit 10X faster
                than before
              </p>
            </motion.div>

            {/* Team Collaboration Image */}
            <motion.div
              className="lg:col-span-4 rounded-2xl overflow-hidden"
              style={{ borderRadius: "1px" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NzMzNDY5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business team collaboration"
                className="w-full h-48 lg:h-56 object-cover"
              />
            </motion.div>

            {/* Business Meeting Image */}
            <motion.div
              className="lg:col-span-4 rounded-2xl overflow-hidden"
              style={{ borderRadius: "1px" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU3NDA4NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business meeting professional"
                className="w-full h-48 lg:h-56 object-cover"
              />
            </motion.div>

            {/* Happy Businessman Image */}
            <motion.div
              className="lg:col-span-8 rounded-2xl overflow-hidden"
              style={{ borderRadius: "1px" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback
                src="https://i.postimg.cc/28BQTZKx/Generated-Image-September-26-2025-9-44-PM.png"
                alt="Happy businessman working"
                className="w-full h-48 lg:h-56 object-cover"
              />
            </motion.div>

            {/* 2.3m Stats Card */}
            <motion.div
              className="lg:col-span-4 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-2xl p-6"
              style={{ borderRadius: "1px" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl lg:text-5xl mb-3 text-gray-900">
                630
              </div>
              <p className="text-sm lg:text-base text-gray-800">
                Dreamxworld empowers over 650 users.
              </p>
            </motion.div>
          </div>

          {/* Bottom Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl lg:text-3xl xl:text-4xl text-gray-900 mb-4">
                Dreaxworld Business plan :
              </h3>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                On boarding new brands and providing end to end
                services for that brands and also mentoring and
                doing R&D for new brands . Delivering new
                innovative brands to the users. In future we can
                also enter into the quick e commerce.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
