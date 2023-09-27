import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
export default function Container() {
  const {
    isViewDiary,
    isEditValue,
    setIsEditValue,
    setDiaryList,
    diaryList,
    setIsViewDiary,
  } = useContext(GlobalContext);

  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  useEffect(() => {
    if (isViewDiary) {
      setNewTitle(isViewDiary.newDiary.title);
      setNewBody(isViewDiary.newDiary.body);
    }
  }, [isViewDiary]);

  const handleEdit = (id, newTitleValue, newBodyValue) => {
    const diaryValueUpdate = diaryList.map((stack) => {
      if (stack.id === id) {
        return {
          ...stack,
          newDiary: {
            ...stack.newDiary,
            title: newTitleValue,
            body: newBodyValue,
          },
        };
      }
      return stack;
    });

    setDiaryList(diaryValueUpdate);
  };

  const onEditDiary = () => {
    handleEdit(isViewDiary.id, newTitle, newBody);
    setIsViewDiary(!isViewDiary);
    setIsEditValue(!isEditValue);
  };

  const handleSave = () => {
    setIsEditValue(!isEditValue);
  };

  const handleCancelButton = () => {
    setIsEditValue(!isEditValue);
    setNewTitle(isViewDiary.newDiary.title);
    setNewBody(isViewDiary.newDiary.body);
  };

  return (
    <div className="flex flex-col font-kanit">
      {/* Editing Button = Edit, Cancel and Save */}
      <div>
        {isEditValue && (
          <div className="m-5 float-right space-x-5">
            <button
              className="px-4 py-1.5 bg-slate-300 text-green-700 rounded-full font-bold"
              onClick={() => onEditDiary()}
            >
              Save changes
            </button>
            <button
              className="px-4 py-1.5 bg-slate-300 text-slate-700 rounded-full font-bold"
              onClick={() => handleCancelButton()}
            >
              Cancel
            </button>
          </div>
        )}
        {!isEditValue ? (
          <button
            onClick={() => handleSave()}
            className="float-right m-5 px-4 py-1.5 rounded-full bg-slate-300 text-slate-700 font-bold"
          >
            Edit
          </button>
        ) : null}
      </div>

      <div
        className={`${
          isEditValue ? "border-amber-500" : "border-slate-700"
        } border-2 transition-all duration-100 shadow ring-1 rounded-lg min-h-[40vh] w-[100vh] p-3 m-3 relative`}
      >
        {isViewDiary ? (
          <>
            {isEditValue ? (
              <div className="flex flex-col">
                <p className="text-lg text-slate-500">Title: </p>
                <input
                  className="font-bold text-xl mx-7 outline-none"
                  onChange={(e) => setNewTitle(e.target.value)}
                  value={newTitle}
                  type="text"
                  name="newTitle"
                  id="newTitle"
                />
                <p className="text-lg text-slate-500">Diary: </p>

                <input
                  className="px-5 outline-none"
                  onChange={(e) => setNewBody(e.target.value)}
                  value={newBody}
                  type="text"
                  name="newBody"
                  id="newBody"
                />
              </div>
            ) : (
              <>
                <div>
                  <div key={isViewDiary.id}>
                    <p className="font-bold text-xl mx-7 text-slate-700">
                      {isViewDiary.newDiary.title}
                    </p>
                    <p className="mx-7 text-normal">{isViewDiary.newDiary.body}</p>
                  </div>
                </div>
              </>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
