import React, { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
export default function Container() {
  const { isViewDiary } = useContext(GlobalContext);

  const [newTitle, setNewTitle] = useState(
    isViewDiary && isViewDiary.newDiary && isViewDiary.newDiary.title
  );

  const [newBody, setNewBody] = useState(
    isViewDiary && isViewDiary.newDiary && isViewDiary.newDiary.body
  );


  const [isEditValue, setIsEditValue] = useState(false);

  const handleEdit = () => {
    setIsEditValue(!isEditValue);
  };

  const handleSave = () => {
    setIsEditValue(!isEditValue);
  };

  const handleCancelButton = () => {
    setIsEditValue(!isEditValue);
    setNewBody("");
    setNewTitle("");
  };

  return (
    <div className="flex flex-col font-kanit">
      <div>
        {isEditValue && (
          <div className="m-5 float-right space-x-5">
            <button
              className="px-4 py-1.5 bg-slate-300 text-slate-700 rounded-full"
              onClick={() => handleSave()}
            >
              Save
            </button>
            <button
              className="px-4 py-1.5 bg-slate-300 text-slate-700 rounded-full"
              onClick={() => handleCancelButton()}
            >
              Cancel
            </button>
          </div>
        )}
        {!isEditValue ? (
          <button
            onClick={() => handleEdit()}
            className="float-right m-5 px-4 py-1.5 rounded-full bg-slate-300 text-slate-700 font-bold"
          >
            Edit
          </button>
        ) : null}
      </div>
      {/*  */}
      <div className="border-2 border-slate-700 shadow ring-1 rounded-lg min-h-[40vh] w-[100vh] p-3 m-3 relative">
        {isViewDiary ? (
          <>
            {isEditValue ? (
              <div>
                <input
                  onChange={(e) => setNewTitle(e.target.value)}
                  value={newTitle}
                  type="text"
                  name="newTitle"
                  id="newTitle"
                />
                <input
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
                      <p className="font-bold text-xl mx-7">
                        {isViewDiary.newDiary.title}
                      </p>
                      <p className="px-5">
                        {isViewDiary.newDiary.body}
                      </p>
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
