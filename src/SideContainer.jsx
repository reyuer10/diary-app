import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import StackValue from "./components/StackValue";

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
       <StackValue key={stack.id} stack={stack} handleOpenConfirmation={handleOpenConfirmation} />
        ))}
      </div>
    </>
  );
}
