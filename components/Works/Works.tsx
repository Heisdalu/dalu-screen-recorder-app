import { FC } from "react";
import DefaultImage from "../Default/DefaultImage";
import { Work_Sans } from "next/font/google";

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

interface WorksProps {
  no: string;
  title: string;
  text: string;
  textClass: string;
}

const Works: FC<WorksProps> = ({ no, title, text, textClass }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <span className="font-[700] bg-[#120B48] text-white text-[1.2rem] border-1 iconFix h-[50px] w-[50px] md:text-[1.5rem] lg:h-[70px] lg:w-[70px]  lg:text-[2rem]">
          {no}
        </span>
      </div>
      <h1 className="text-[#1B233D] mt-2 text-center font-[600] text-[1.3rem] md:text-[1.75rem]">
        {title}
      </h1>
      <p className={textClass}>{text}</p>
      <div className="mx-auto mt-[1.75rem]">
        <DefaultImage src="/showPic.png" width={350} height={250} />
      </div>
    </div>
  );
};
export default Works;
