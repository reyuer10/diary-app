import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";

export default function Settings() {
  const navigate = useNavigate();
  const { isSettingsActive, setIsSettingsActive } = useContext(GlobalContext);

  const handleBack = () => {
    setIsSettingsActive(!isSettingsActive);
    navigate("/");
  };

  return (
    <div className="p-3 font-kanit">
      <div className=" border-[#303030] rounded-lg p-4 border-2">
        <div>
          <button
            className="font-bold bg-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-400 transition-all duration-300"
            onClick={() => handleBack()}
          >
            Back
          </button>
        </div>
        <div className="p-3">
          <button className="font-boldt text-[#303030]">Delete your account</button>
        </div>
        <div className="border-t-2 p-3 ">
          <button className="text-[#303030] font-bold">Log out</button>
        </div>
      </div>
    </div>
  );
}
