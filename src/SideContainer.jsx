import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export default function SideContainer() {
  const { diaryList, handleView, isViewDiary } = useContext(GlobalContext);

  //   const diaryTitleMinimize = diary.title.length > 10
  //   diaryTitleMinimize ? diary.body.length = 5 + "..." : true

  return (
    <>
      <div className="font-kanit">
        {diaryList.map((stack) => (
          <div
            onClick={() => handleView(stack)}
            key={stack.id}
            className="m-4 border-2 rounded-full relative cursor-pointer hover:bg-slate-300 transition-all"
          >
            <p className="font-bold text-xl text-slate-500 mx-7">
              {stack.newDiary.title}{" "}
            </p>
            <p className="font-normal text-sm mx-7 text-slate-400">
              {stack.newDiary.body}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
