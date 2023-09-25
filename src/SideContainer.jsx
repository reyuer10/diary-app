import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { PiXBold } from "react-icons/pi";

export default function SideContainer() {
  const { diaryList, handleView, setDiaryList, setIsViewDiary } =
    useContext(GlobalContext);

  const [isDeleteConfirm, setIsDeleteConfirm] = useState(false);

  const deleteDiary = (id) => {
    setDiaryList(diaryList.filter((task) => task.id !== id));
    setIsDeleteConfirm(!isDeleteConfirm);
    setIsViewDiary(false);
  };

  const handleOpenConfirmation = (itemDelete) => {
    setIsDeleteConfirm(!isDeleteConfirm);
    setIsDeleteConfirm(itemDelete);
  };

  return (
    <>
      <div className="font-kanit">
        {isDeleteConfirm && (
          <div className="flex m-4 rounded-2xl justify-between space-x-10 p-3 text-sm text-slate-700 border-2 border-orange-300 bg-slate-200">
            <div>
              <p>Are you sure you want to delete?</p>
            </div>
            <div>
              <button
                className="hover:text-slate-400"
                onClick={() => deleteDiary(isDeleteConfirm.id)}
              >
                yes
              </button>
              <button
                className="hover:text-slate-400"
                onClick={() => setIsDeleteConfirm(false)}
              >
                cancel
              </button>
            </div>
          </div>
        )}
        {diaryList.map((stack) => (
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
                {stack.newDiary.body.length > 10 ?
                  stack.newDiary.body.slice(0, 7) + "..." : stack.newDiary.body}
              </p>
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
        ))}
      </div>
    </>
  );
}
