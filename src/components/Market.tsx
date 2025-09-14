import { motion } from "motion/react";

export function Market() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const numberVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.2,
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[rgba(255,255,230,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="text-center space-y-4 group cursor-pointer"
            variants={itemVariants}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
              variants={numberVariants}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 1.2,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              }}
              viewport={{ once: true }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  delay: 0.5,
                }}
                viewport={{ once: true }}
                onViewportEnter={() => {
                  // Count up animation from 0 to 100
                  let count = 0;
                  const timer = setInterval(() => {
                    count += 2;
                    if (count >= 100) {
                      count = 100;
                      clearInterval(timer);
                    }
                  }, 20);
                }}
              >
                100%
              </motion.span>
            </motion.div>
            <motion.h3
              className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
              variants={itemVariants}
            >
              Strategic for Business Growth and Market Expansion
            </motion.h3>
            <motion.p
              className="text-gray-600 text-sm leading-relaxed"
              variants={itemVariants}
            >
              We deliver comprehensive strategies that propel
              your fashion business forward with measurable
              results and sustainable growth patterns.
            </motion.p>
          </motion.div>

          <motion.div
            className="text-center space-y-4 group cursor-pointer"
            variants={itemVariants}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="text-5xl lg:text-6xl font-light text-gray-900 group-hover:text-purple-600 transition-colors duration-300"
              variants={numberVariants}
              initial={{
                opacity: 0,
                scale: 0.5,
                rotateY: -180,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                transition: {
                  duration: 1.4,
                  ease: [0.6, -0.05, 0.01, 0.99],
                  delay: 0.2,
                },
              }}
              viewport={{ once: true }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 2.2,
                  ease: "easeOut",
                  delay: 0.7,
                }}
                viewport={{ once: true }}
              >
                98.5k
              </motion.span>
            </motion.div>
            <motion.h3
              className="text-xl font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300"
              variants={itemVariants}
            >
              counting:
            </motion.h3>
            <motion.p
              className="text-gray-600 text-sm leading-relaxed"
              variants={itemVariants}
            >
              Through trial and error, we achieved over 48k in
              revenue, learning and refining our approach along
              the way. Additionally, our platform generated more
              than 4.5k, proving its scalability.
            </motion.p>
          </motion.div>

          <motion.div
            className="text-center space-y-4 group cursor-pointer"
            variants={itemVariants}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="text-5xl lg:text-6xl font-light text-gray-900 group-hover:text-green-600 transition-colors duration-300"
              variants={numberVariants}
              initial={{ opacity: 0, scale: 0.3, y: 50 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 15,
                  stiffness: 300,
                  delay: 0.4,
                },
              }}
              viewport={{ once: true }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 2.5,
                  ease: "easeOut",
                  delay: 0.9,
                }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0px 0px 0px rgba(34, 197, 94, 0)",
                      "0px 0px 10px rgba(34, 197, 94, 0.5)",
                      "0px 0px 0px rgba(34, 197, 94, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  10k
                </motion.span>
              </motion.span>
            </motion.div>
            <motion.h3
              className="text-xl font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-300"
              variants={itemVariants}
            >
              Commerce collaborators to achieve goals and
              innovations
            </motion.h3>
            <motion.p
              className="text-gray-600 text-sm leading-relaxed"
              variants={itemVariants}
            >
              Join thousands of successful entrepreneurs who
              have transformed their fashion ideas into thriving
              businesses through our platform.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}