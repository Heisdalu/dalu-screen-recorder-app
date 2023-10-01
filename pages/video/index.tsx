import { useRouter } from "next/router";

const VideoIndex = () => {
  const router = useRouter();

  const clickBtn = () => {
    router.push("/");
  };

  return (
    <div className="h-[200px] w-[200px] mx-auto mt-[3rem] space-y-1">
      <h1>Error 404</h1>
      <p>No page found</p>
      <button onClick={clickBtn} className="rounded-[5px] border-1 px-2 py-1">
        go back home
      </button>
    </div>
  );
};
export default VideoIndex;
