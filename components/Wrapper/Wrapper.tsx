import { FC, ReactNode } from "react";

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="px-1 pt-1.5 md:px-2 md:pt-2 vlg:px-[4rem] vlg:pt-[2rem] mx-auto max-w-[1800px]">
      {children}
    </div>
  );
};
export default Wrapper;
