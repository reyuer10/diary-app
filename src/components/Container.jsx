import React, { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
export default function Container() {
  const { isViewDiary } = useContext(GlobalContext);

  const [newTitle, setNewTitle] = useState(isViewDiary.newDiary.title);
  const [newBody, setNewBody] = useState(isViewDiary.newDiary.body);

  const [isEditValue, setIsEditValue] = useState(false);

  const handleEdit = () => {
    setIsEditValue(!isEditValue);
  };

  const handleSave = () => {
    setIsEditValue(isEditValue);
  };

  isEditValue;
  return (
    <div className="flex flex-col font-kanit">
      <div>
        {isEditValue && (
          <div>
            <button onClick={() => handleSave()}>Save</button>
            <button onClick={() => setIsEditValue(false)}>Cancel</button>
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

      <div className="border-2 border-slate-700 shadow ring-1 rounded-lg min-h-[80vh] w-[100vh] p-3 m-3">
        {isViewDiary ? (
          <>
            {isEditValue ? (
              <div>
                <input
                  onChange={(e) => setNewTitle(e.target.value)}
                  value={newTitle}
                  type="text"
                />
                <input
                  onChange={(e) => setNewBody(e.target.value)}
                  value={newBody}
                  type="text"
                />
              </div>
            ) : (
              <div>
                <div key={isViewDiary.id}>
                  <p>{isViewDiary.newDiary.title}</p>
                  <p>{isViewDiary.newDiary.body}</p>
                </div>
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
