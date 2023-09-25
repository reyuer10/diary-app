import React from "react";
import { useState } from "react";

import SideNavBar from "./components/SideNavBar";
import SideContainer from "./SideContainer";
import Container from "./components/Container";
import { GlobalContext } from "../src/GlobalContext";

export default function App() {
  const [diaryList, setDiaryList] = useState([]);
  const [diary, setDiary] = useState({
    title: "",
    body: "",
  });

  const [isViewDiary, setIsViewDiary] = useState(false);
  const [editNewValue, setEditNewValue] = useState(false);

  const handleView = (item) => {
    setIsViewDiary(!isViewDiary);
    setIsViewDiary(item);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDiary({ ...diary, [name]: value });
  };


  return (
    <GlobalContext.Provider
      value={{
        diary,
        setDiary,
        diaryList,
        setDiaryList,
        isViewDiary,
        setIsViewDiary,
        handleView,
        editNewValue,
        setEditNewValue,
        handleInputChange,
      }}
    >
      <div className="flex">
        <div className="w-[300px] border-r-2 relative h-screen">
          <SideNavBar />
          <SideContainer />
        </div>
        <div>
          <Container />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}
