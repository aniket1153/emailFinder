import React, { useState, useEffect, useRef } from "react";
import { RiSearchEyeLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEmailAccountFilters } from "../redux/slices/emailaccount.slice";
import { showGlobalToast } from "../utils/toastService";
import { pricingPath, searchPath } from "../App";

const domainRegex =
  /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[A-Za-z]{2,}$/;

const SearchRecords = ({ isvisible }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const { user } = useSelector((state) => state.auth);
  const debounceTimeout = useRef();
  const { filters } = useSelector((state) => state.emailAccounts);

  // Debounce search
  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      if (searchValue.length > 0 && domainRegex.test(searchValue)) {
        // dispatch(setEmailAccountFilters({ email: searchValue }));
      }
    }, 500);
    return () => clearTimeout(debounceTimeout.current);
  }, [searchValue]);

  // Sync with filters
  useEffect(() => {
    if (searchValue !== filters.email) {
      setSearchValue(filters.email || "");
    }
  }, [filters.email]);

  const handleTable = () => {
    if (searchValue.length === 0) {
      showGlobalToast("Please enter a domain name.", "error");
      return;
    }

    if (!domainRegex.test(searchValue)) {
      showGlobalToast(
        "Please enter a valid domain name (e.g., example.com)",
        "error"
      );
      return;
    }

    if (!user?.subscription) {
      navigation(pricingPath);
      showGlobalToast("Please subscribe to access this feature.", "error");
      return;
    }

    if (!isvisible && searchValue.length > 0) {
      navigation(searchPath);
    }

    dispatch(setEmailAccountFilters({ email: searchValue }));
  };

  return (
    <div
      style={{ zIndex: 1000 }}
      className={`${
        isvisible
          ? "max-w-sm w-full mt-6 flex flex-col p-4 rounded-2xl shadow-xl bg-[#1C212E] border border-[#5d616E]"
          : "w-full"
      }`}
    >
      {isvisible && (
        <p className="text-gray-300 text-center text-lg font-medium">
          Search Records
        </p>
      )}

      <div
        className={`${
          isvisible ? "bg-white rounded-xl mt-3" : "bg-white rounded-md"
        } w-full`}
      >
        <textarea
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleTable();
            }
          }}
          rows={isvisible ? 8 : 4}
          className="w-full resize-none text-black p-3 focus:outline-none shadow-inner placeholder-gray-500 rounded-xl"
          placeholder="Type or Paste Domain Address:"
        />
      </div>

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
