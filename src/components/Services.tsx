export function Services() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[rgba(255,255,255,1)] leading-tight font-[Poppins]">
                How can we help
                <br />
                your business
              </h2>
              <p className="text-[rgba(205,205,205,1)] leading-relaxed font-[Azeret_Mono] text-sm sm:text-base">
                Problem statement : Present market places are
                filled with only top brands , which are leading
                to effecting new brands to enter into the market
                . On and average every year around 100+ brands
                are coming in clothing industry. This brands are
                spending around 50K to 1L in a year . But at end
                of the year not even 10 brands are standing out
                in the society . Not only clothing industry in
                every industry atleast 10 new brands are
                entering but struggling to standout in the
                market .
              </p>
              <p className="text-[rgba(205,205,205,1)] leading-relaxed font-[Azeret_Mono] text-sm sm:text-base">
                Our team of highly experienced professionals is
                committed to delivering tailored advice that
                addresses your distinct needs and aspirations.
                We aim to ensure that you depart with not only
                actionable insights but also a clear roadmap to
                drive your business forward.
              </p>
              <button className="text-white font-medium inline-flex items-center space-x-2 hover:text-gray-300 transition-colors">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0">
            <p className="text-[rgba(205,205,205,1)] leading-relaxed text-lg sm:text-xl font-normal font-[Azeret_Mono] lg:my-[174px] m-[0px]">
              Solution statement : We build a platform called
              DREAM X WORLD , it’s a e commerces platform, where
              it’s only onboard new brands . by this brands can
              get an attention from the society , that leads to
              get feedback from the society which helps to
              future steps . And also we can create market chain
              in the textile industry for new brands and in the
              future we can enter into other industries also .
              In terms of user , we are helping them to reach
              out new which are following the innovation of
              present ERA .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}