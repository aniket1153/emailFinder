import React, { useState, useEffect, useRef } from "react";
import { RiSearchEyeLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEmailAccountFilters } from "../redux/slices/emailaccount.slice";
import { showGlobalToast } from "../utils/toastService";
import { pricingPath, searchPath } from "../App";

const SearchRecords = ({ isvisible }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setsearchValue] = useState("");

  const { user } = useSelector((state) => state.auth);
  const debounceTimeout = useRef();

  const { filters } = useSelector((state) => state.emailAccounts);

  // Debounce searchValue changes
  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      if (searchValue.length > 0) {
        dispatch(setEmailAccountFilters({ email: searchValue }));
      }
    }, 500);
    return () => clearTimeout(debounceTimeout.current);
  }, [searchValue, dispatch]);

  useEffect(() => {
    setsearchValue(filters.email || "");
  }, [filters.email]);

  const handleTable = () => {
    if (!user?.subscription) {
      navigation(pricingPath);
      showGlobalToast("Please subscribe to access this feature.", "error");
      return;
    } else {
      if (!isvisible && searchValue.length > 0) {
        navigation(searchPath);
      }
      // Immediate search on button click
      dispatch(setEmailAccountFilters({ email: searchValue }));
    }
  };
  return (
    <div
      style={{ zIndex: 1000 }}
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
          value={searchValue}
          onChange={(e) => setsearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleTable();
            }
          }}
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
        className="w-full mt-6 py-3 rounded-full text-white font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-[#6e61e6] to-[#ef497a] hover:from-[#5a4edc] hover:to-[#e73368] transition duration-300 cursor-pointer"
      >
        Search Records
        <RiSearchEyeLine color="white" size={23} />
      </button>
    </div>
  );
};

export default SearchRecords;
