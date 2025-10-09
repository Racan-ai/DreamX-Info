import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";

export function Analytics() {
  const [animatedRevenue, setAnimatedRevenue] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }

    const timer = setTimeout(() => {
      let revenue = 0;
      const interval = setInterval(() => {
        revenue += 2;
        if (revenue >= 98) {
          revenue = 98;
          clearInterval(interval);
        }
        setAnimatedRevenue(revenue);
      }, 50);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const dataPoints = [
    { month: "MAR", revenue: 12, x: 40, y: 178 },
    { month: "APR", revenue: 18, x: 90, y: 168 },
    { month: "MAY", revenue: 25, x: 140, y: 155 },
    { month: "JUN", revenue: 35, x: 190, y: 137 },
    { month: "JUL", revenue: 45, x: 240, y: 119 },
    { month: "AUG", revenue: 65, x: 290, y: 83 },
    { month: "SEP", revenue: 90, x: 340, y: 38 },
    { month: "OCT", revenue: 98, x: 390, y: 24 },
  ];

  const generatePath = () => {
    if (dataPoints.length < 2) return "";
    let path = `M ${dataPoints[0].x} ${dataPoints[0].y}`;
    for (let i = 1; i < dataPoints.length; i++) {
      const prev = dataPoints[i - 1];
      const curr = dataPoints[i];
      const cpx1 = prev.x + (curr.x - prev.x) / 3;
      const cpy1 = prev.y;
      const cpx2 = curr.x - (curr.x - prev.x) / 3;
      const cpy2 = curr.y;
      path += ` C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${curr.x} ${curr.y}`;
    }
    return path;
  };

  const linePath = generatePath();

  return (
    <section
      className="py-8 sm:py-12 lg:py-16 bg-black"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white p-4 sm:p-6 lg:p-8 w-full max-w-2xl mx-auto border border-gray-200 rounded-lg"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="mb-6 sm:mb-8">
            <motion.h2
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My journey to <span className="text-orange-500">₹{animatedRevenue}K</span>
            </motion.h2>
            <motion.p
              className="text-gray-500 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Total accumulated profit designing websites on twitter
            </motion.p>
          </div>

          <div className="relative w-full">
            <div className="w-full aspect-[420/220] max-w-full mx-[25px] my-[0px]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 420 220"
                className="overflow-visible"
                preserveAspectRatio="xMidYMid meet"
              >
                {[0, 25, 50, 75, 100].map((value, index) => (
                  <motion.g
                    key={value}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <line
                      x1="35"
                      y1={200 - value * 1.8}
                      x2="400"
                      y2={200 - value * 1.8}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                    <text
                      x="25"
                      y={205 - value * 1.8}
                      textAnchor="end"
                      className="text-[10px] sm:text-xs fill-gray-500"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {value}K
                    </text>
                  </motion.g>
                ))}

                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <motion.path
                  ref={pathRef}
                  d={linePath}
                  stroke="#f97316"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  style={{
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength,
                  }}
                  filter="url(#glow)"
                />

                {dataPoints.map((point, index) => {
                  const isLastPoint = index === dataPoints.length - 1;
                  return (
                    <g key={point.month}>
                      <motion.circle
                        cx={point.x}
                        cy={point.y}
                        r={isLastPoint ? "6" : "3"}
                        fill={isLastPoint ? "#f97316" : "white"}
                        stroke={isLastPoint ? "none" : "#f97316"}
                        strokeWidth={isLastPoint ? "0" : "2"}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 1.3 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        viewport={{ once: true }}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredPoint(index)}
                        onMouseLeave={() => setHoveredPoint(null)}
                        style={{
                          filter: hoveredPoint === index || isLastPoint
                            ? "drop-shadow(0 0 8px rgba(249, 115, 22, 0.6))"
                            : "none",
                        }}
                      />

                      {hoveredPoint === index && (
                        <motion.g
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <rect
                            x={point.x - 25}
                            y={point.y - 45}
                            width="50"
                            height="30"
                            fill="white"
                            rx="6"
                            stroke="#f97316"
                            strokeWidth="1"
                          />
                          <text
                            x={point.x}
                            y={point.y - 32}
                            textAnchor="middle"
                            className="text-[10px] fill-gray-900"
                            style={{ fontFamily: "Outfit, sans-serif" }}
                          >
                            {point.month}
                          </text>
                          <text
                            x={point.x}
                            y={point.y - 20}
                            textAnchor="middle"
                            className="text-[10px] fill-orange-500 font-bold"
                            style={{ fontFamily: "IBM Plex Mono, monospace" }}
                          >
                            ₹{point.revenue}K
                          </text>
                        </motion.g>
                      )}
                    </g>
                  );
                })}

                {dataPoints.map((point, index) => (
                  <motion.text
                    key={point.month}
                    x={point.x}
                    y="215"
                    textAnchor="middle"
                    className="text-[10px] sm:text-xs fill-gray-500"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.7 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {point.month}
                  </motion.text>
                ))}
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
