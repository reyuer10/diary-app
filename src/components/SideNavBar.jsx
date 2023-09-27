import React, { useState, useContext } from "react";
import { PiBookBold } from "react-icons/pi";

import { BiSolidMoon, BiMoon } from "react-icons/bi";
import {
  PiGearSixBold,
  PiGearSixFill,
  PiUserBold,
  PiNotebookBold,
  PiNotebookFill,
} from "react-icons/pi";
import { GlobalContext } from "../GlobalContext";
import { useNavigate } from "react-router-dom";
export default function SideNavBar() {
  const {
    diary,
    setDiary,
    diaryList,
    setDiaryList,
    handleInputChange,
    isSettingsActive,
    setIsSettingsActive,
  } = useContext(GlobalContext);

  const navigate = useNavigate();
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

  const handleSettings = () => {
    setIsSettingsActive(!isSettingsActive);
    navigate("/settings");
  };

  const addDiary = () => {
    const stack = {
      newDiary: diary,
      id: diaryList.length === 0 ? 1 : diaryList[diaryList.length - 1].id + 1,
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
        <div className="m-3 flex space-x-1 justify-evenly border-b py-2 border-slate-300">
          <button className="text-[#303030]">
            <PiUserBold size={25} />
          </button>

          <button
            onClick={newPostToggle}
            className="transition-all ease-in-out duration-75 font-normal text-sm  text-[#303030]"
          >
            {newPost ? (
              <PiNotebookBold size={25} />
            ) : (
              <PiNotebookFill size={25} />
            )}
          </button>
          <button
            onClick={handleToggleDark}
            className=" flex items-center text-[#303030]"
          >
            {toggleDark ? <BiSolidMoon size={25} /> : <BiMoon size={25} />}
          </button>
          <button
            className="text-[#303030]"
            onClick={() => handleSettings()}
          >
            {isSettingsActive ? (
              <PiGearSixFill size={25} />
            ) : (
              <PiGearSixBold size={25} />
            )}
          </button>
        </div>
        <div className={newPost ? "hidden" : "flex flex-col"}>
          <input
            id="title"
            name="title"
            className="mx-5 mt-5 border-2 rounded-lg p-1 pl-3"
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
