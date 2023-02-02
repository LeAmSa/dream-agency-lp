import { Testimonial } from "../@types/typings";
import { motion } from "framer-motion";

interface TestimonialItemProps {
  testimonial: Testimonial;
}

export function TestimonialItem({ testimonial }: TestimonialItemProps) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.9 }}
      className="max-w-[450px] py-6 px-5 shadow-lg text-start"
    >
      <p className="text-yellow font-bold font-serif text-7xl mb-4">"</p>
      <p className="mb-4">{testimonial.testimonial}</p>
      <p className="text-[#000000] font-semibold">
        {" "}
        <span className="text-yellow text-2xl font-bold">-</span>{" "}
        {testimonial.client}
      </p>
    </motion.div>
  );
}
