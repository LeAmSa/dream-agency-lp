import { Work } from "../@types/typings";
import { UnderlineText } from "./UnderlineText";
import { WorkItem } from "./WorkItem";
import { motion } from "framer-motion";

interface RecentWorkProps {
  works: Work[];
}

export function RecentWork({ works }: RecentWorkProps) {
  return (
    <section className="relative max-w-screen mx-auto px-[50px] py-[92px]">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-3xl lg:text-5xl text-center lg:text-start"
        >
          <h2 className="font-bold">Our Recent Work</h2>
          <h2 className="font-light">
            By Our <UnderlineText text="Experts" />
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="max-w-[500px] text-center lg:text-start mt-10 lg:mt-0"
        >
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </motion.p>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 mt-20">
        {works.map((work) => (
          <WorkItem key={work.clientName} work={work} />
        ))}
      </div>

      <div className="absolute top-0 bottom-0 right-0 w-[85%] h-full bg-pink/30 rounded-tl-[400px] -z-[1]" />
    </section>
  );
}
