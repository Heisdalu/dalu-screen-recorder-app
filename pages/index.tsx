import Image from "next/image";
import Wrapper from "@/components/Wrapper/Wrapper";
import DefaultImage from "@/components/Default/DefaultImage";
import Works from "@/components/Works/Works";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { inter, work_sans, sora } from "@/font/font";

export default function Home() {
  return (
    <div className={inter.className}>
      <Wrapper>
        <NavBar
          workSans={`${work_sans.className}`}
          sora={`${sora.className}`}
        />
        <header className="py-[2rem] space-y-[1.5rem] md:space-y-[2.5rem] lg:space-y-[0] md:py-[3.5rem] md:grid lg:[grid-template-columns:1fr_1fr] lg:items-center lg:[grid-gap:2rem] vlg:py-[5rem]">
          <div className="max-w-[500px] md:max-w-[auto]">
            <h1
              className={`${sora.className} leading-[100%] space-y-[10px] text-[1.5rem] flex flex-col mb-[1rem] md:text-[2.5rem] md:mb-[1.25rem] vlg:text-[4rem]`}
            >
              <span>Show Them</span>
              <span>Don’t Just Tell</span>
            </h1>
            <p className="mb-[2rem] text-[1rem] md:text-[1.25rem] md:mb-[2.5rem] vlg:mb-[3rem]">
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
            <button className="space-x-1 leading-[1.75rem] rounded-[0.5rem] bg-darkBlue text-white elemVertical py-[1.38rem] px-[1.5rem]">
              <span className={`${work_sans.className}`}>
                Install HelpMeOut
              </span>
              <span>
                <DefaultImage src="/arrowLeft.svg" height={21} width={20} />
              </span>
            </button>
          </div>

          <div className="py-2 space-y-1 fiex flex-col md:flex md:flex-row lg:py-[0]  lg:space-y-[0] justify-center imageGallery ">
            <div className="grid md:pr-1.5 lg:pr-[1.5rem]">
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
      <section className="mt-1">
        <div className="h-[30px] w-[100%] bg-[#F4F6F8]"></div>

        <Wrapper>
          <div className="py-[2rem] lg:py-[4rem]">
            <div className="flex flex-col items-center">
              <h1
                className={`${sora.className} font-[700] text-[#141414] text-[2.5rem]`}
              >
                Features
              </h1>
              <p
                className={`${work_sans.className} text-[#616163] text-[1rem] md:text-[1.25rem] font-[400]`}
              >
                Key Highlights of Our Extension
              </p>
            </div>

            <div className="py-2 md:py-[3rem] lg:grid [grid-template-columns:1fr_1.5fr] lg:[grid-gap:3rem] vlg:[grid-gap:5rem] lg:py-[4rem]">
              <div className="space-y-2 md:space-y-[2rem] md:py-1">
                <div className="grid [grid-template-columns:50px_1fr] md:space-x-[0.3rem]">
                  <div className="bg-[#413C6D] iconFix">
                    <DefaultImage
                      src="/recordCircle.svg"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="space-y-[0.3rem]">
                    <h1 className="leading-[100%] text-[#1B233D] font-[600] text-[1.2rem] md:text-[1.75rem]">
                      Simple Screen Recording
                    </h1>

                    <p
                      className={`${work_sans.className} text-[#616163] text-[1rem] md:text-[1.25rem] font-[400]`}
                    >
                      Effortless screen recording for everyone. Record with
                      ease, no tech expertise required.
                    </p>
                  </div>
                </div>
                <div className="grid [grid-template-columns:50px_1fr] md:space-x-[0.3rem]">
                  <div className="bg-[#413C6D] iconFix">
                    <DefaultImage src="/sendMsg.svg" width={32} height={32} />
                  </div>
                  <div className="space-y-[0.3rem]">
                    <h1 className="leading-[100%] text-[#1B233D] font-[600] text-[1.2rem] md:text-[1.75rem]">
                      Easy-to-Share URL
                    </h1>

                    <p
                      className={`${work_sans.className} text-[#616163] text-[1rem] md:text-[1.25rem] font-[400]`}
                    >
                      Share your recordings instantly with a single link. No
                      attachments, no downloads.
                    </p>
                  </div>
                </div>
                <div
                  className="grid [grid-template-columns:50px_1fr] md:space-x-[0.3rem]
                "
                >
                  <div className="bg-[#413C6D] iconFix p-[6px]">
                    <DefaultImage src="/revisit.svg" width={32} height={32} />
                  </div>
                  <div className="space-y-[0.3rem] items-start">
                    <h1 className="leading-[100%] text-[#1B233D] font-[600] text-[1.2rem] md:text-[1.75rem]">
                      Revisit Recordings
                    </h1>

                    <p
                      className={`${work_sans.className} text-[#616163] text-[1rem] md:text-[1.25rem] font-[400]`}
                    >
                      Access and review your past content effortlessly. Your
                      recordings, always at your fingertips.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-[2.5rem] max-w-[500px] mx-auto lg:mt-[0] lg:mx-[0] lg:max-w-[800px]">
                <Image
                  src="/helpPic.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[auto] w-[100%] rounded-[0.5rem]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section>
        <div className="h-[30px] w-[100%] bg-[#F4F6F8]"></div>

        <Wrapper>
          <div className="py-2 md:py-[3rem] lg:py-[4rem]">
            <h1
              className={`${sora.className} text-center font-[700] text-[#141414] text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]`}
            >
              How it works
            </h1>
            <div className="space-y-[2.5rem] mt-[3rem] max-w-[500px] mx-auto flex flex-col lg:max-w-[none] lg:space-y-[0] lg:grid lg:grid-cols-3 lg:[grid-gap:3rem] vlg:[grid-gap:5rem]">
              <Works
                no="1"
                title="Record Screen"
                text={`Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.`}
                textClass={`${work_sans.className} font-[400] text-[1rem] md:text-[1.25rem] text-center mt-1 text-[#616163]`}
              />
              <Works
                no="2"
                title="Share Your Recording"
                text="We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform."
                textClass={`${work_sans.className} font-[400] text-[1rem] md:text-[1.25rem] text-center mt-1 text-[#616163]`}
              />
              <Works
                no="3"
                title="Learn Effortlessly"
                text="Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone."
                textClass={`${work_sans.className} font-[400] text-[1rem] md:text-[1.25rem] text-center mt-1 text-[#616163]`}
              />
            </div>
          </div>
        </Wrapper>
      </section>

      <Footer workSans={work_sans.className} sora={sora.className} />
    </div>
  );
}
