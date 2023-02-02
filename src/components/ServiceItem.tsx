import { Service } from "../@types/typings";
import { motion } from "framer-motion";

interface ServiceProps {
  service: Service;
}

export function ServiceItem({ service }: ServiceProps) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.9 }}
      className="p-[27px] bg-white text-purple rounded-lg shadow-md"
    >
      <img
        src={service.image}
        alt="Service logo"
        className={`object-cover ${
          service.title === "Mobile App Development"
            ? "bg-[#D4F0FF]"
            : "bg-pink"
        } p-3 rounded-xl`}
      />

      <h4 className="font-bold uppercase mt-3 mb-[6px]">{service.title}</h4>

      <p className="opacity-60">{service.description}</p>
    </motion.div>
  );
}
