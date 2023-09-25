import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
export default function Container() {
  const { isViewDiary } = useContext(GlobalContext);

  //   {
  //     console.log(isViewDiary.title);
  //   }
  return (
    <div className="border-2 border-slate-700 shadow ring-1 rounded-lg h-3/4 p-3 m-3">
      {isViewDiary && (
        <div>
          <div key={isViewDiary.id}>
            <p>{isViewDiary.newDiary.title}</p>
            <p>{isViewDiary.newDiary.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}
