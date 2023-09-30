import { FC, ReactNode } from "react";

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="px-1 py-1.5 md:px-2 md:py-2 vlg:px-[4rem] vlg:py-[2rem] mx-auto max-w-[1800px]">
      {children}
    </div>
  );
};
export default Wrapper;
