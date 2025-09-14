export function Revenue() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 sm:space-y-12 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900">
            Our services
            <br />
            for Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Harnessing the Power of AI for Streamlined Business
            Function and Efficiency
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-green-50 rounded-[1px] p-8 space-y-6">
            <div className="w-12 h-12 bg-[rgba(39,39,39,1)] rounded-[1px] flex items-center justify-center">
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
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900">
                We Collab
                <br />
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Collaboration is the foundation of creativity.
                We work closely with you, understanding your
                vision, your goals, and your unique identity.
                This step ensures that your brand reflects your
                voice and stands apart in the market.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-[1px] p-8 space-y-6">
            <div className="w-12 h-12 bg-[rgba(39,39,39,1)] rounded-[1px] flex items-center justify-center">
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900">
                .We Design
                <br />
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our design team translates your ideas into
                powerful visuals—whether it’s apparel,
                accessories, or custom concepts. From logo
                design to T-shirt graphics, every element is
                crafted with originality and authenticity to
                match your brand’s DNA.
              </p>
            </div>
          </div>

          <div className="bg-pink-50 rounded-[1px] p-8 space-y-6">
            <div className="w-12 h-12 bg-[rgba(39,39,39,1)] rounded-[1px] flex items-center justify-center">
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900">
                Brand / Deliver and
                <br />
                Smart R&D
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Once the designs are ready, we take it further.
                We handle manufacturing, quality checks, and
                branding so that your final product doesn’t just
                reach customers—it represents you. We don’t stop
                at delivery; we help you position your brand in
                the market with a strong presence. Style
                research, trend analysis, and product innovation
                tailored to each brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}