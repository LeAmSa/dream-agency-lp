import { Work } from "../@types/typings";
import { motion } from "framer-motion";

interface WorkItemProps {
  work: Work;
}

export function WorkItem({ work }: WorkItemProps) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.2 }}
      className="rounded-lg shadow-md bg-white pt-6 px-3 pb-8"
    >
      <div className="flex items-center gap-4">
        <div>
          <img src={work.webScreenshot} className="object-cover w-full" />
        </div>
        <div>
          <img src={work.mobileScreenshot} className="object-cover w-full" />
        </div>
      </div>

      <div className="pt-8 flex justify-between">
        <h4 className="font-bold text-lg lg:text-2xl">{work.clientName}</h4>
        <button className="border border-[#343434] text-purple rounded-3xl px-3 py-[2px]">
          View Work
        </button>
      </div>
    </motion.div>
  );
}
