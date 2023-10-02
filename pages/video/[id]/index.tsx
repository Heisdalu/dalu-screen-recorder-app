import DefaultImage from "@/components/Default/DefaultImage";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Wrapper from "@/components/Wrapper/Wrapper";
import { inter, sora, work_sans } from "@/font/font";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState, FC } from "react";
import Link from "next/link";

interface Props {
  id: string;
  videoPath: string;
}

const VideoDetail: FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Props>({ id: "", videoPath: "" });
  const [error, setError] = useState(false);
  const { query } = useRouter();


  useEffect(() => {
    const getVideoDetails = async () => {
      if (query.id) {
        try {
          const res = await axios(
            `https://seashell-app-4jicj.ondigitalocean.app/api/video/get/${query.id}`
          );
          setData({ ...res.data.data });
          setError(false);
        } catch (e: any) {
          console.log(e.message);
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    };

    getVideoDetails();
  }, [query.id]);

  console.log(loading, data, error);

  if (loading) {
    return (
      <div className="h-[500px] animate-pulse mx-auto grid place-items-center">
        Loading...Please wait
      </div>
    );
  }

  if (error && !loading) {
    return (
      <div className="h-[500px] mx-auto grid place-items-center">
        <div className="flex flex-col justify-center space-y-2">
          <p className="font-[1.5rem] md:text-[2.5rem]">
            No video available with that specified id
          </p>
          <Link
            href="/"
            className="text-[1rem] text-[#9D9D9D] px-2 py-0.5 border-1 border-[#CFCFCF] mx-auto text-center rounded-[0.25rem]"
          >
            Go back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={inter.className}>
      <Wrapper>
        <NavBar workSans={work_sans.className} sora={sora.className} />

        <div className="space-y-2 my-[2.5rem] vlg:grid vlg:grid-cols-2 vlg:[grid-gap:3rem] vlg:py-[2rem] vlg:space-y-[0]">
          <div className="vlg:border-r-[1px] vlg:border-[#9D9D9D] space-y-1 md:space-y-[2.5rem] vlg:pr-[3rem]">
            <h1
              className={`${sora.className} text-[1.5rem] md:text-[2.8125rem] font-[700]`}
            >
              Your video is ready!
            </h1>
            <div className="space-y-[1.5rem] md:space-y-[2.5rem] lg:space-y-[3rem]">
              <div className="flex flex-col space-y-[0.5625rem]">
                <h1
                  className={`${sora.className} text-[#727272] text-[1rem] font-[500]`}
                >
                  Name
                </h1>
                <div className="flex items-center space-x-1">
                  <span
                    className={`${sora.className} font-[600] text-[#413C6D] text-[1.1rem] md:text-[1.5rem]`}
                  >
                    Untitled_Video_{data.id}
                  </span>
                  <span>
                    <DefaultImage src="/edit.svg" width={32} height={32} />
                  </span>
                </div>
              </div>

              <div className="max-w-[544px] border-1 bg-[#b6b3c633] rounded-[1rem] border-[0.5px] border-[#E7E7ED] px-[1.5rem] py-[0.75rem] flex space-x-1 vlg:max-w-[none]">
                <input
                  type="text"
                  className={`${work_sans.className} text-[#434343cc] text-[1rem] md:text-[1.125rem] bg-transparent w-[100%] outline-none`}
                  placeholder="enter email of receiver"
                />
                <button className="text-white text-[1rem] font-[500] bg ml-auto py-[0.625rem] px-[1.125rem] rounded-[0.5rem] bg-[#605C84]">
                  Send
                </button>
              </div>

              <div className="max-w-[580px] flex flex-col space-y-[5px] md:max-w-[none] md:space-y-1">
                <h1 className={`${sora.className} text-[#141414]`}>
                  Video Url
                </h1>
                <div className="flex items-center p-[0.75rem] space-x-1 bg-[#FAFAFA] border-[0.5px] border-[#929292] rounded-[1rem]">
                  <div
                    className={`w-[100%] ${work_sans.className} overflow-hidden [text-overflow:ellipsis] md:overflow-auto md:w-auto`}
                  >
                    {`https://dalu-screen-recorder-app.vercel.app/video/${data.id}`}
                  </div>
                  <button className="flex items-center border-1 border-[#120B48] p-[0.3rem] md:py-[0.625rem] md:px-[1.125rem] rounded-[0.5rem] space-x-0.5">
                    <span>
                      <DefaultImage src="/copy.svg" width={20} height={20} />
                    </span>
                    <span className="text-[#120B48] font-[500]">Copy</span>
                  </button>
                </div>
              </div>

              <div className="space-y-[0.5rem] hidden vlg:block">
                <h1 className={`${sora.className} font-[600] text-[#08051E]`}>
                  Share Video
                </h1>
                <div className="flex flex-col md:flex-row max-w-[150px] md:max-w-[none] space-y-1 md:space-x-1 md:space-y-[0]">
                  <button className="rounded-[0.375rem] flex border-[1px] border-[#0A0628] px-1 py-[0.75rem] space-x-0.5 items-center">
                    <span>
                      <DefaultImage src="/fb.svg" height={24} width={24} />
                    </span>
                    <span className="text-[#08051E] font-[500] text-[1rem]">
                      Facebook
                    </span>
                  </button>
                  <button className="rounded-[0.375rem] flex border-[1px] border-[#0A0628] px-1 py-[0.75rem] space-x-0.5 items-center">
                    <span>
                      <DefaultImage src="/whatapp.svg" height={24} width={24} />
                    </span>
                    <span className="text-[#08051E] font-[500] text-[1rem]">
                      Whatapps
                    </span>
                  </button>
                  <button className="rounded-[0.375rem] flex border-[1px] border-[#0A0628] px-1 py-[0.75rem] space-x-0.5 items-center">
                    <span>
                      <DefaultImage
                        src="/telegram.svg"
                        height={24}
                        width={24}
                      />
                    </span>
                    <span className="text-[#08051E] font-[500] text-[1rem]">
                      Telagram
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="py-1 ">
            <video
              src={data.videoPath}
              controls
              height={400}
              width={400}
              className="w-[100%]"
            ></video>

            <div
              className={`${sora.className} mt-[2rem] md:mt-[4rem] space-y-1`}
            >
              <h1 className="text-[1.2rem] md:text-[1.5rem] text-black font-[600]">
                Transcript
              </h1>

              <div className="text-[1rem] text-[#9D9D9D] pr-0.5 py-0.5 border-1 border-[#CFCFCF] max-w-[100px] text-center rounded-[0.25rem]">
                English
              </div>

              <div className="text-[1rem]">No Transcript provided.</div>
            </div>
          </div>
        </div>

        <div
          className={` ${sora.className} max-w-[600px] mx-auto py-[2rem] text-center font-[600] text-[1.2rem] md:text-[1.5rem]`}
        >
          <p>
            To ensure the availability and privacy of your video, we recommend
            saving it to your account.
          </p>

          <button className="my-2 text-white bg-[#120B48] text-[1rem] py-1 px-2 rounded-[0.5rem]">
            Save video
          </button>
          <div
            className={`${sora.className} font-[600] flex flex-col md:flex-row justify-center`}
          >
            <span className="md:pr-[5px] text-[#7E7E7E]">
              Don’t have an account?{" "}
            </span>
            <span className="underline text-[#120B48]"> Create account</span>
          </div>
        </div>
      </Wrapper>
      <div className="mt-1 md:mt-[3rem]">
        <Footer sora={sora.className} workSans={work_sans.className} />
      </div>
    </div>
  );
};
export default VideoDetail;
