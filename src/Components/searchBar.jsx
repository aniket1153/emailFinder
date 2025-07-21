import React from "react";
import { RiSearchEyeLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchEmailAccountsRequested } from "../redux/slices/emailaccount.slice";

const SearchRecords = ({ isvisible }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const handleTable = () => {
    if (!isvisible) {
      navigation("/searchresults");
    }
    dispatch(fetchEmailAccountsRequested());
  };
  return (
    <div
      className={` ${
        isvisible
          ? "w-[25%] mt-6 flex flex-col p-4 rounded-2xl  shadow-xl bg-[#1C212E] border border-[#5d616E]"
          : "w-full"
      }`}
    >
      {" "}
      {isvisible && (
        <p className="text-gray-300 text-center text-lg">Search Records</p>
      )}
      <div
        className={`${
          isvisible
            ? "bg-white h-[255px] w-[255px] rounded-xl mt-3 mb-80 "
            : "bg-white w-full h-44 rounded-md"
        }`}
      >
        <textarea
          className="w-full resize-none  text-black pl-2.5 pt-1.5 focus:outline-none shadow-inner placeholder-gray-500"
          placeholder={`Type or Paste Domain Address:`}
        ></textarea>
        <div className="flex flex-col gap-2 pl-2.5 ">
          <p className="text-black">company.com</p>
          <p className="text-black">google.com</p>
          <p className="text-black">github.com</p>
        </div>
      </div>
      {/* Search Button */}
      <button
        onClick={handleTable}
        className="w-full mt-6 py-3 rounded-full text-white font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-[#6e61e6] to-[#ef497a] hover:from-[#5a4edc] hover:to-[#e73368] transition duration-300"
      >
        Search Records
        <RiSearchEyeLine color="white" size={23} />
      </button>
    </div>
  );
};

export default SearchRecords;
