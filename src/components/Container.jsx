import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
export default function Container() {
  const { isViewDiary } = useContext(GlobalContext);

  return (
    <div className="flex flex-col font-kanit">
      <div>
        <button className="float-right m-5 px-4 py-1.5 rounded-full bg-slate-300 text-slate-700 font-bold">Edit</button>
      </div>
      <div className="border-2 border-slate-700 shadow ring-1 rounded-lg min-h-[80vh] w-[100vh] p-3 m-3">
        {isViewDiary && (
          <div>
            <div key={isViewDiary.id}>
              <p>{isViewDiary.newDiary.title}</p>
              <p>{isViewDiary.newDiary.body}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
