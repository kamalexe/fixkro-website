import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import applianceAc from "@/assets/appliance-ac.png";
import applianceWashing from "@/assets/appliance-washing.png";
import applianceRo from "@/assets/appliance-ro.png";
import applianceFridge from "@/assets/appliance-fridge.png";
import applianceMicrowave from "@/assets/appliance-microwave.png";
import applianceGeyser from "@/assets/appliance-geyser.png";

const appliances = [
  { image: applianceAc, name: "Air Conditioner", tag: "Repair & Service" },
  { image: applianceWashing, name: "Washing Machine", tag: "All Brands" },
  { image: applianceRo, name: "RO Purifier", tag: "Filter & Service" },
  { image: applianceFridge, name: "Refrigerator", tag: "Expert Care" },
  { image: applianceMicrowave, name: "Microwave", tag: "Quick Fix" },
  { image: applianceGeyser, name: "Geyser", tag: "Install & Repair" },
];

const WhatWeFix = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-primary/20 rounded-full" />
            <span className="text-primary font-bold text-xs md:text-sm uppercase tracking-[0.25em]">
              Expert Repair
            </span>
            <div className="h-[1px] w-8 bg-primary/20 rounded-full" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] leading-[1.2] tracking-tight"
          >
            What we <span className="text-primary">fix for you</span>
          </motion.h2>
        </div>

        {/* Animated Marquee */}
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden px-4 md:px-0 py-4">
          {/* Edge Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-muted/30 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-muted/30 to-transparent z-20 pointer-events-none" />

          {/* Scrolling Container */}
          <motion.div
            className="flex gap-4 md:gap-6 w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35, // Smooth scrolling speed
            }}
          >
            {[...appliances, ...appliances].map((appliance, idx) => (
              <div
                key={`${appliance.name}-${idx}`}
                className="w-[160px] md:w-[240px] shrink-0 flex items-center justify-center cursor-pointer px-4 md:px-6"
              >
                <img
                  src={appliance.image}
                  alt={appliance.name}
                  width={240}
                  height={240}
                  loading="lazy"
                  className="w-full h-auto max-h-[160px] md:max-h-[240px] object-contain drop-shadow-xl hover:scale-110 hover:drop-shadow-2xl transition-all duration-500 ease-out"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeFix;
