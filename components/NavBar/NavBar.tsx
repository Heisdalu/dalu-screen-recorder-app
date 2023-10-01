import { FC } from "react";
import DefaultImage from "../Default/DefaultImage";

interface Props {
  workSans: string;
  sora: string;
}

const NavBar: FC<Props> = ({ workSans, sora }) => {
  return (
    <nav className="flex justify-between">
      <div className="space-x-0.5 flex elemVertical">
        <DefaultImage src="/logo.svg" height={40} width={40} />
        <span className="text-[1rem] font-[700] text-[#100A42]">HelpMeOut</span>
      </div>

      <div
        className={`hidden md:flex ${workSans} elemVertical space-x-[2.4375rem] text-[1rem] font-[500] text-black`}
      >
        <h1>Feature</h1>
        <h1>How it works</h1>
      </div>

      <button
        className={`${sora} font-[600] text-[1rem] md:text-[1.125rem] text-darkBlue`}
      >
        Get Started
      </button>
    </nav>
  );
};
export default NavBar;
