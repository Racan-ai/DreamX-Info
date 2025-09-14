import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import exampleImage from "figma:asset/18d04eeeedf40cc72eda911ace02cf7527aa564f.png";

const teamMembers = [
  {
    name: "Yaswanth kumar yadav",
    role: "Founder & CEO",
    image:
      "https://i.postimg.cc/cJwKH50f/Whats-App-Image-2025-09-09-at-21-20-33-ae434cd5.jpg",
    linkedin:
      "https://www.linkedin.com/in/kesari-brahmarishendra-8a54b0260/",
  },
  {
    name: "Kesari Brahmarishendra",
    role: "CTO & Product designer",
    image:
      "https://avatars.githubusercontent.com/u/121884148?v=4",
    linkedin: "https://linkedin.com/in/jessicadobrev",
  },
  {
    name: "Jaswanth",
    role: "Product Manager",
    image:
      "https://i.postimg.cc/zGBtsjmm/Whats-App-Image-2025-09-13-at-23-02-06-98a9f67d.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Sai sivaprasand",
    role: "CMO",
    image:
      "https://i.postimg.cc/NMMjTSSJ/Whats-App-Image-2025-09-13-at-22-54-14-127da3c1.jpg",
    linkedin: "https://linkedin.com",
  },
];

export function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const handleTeamMemberClick = (linkedinUrl: string) => {
    window.open(linkedinUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6">
            Meet our beautiful team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Our philosophy is simple: hire great people and give
            them the resources and support to do their best work
            building the future of fashion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 w-full sm:w-auto"
                style={{ borderRadius: "1px" }}
              >
                Book a call
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-6 py-3 w-full sm:w-auto"
                style={{ borderRadius: "1px" }}
              >
                Get in touch
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Members Horizontal Scroll - Hidden Scrollbar */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Scroll Container with Hidden Scrollbar */}
          <div
            className="overflow-x-auto scrollbar-hide pb-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex space-x-6 min-w-max">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  onClick={() =>
                    handleTeamMemberClick(member.linkedin)
                  }
                >
                  <div
                    className="bg-white p-0 w-64 sm:w-72 lg:w-80 border-0 hover:shadow-lg transition-shadow duration-300"
                    style={{ borderRadius: "1px" }}
                  >
                    {/* Team Member Image */}
                    <div
                      className="relative mb-4 overflow-hidden"
                      style={{ borderRadius: "1px" }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="relative"
                      >
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                          style={{ borderRadius: "1px" }}
                        />
                      </motion.div>
                    </div>

                    {/* Team Member Info */}
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-2">
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Gradient Overlays */}
        </motion.div>
      </div>
    </section>
  );
}