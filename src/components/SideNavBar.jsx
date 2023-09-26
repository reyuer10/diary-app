import React, { useState, useContext, useEffect } from "react";
import { PiBookBold } from "react-icons/pi";

import { BiSolidMoon, BiMoon } from "react-icons/bi";
import { GlobalContext } from "../GlobalContext";

export default function SideNavBar() {
  const {
    diary,
    setDiary,
    diaryList,
    setDiaryList,
    handleInputChange,
    setValueDate,
    valueDate,
  } = useContext(GlobalContext);

  const [newPost, setNewPost] = useState(false);
  const [toggleDark, setToggleDark] = useState(false);
  const handleToggleDark = () => {
    setToggleDark(!toggleDark);
  };

  const newPostToggle = () => {
    setNewPost(!newPost);
    setDiary({
      title: "",
      body: "",
    });
  };

  console.log(diary.title.length);

  const addDiary = () => {
    const stack = {
      newDiary: diary,
      id: diaryList.length === 0 ? 1 : diaryList[diaryList.length - 1].id + 1,
      dateCreated: new Date().toLocaleString()
    };

    setDiaryList([...diaryList, stack]);
    setNewPost(true);
    setDiary({
      title: "",
      body: "",
    });

    if (diary.title.length === 0) {
      diary.title = "No Title";
    } else {
      return diary.title;
    }

  };

  const { title, body } = diary;

  return (
    <div className="font-kanit">
      <div className="w-full justify-center flex flex-col">
        <div className="m-3 flex items-center justify-end space-x-2">
          <button className="px-4 py-1.5 rounded-full bg-slate-700 text-white font-normal text-sm">
            My profile
          </button>

          <button
            onClick={newPostToggle}
            className=" float-right transition-all  hover:bg-slate-500 ease-in-out duration-75 font-normal text-sm bg-slate-700 rounded-full text-white px-4 py-1.5"
          >
            {newPost ? <p>New Diary</p> : <p>Cancel</p>}
          </button>
          <button
            onClick={handleToggleDark}
            className="text-sm font-bold flex items-center bg-slate-700 px-2 py-2 rounded-full text-white"
          >
            {toggleDark ? <BiSolidMoon size={18} /> : <BiMoon size={18} />}
          </button>
        </div>
        <div className={newPost ? "hidden" : "flex flex-col"}>
          <input
            id="title"
            name="title"
            className="mx-5 mt-5 border-2 rounded-lg p-1"
            placeholder="Enter title"
            value={title}
            onChange={(e) => handleInputChange(e)}
            type="text"
          />
          <textarea
            onChange={(e) => handleInputChange(e)}
            id="body"
            name="body"
            value={body}
            placeholder="Enter your diary..."
            className="text-slate-700 p-3 border-2 border-box m-4 rounded-2xl shadow-lg resize-none overflow-auto"
            cols="30"
            rows="4"
          ></textarea>
          <button
            onClick={addDiary}
            className="flex items-center justify-center hover:bg-slate-600 ease-in-out duration-75 bg-slate-700 text-white font-semibold px-4 py-2 rounded-2xl mx-4"
          >
            <PiBookBold className="mx-1" />
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
