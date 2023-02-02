import { Service } from "../@types/typings";
import { ServiceItem } from "./ServiceItem";
import { UnderlineText } from "./UnderlineText";
import { motion } from "framer-motion";

interface WhatWeDoProps {
  services: Service[];
}

export function WhatWeDo({ services }: WhatWeDoProps) {
  return (
    <section className="relative w-screen h-full">
      <div className="max-w-screen mx-auto px-[50px] mt-20 lg:mt-0 py-[92px] flex flex-col items-center justify-center">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="leading-none text-center text-3xl lg:text-5xl text-purple"
        >
          <strong>What We Do</strong> <br />
          <span className="font-light">
            For Your <UnderlineText text="Business" />
          </span>{" "}
          {""}
        </motion.h2>

        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 mt-24">
          {services.map((service) => (
            <ServiceItem key={service.title} service={service} />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 w-[85%] h-full bg-blue rounded-tr-[400px] -z-[1]" />
      <div className="absolute right-0 -bottom-[20%] border-what-we-do w-[532px] h-[498px] border border-dashed border-purple/20 -z-[2]" />
    </section>
  );
}
