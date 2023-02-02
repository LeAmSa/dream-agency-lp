import map from "../assets/map.png";

export function Footer() {
  return (
    <footer className="bg-black rounded-tr-[160px]">
      <div className="max-w-screen mx-auto px-6 lg:pl-[50px] lg:pr-40 pt-[92px] pb-10 flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div>
          <h2 className="text-white font-serif font-bold text-3xl lg:text-4xl">
            Dream Agency
          </h2>
          <p className="text-white max-w-[430px] pt-4 pb-6">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </p>
          <p className="uppercase font-semibold text-white pb-4">
            Get in Touch
          </p>
          <form className="h-[50px] flex justify-center items-center flex-nowrap">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="w-full bg-black p-3 placeholder:text-white placeholder:uppercase border border-white text-white"
            />
            <button className="uppercase bg-white text-black font-semibold px-8 lg:px-12 h-full">
              Send
            </button>
          </form>
        </div>

        <div className="relative mt-10 lg:mt-0">
          <div className="absolute top-[26px] left-[32px] bg-white py-2 px-3 w-[200px] shadow-lg">
            <p className="font-bold text-[#414141]">Texas</p>
            <p className="text-[#414141]">United States</p>
            <p className="text-[#51A0DC] cursor-pointer hover:underline">
              View Larger Map
            </p>
          </div>
          <img src={map} alt="Map location" className="w-full" />
        </div>

        <div className="mt-10 lg:hidden text-white font-semibold flex gap-6 divide-x divide-purple">
          <a className="cursor-pointer">Facebook</a>
          <a className="cursor-pointer pl-6">LinkedIn</a>
          <a className="cursor-pointer pl-6">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
