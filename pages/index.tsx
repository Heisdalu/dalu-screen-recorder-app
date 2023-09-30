import Image from "next/image";
import { Inter, Sora, Work_Sans } from "next/font/google";
import Wrapper from "@/components/Wrapper/Wrapper";
import DefaultImage from "@/components/Default/DefaultImage";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});
const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

// <div className={``}></div>;
// const gee = {`${sora.className}`}
// const gee = {`${work_sans.className}`}

export default function Home() {
  return (
    <div className={inter.className}>
      <Wrapper>
        <nav className="border-1 flex justify-between">
          <div className="space-x-0.5 flex elemVertical border-1">
            <DefaultImage
              src="/logo.svg"
              height={40}
              width={40}
              className="jusit"
            />
            <span className="text-[1rem] font-[700] text-[#100A42]">
              HelpMeOut
            </span>
          </div>

          <div
            className={`hidden md:flex ${work_sans.className} elemVertical space-x-[2.4375rem] text-[1rem] font-[500] text-black`}
          >
            <h1>Feature</h1>
            <h1>How it works</h1>
          </div>

          <button
            className={`${sora.className} font-[600] text-[1rem] md:text-[1.125rem] text-darkBlue`}
          >
            Get Started
          </button>
        </nav>
        <header className="md:grid vlg:gallery vlg:py-[5rem]">
          <div className="max-w-[500px] md:max-w-[auto]">
            <h1
              className={`${sora.className} leading-[100%] space-y-[10px] text-[1.5rem] flex flex-col mb-[1rem] md:text-[2.5rem] md:mb-[1.25rem] vlg:text-[4rem]  border-1`}
            >
              <span>Show Them</span>
              <span>Don’t Just Tell</span>
            </h1>
            <p className="mb-[2rem] text-[1rem] md:text-[1.25rem] md:mb-[2.5rem] vlg:mb-[3rem]">
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
            <button className="leading-[1.75rem] rounded-[0.5rem] bg-darkBlue text-white elemVertical py-[1.38rem] px-[1.5rem]">
              <span>Install HelpMeOut</span>
              <span>
                <DefaultImage src="/arrowLeft.svg" height={21} width={20} />
              </span>
            </button>
          </div>

          <div className="py-2 border-1 space-y-1 fiex flex-col lg:py-[0]  lg:space-y-[0] justify-center imageGallery ">
            <div className="grid lg:pr-[1.5rem] border-1">
              <DefaultImage
                height={300}
                width={300}
                src="/adobe1.png"
                className="mx-auto rounded-[0.5rem]"
              />
              <DefaultImage
                height={300}
                width={300}
                src="/adobe2.png"
                className="pt-[1rem] mx-auto lg:self-end lg:pt-[0] rounded-[0.5rem]"
              />
            </div>

            <div>
              <DefaultImage
                height={300}
                width={300}
                src="/adobe3.png"
                className="mx-auto rounded-[0.5rem]"
              />
            </div>
          </div>
        </header>
      </Wrapper>
    </div>
  );
}
