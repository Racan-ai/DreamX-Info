export function Expansion() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">
            Who is our<br />
            Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-300">Micro & Small Businesses</h3>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-300">Young Entrepreneurs</h3>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-300">Influencers & Communities</h3>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-300">Aspiring Clothing Brands</h3>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Information Technology</h3>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">
                Frequently<br />
                Asked Question
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Everything you need to know about our fashion ecosystem platform 
                and how we support entrepreneurs in building successful brands.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-b border-gray-700 pb-6">
              <button className="w-full text-left flex items-center justify-between">
                <span className="text-lg font-medium">What is the AutoBiz?</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Dreamxworld is a comprehensive fashion ecosystem platform that empowers 
                entrepreneurs, creators, and influencers to transform their fashion ideas 
                into profitable brands through mentorship, technology, and strategic partnerships.
              </p>
            </div>

            <div className="border-b border-gray-700 pb-6">
              <button className="w-full text-left flex items-center justify-between">
                <span className="text-lg font-medium">How does Dreamxworld work?</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="border-b border-gray-700 pb-6">
              <button className="w-full text-left flex items-center justify-between">
                <span className="text-lg font-medium">Can celebrities Platform with our opportunities?</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="border-b border-gray-700 pb-6">
              <button className="w-full text-left flex items-center justify-between">
                <span className="text-lg font-medium">How can Celebrate think with our opportunities?</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="pb-6">
              <button className="w-full text-left flex items-center justify-between">
                <span className="text-lg font-medium">What benefits does Giftmen with Dreamxworld?</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}