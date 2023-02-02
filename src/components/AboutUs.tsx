import { Button } from "./Button";
import aboutUs from "../assets/about-us.png";
import { UnderlineText } from "./UnderlineText";
import { motion } from "framer-motion";

export function AboutUs() {
  return (
    <section className="max-w-screen mx-auto px-6 lg:px-[50px] py-[92px] flex flex-col lg:flex-row items-center lg:space-x-12">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="w-full mb-10 lg:mb-0"
      >
        <img src={aboutUs} alt="About Us Image" className="w-full" />
      </motion.div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex flex-col justify-center"
      >
        <div className="text-center lg:text-start text-3xl lg:text-5xl">
          <h2 className="font-bold">About Us</h2>
          <h2 className="font-light">
            Fake or <UnderlineText text="Real" />
          </h2>
        </div>
        <p className="text-center lg:text-start mt-5 mb-16 opacity-60 max-w-[600px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. <br /> <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <Button>Explore More</Button>
      </motion.div>
    </section>
  );
}
