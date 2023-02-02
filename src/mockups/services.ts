import website from "../assets/website.svg";
import computer from "../assets/computer.svg";
import mobilePhone from "../assets/mobile-phone.svg";
import rocket from "../assets/rocket.svg";
import { Service } from "../@types/typings";

const description =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

export const services: Service[] = [
  {
    title: "Website Design",
    image: website,
    description,
  },
  {
    title: "Web Development",
    image: computer,
    description,
  },
  {
    title: "Mobile App Development",
    image: mobilePhone,
    description,
  },
  {
    title: "Marketing",
    image: rocket,
    description,
  },
];
