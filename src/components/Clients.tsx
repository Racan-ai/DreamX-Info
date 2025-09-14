import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Clients() {
  const partners = [
    {
      name: "Racan AI", 
      logo: "https://i.postimg.cc/rsYBTFzm/image-41.png",
      type: "partner"
    },
    {
      name: "Rockage",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAP0a87-NAp15u3_76M9wVI3W3cNmCFiSH1g&s",
      url: "https://rockagefashion.com/",
      type: "partner"
    }
  ];

  const onboardingBrands = [
    { name: "karim for you", type: "brand" },
    { name: "ranjith on wheels", type: "brand" }
  ];

  // Create a longer array for seamless marquee effect
  const marqueeItems = [
    ...partners,
    ...onboardingBrands,
    ...partners,
    ...onboardingBrands,
    ...partners,
    ...onboardingBrands
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-emerald-600/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4 outfit">
            Our <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Clients & Partners</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Trusted by leading brands and partnering with innovative companies to build the future of fashion
          </p>
        </motion.div>

        {/* Partners Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-lg sm:text-xl text-gray-900 mb-6 text-center outfit">Strategic Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex items-center justify-center p-6"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {partner.logo ? (
                  <div className="w-24 h-12 sm:w-32 sm:h-16 flex items-center justify-center">
                    <ImageWithFallback
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="text-gray-900 text-lg sm:text-xl font-medium px-4">
                    {partner.name}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Onboarding Brands Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-lg sm:text-xl text-gray-900 mb-2 outfit">Onboarding Brands</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Emerging fashion brands building their future with our platform
          </p>
        </motion.div>

        {/* Marquee Section */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Marquee Container */}
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex space-x-8 sm:space-x-12"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ width: "200%" }}
            >
              {marqueeItems.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center p-4 sm:p-6 min-w-[200px] sm:min-w-[240px]"
                >
                  {item.type === "partner" && 'logo' in item && item.logo ? (
                    <div className="w-16 h-8 sm:w-20 sm:h-10 flex items-center justify-center">
                      <ImageWithFallback
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-gray-900 text-base sm:text-lg font-medium mb-1">
                        {item.name}
                      </div>
                      {item.type === "brand" && (
                        <div className="text-emerald-600 text-xs sm:text-sm">
                          Fashion Brand
                        </div>
                      )}
                      {item.type === "partner" && (
                        <div className="text-blue-600 text-xs sm:text-sm">
                          Strategic Partner
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Join our growing ecosystem of fashion innovators
          </p>
          <motion.button
            className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 sm:px-8 py-3 font-medium hover:from-emerald-700 hover:to-blue-700 transition-all duration-200"
            style={{ borderRadius: "1px" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}