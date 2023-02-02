import { Testimonial } from "../@types/typings";
import { TestimonialItem } from "./TestimonialItem";
import { UnderlineText } from "./UnderlineText";
import { motion } from "framer-motion";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="max-w-screen mx-auto px-[50px] py-[92px] text-center">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center text-3xl lg:text-5xl"
      >
        <h2 className="font-bold">Our Testimonials</h2>
        <h2 className="font-light">
          What Our Clients Are <UnderlineText text="Saying" />
        </h2>
      </motion.div>

      <div className="mt-16 flex flex-wrap lg:flex-nowrap justify-center items-center gap-16">
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.client} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
