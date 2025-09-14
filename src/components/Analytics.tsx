import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";

export function Analytics() {
  const [animatedRevenue, setAnimatedRevenue] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState<
    number | null
  >(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Calculate path length for animation
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }

    // Animate ₹98K
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

  // Data points for the line graph with calculated revenue values
  const dataPoints = [
    { month: "MAR", value: 15, revenue: 12, x: 40, y: 180 },
    { month: "APR", value: 25, revenue: 18, x: 90, y: 160 },
    { month: "MAY", value: 30, revenue: 25, x: 140, y: 150 },
    { month: "JUN", value: 45, revenue: 35, x: 190, y: 120 },
    { month: "JUL", value: 55, revenue: 45, x: 240, y: 100 },
    { month: "AUG", value: 65, revenue: 65, x: 290, y: 80 },
    { month: "SEP", value: 75, revenue: 98, x: 340, y: 60 },
  ];

  // Generate smooth curve path
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

  // Generate area path for gradient fill
  const generateAreaPath = () => {
    const basePath = generatePath();
    const lastPoint = dataPoints[dataPoints.length - 1];
    const firstPoint = dataPoints[0];

    return `${basePath} L ${lastPoint.x} 200 L ${firstPoint.x} 200 Z`;
  };

  const areaPath = generateAreaPath();

  return (
    <section
      className="py-8 sm:py-12 lg:py-16 bg-[url('https://i.pinimg.com/736x/38/e0/6d/38e06de0aedc6e7f159762546a2aebe2.jpg')] bg-cover bg-center to-indigo-700"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-[1px] p-4 sm:p-6 lg:p-8 w-full max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <motion.p
              className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Statistics
            </motion.p>
            <motion.h2
              className="text-base sm:text-lg font-medium text-gray-800 mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Total accumulated profit
            </motion.h2>

            <motion.div
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              style={{ fontFamily: "IBM Plex Mono, monospace" }}
            >
              ₹{animatedRevenue}K
            </motion.div>
          </div>

          {/* Chart Container */}
          <div className="relative w-full">
            <div className="w-full aspect-[380/220] max-w-full mx-[25px] my-[0px]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 380 220"
                className="overflow-visible"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Grid Lines - Y Axis */}
                {[0, 20, 40, 60, 80].map((value, index) => (
                  <motion.g
                    key={value}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <line
                      x1="35"
                      y1={200 - value * 2}
                      x2="350"
                      y2={200 - value * 2}
                      stroke="#f1f5f9"
                      strokeWidth="1"
                    />
                    <text
                      x="25"
                      y={205 - value * 2}
                      textAnchor="end"
                      className="text-[10px] sm:text-xs fill-gray-400"
                      style={{
                        fontFamily: "Outfit, sans-serif",
                      }}
                    >
                      {value}%
                    </text>
                  </motion.g>
                ))}

                {/* Area Gradient Fill */}
                <defs>
                  <linearGradient
                    id="areaGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#a855f7"
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor="#a855f7"
                      stopOpacity="0.05"
                    />
                  </linearGradient>
                </defs>

                {/* Animated Area Fill */}
                <motion.path
                  d={areaPath}
                  fill="url(#areaGradient)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  viewport={{ once: true }}
                />

                {/* Animated Line */}
                <motion.path
                  ref={pathRef}
                  d={linePath}
                  stroke="#a855f7"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  style={{
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength,
                  }}
                />

                {/* Data Points */}
                {dataPoints.map((point, index) => (
                  <g key={point.month}>
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r="4"
                      fill="#a855f7"
                      stroke="white"
                      strokeWidth="2"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 1.3 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      className="cursor-pointer hover:r-6 transition-all duration-200"
                      onMouseEnter={() =>
                        setHoveredPoint(index)
                      }
                      onMouseLeave={() => setHoveredPoint(null)}
                      style={{
                        filter:
                          hoveredPoint === index
                            ? "drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))"
                            : "none",
                      }}
                    />

                    {/* Tooltip */}
                    {hoveredPoint === index && (
                      <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Tooltip Background */}
                        <rect
                          x={point.x - 25}
                          y={point.y - 45}
                          width="50"
                          height="30"
                          fill="rgba(0, 0, 0, 0.8)"
                          rx="4"
                        />
                        {/* Tooltip Text - Month */}
                        <text
                          x={point.x}
                          y={point.y - 32}
                          textAnchor="middle"
                          className="text-[10px] fill-white"
                          style={{
                            fontFamily: "Outfit, sans-serif",
                          }}
                        >
                          {point.month}
                        </text>
                        {/* Tooltip Text - Revenue */}
                        <text
                          x={point.x}
                          y={point.y - 20}
                          textAnchor="middle"
                          className="text-[10px] fill-white"
                          style={{
                            fontFamily:
                              "IBM Plex Mono, monospace",
                          }}
                        >
                          ₹{point.revenue}K
                        </text>
                      </motion.g>
                    )}
                  </g>
                ))}

                {/* X-Axis Labels */}
                {dataPoints.map((point, index) => (
                  <motion.text
                    key={point.month}
                    x={point.x}
                    y="215"
                    textAnchor="middle"
                    className="text-[10px] sm:text-xs fill-gray-400"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.7 + index * 0.05,
                    }}
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