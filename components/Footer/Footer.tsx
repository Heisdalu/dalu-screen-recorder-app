import { FC } from "react";
import DefaultImage from "../Default/DefaultImage";
import Wrapper from "../Wrapper/Wrapper";

interface Props {
  workSans: string;
  sora: string;
}

const Footer: FC<Props> = ({ workSans, sora }) => {
  return (
    <footer className="bg-[#120B48] mt-2 md:mt-[3rem] lg:mt-[4rem]">
      <Wrapper>
        <div className="text-white py-2 md:py-[3rem] lg:py-[4rem] space-y-1 md:grid md:[grid-template-columns:0.5fr_1.5fr] md:space-y-[0] md:max-w-[1200px]">
          <div className="elemVertical space-x-[5px] md:self-start">
            <span>
              <DefaultImage width={32} height={32} src="/whiteLogo.svg" />
            </span>
            <span className="text-[1rem] font-[700]">HelpMeOut</span>
          </div>

          <div className="space-y-[2.5rem] md:flex md:space-y-[0] md:justify-around">
            <div className="space-y-1">
              <h1 className={`${sora} text-1 font-[600]`}>Home</h1>
              <p className={`${workSans} text-[1rem] font-[400`}>
                Home
              </p>
              <p className={`${workSans} text-[1rem] font-[400`}>
                Converter
              </p>
              <p className={`${workSans} text-[1rem] font-[400`}>
                How it Works
              </p>
            </div>

            <div className="space-y-1">
              <h1 className={`${sora} text-1 font-[600]`}>
                About us
              </h1>
              <p className={`${workSans} text-[1rem] font-[400`}>
                About
              </p>
              <p className={`${workSans} text-[1rem] font-[400`}>
                Contact Us
              </p>
              <p className={`${workSans} text-[1rem] font-[400`}>
                Privacy Policy
              </p>
            </div>

            <div className="space-y-1">
              <h1 className={`${sora} text-1 font-[600]`}>
                Screen Record
              </h1>
              <p className={`${workSans} text-[1rem] font-[400`}>
                Browser Window
              </p>
              <p className={`${workSans} text-[1rem] font-[400`}>
                Desktop
              </p>
              <p className={`${workSans} text-[1rem] font-[400`}>
                Application
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};
export default Footer;
