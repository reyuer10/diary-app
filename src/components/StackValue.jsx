import React from "react";
import { useContext } from "react";
import { PiXBold } from "react-icons/pi";
import { GlobalContext } from "../GlobalContext";

export default function StackValue({ stack, handleOpenConfirmation }) {
  const { isDeleteConfirm, handleView } = useContext(GlobalContext);
  return (
    <div
      onClick={() => handleView(stack)}
      key={stack.id}
      className="flex justify-between m-4 border-2 rounded-full relative cursor-pointer hover:bg-slate-300 transition-all"
    >
      <div>
        <p className="font-bold text-xl text-slate-500 mx-7">
          {stack.newDiary.title}{" "}
        </p>
        <p className="font-normal text-sm mx-7 text-slate-400">
          {stack.newDiary.body.length > 10
            ? stack.newDiary.body.slice(0, 7) + "..."
            : stack.newDiary.body}
        </p>
        <p>Date created: {stack.dateCreated.toLocaleString()}</p>
      </div>
      <div className=" flex items-center ">
        {!isDeleteConfirm && (
          <button
            className="rounded-full text-slate-500 mr-4"
            onClick={() => handleOpenConfirmation(stack)}
          >
            <PiXBold size={17} />
          </button>
        )}
      </div>
    </div>
  );
}
