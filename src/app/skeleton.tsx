import { Skeleton } from "@mui/material";
import React from "react";
export const SkeletonPage = () => {
  return (
    <div className=" flex items-center justify-between  sm:max-w-[320px] cursor-pointer rounded-lg flex-col object-contain">
      <Skeleton
        sx={{ bgcolor: "grey.300" }}
        variant="rounded"
        className="w-full  sm:w-[320px] h-[270px] sm:h-[430px] "
      />
      <Skeleton className=" w-full max-w-[200px]  m-auto " />
      <Skeleton className=" max-w-[100px] w-full  m-auto " />
      <Skeleton
        className=" min-w-[140px] sm:max-w-[140px] p-[20px_0] w-full m-auto mt-2 "
        sx={{ bgcolor: "grey.300" }}
        variant="rectangular"
      />
    </div>
  );
};
