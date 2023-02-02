import facebookLogo from "../assets/facebook.svg";
import instagramLogo from "../assets/instagram.svg";
import linkedinLogo from "../assets/linkedin.svg";

export function Socials() {
  return (
    <div className="hidden lg:inline-flex items-center justify-center gap-4">
      <div className="cursor-pointer flex justify-center items-center border border-purple/60 w-[45px] h-[49px] border-social-icon transition-colors hover:bg-purple/10">
        <img src={facebookLogo} alt="Facebook" />
      </div>
      <div className="cursor-pointer flex justify-center items-center border border-purple/60 w-[45px] h-[49px] border-social-icon transition-colors hover:bg-purple/10">
        <img src={linkedinLogo} alt="LinkedIn" />
      </div>
      <div className="cursor-pointer flex justify-center items-center border border-purple/60 w-[45px] h-[49px] border-social-icon transition-colors hover:bg-purple/10">
        <img src={instagramLogo} alt="Instagram" />
      </div>
    </div>
  );
}
