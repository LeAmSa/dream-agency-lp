import heroImg from "../assets/hero.png";
import { Button } from "./Button";
import { UnderlineText } from "./UnderlineText";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative max-w-screen mx-auto h-screen flex flex-col lg:flex-row items-center pt-28 lg:pt-0 px-6 lg:pl-[50px] lg:pr-4 pb-20 text-purple"
    >
      <div className="flex flex-col justify-center lg:justify-start mr-0 lg:mr-[86px] flex-1">
        <h1 className="text-4xl lg:text-[87px] leading-none text-center lg:text-start">
          <strong>We Help you</strong> <br />{" "}
          <span className="font-light">
            to grow your <br />
            <UnderlineText text="Business" className="font-light text-purple" />
          </span>
        </h1>

        <p className="text-purple/60 text-center lg:text-start text-[17px] mt-[27px] mb-[31px] max-w-[600px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>

        <Button>Get Started</Button>
      </div>

      <div className="mt-10 lg:mt-0 z-[1]">
        <img
          src={heroImg}
          alt="Hero Image"
          className="max-w-[250px] md:max-w-lg lg:max-w-xl"
        />
      </div>

      <div className="absolute bg-hero -top-[20%] left-[65%] bg-yellow/20 w-[967px] h-[789px] -z-[1]" />
    </section>
  );
}
