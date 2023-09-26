import React from "react";
import { useState } from "react";

import SideNavBar from "./components/SideNavBar";
import SideContainer from "./SideContainer";
import Container from "./components/Container";
import { GlobalContext } from "../src/GlobalContext";

export default function App() {
<<<<<<< HEAD

=======
>>>>>>> 217e448ebe7b6f7addefba716a742a3948aef0d7
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

<<<<<<< HEAD
=======

>>>>>>> 217e448ebe7b6f7addefba716a742a3948aef0d7
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
<<<<<<< HEAD
        <div className="w-1/2">
=======
        <div>
>>>>>>> 217e448ebe7b6f7addefba716a742a3948aef0d7
          <Container />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}
