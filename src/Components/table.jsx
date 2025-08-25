import React, { useState, useMemo, useEffect } from "react";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdBusiness,
  MdGroup,
  MdScience,
} from "react-icons/md";
import CompanyLogo from "../assets/d.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEmailAccountsRequested,
  updatePagination,
  setSelectedAccounts,
  clearSelectedAccounts,
  selectAllAccounts,
  updateSortData,
} from "../redux/slices/emailaccount.slice";
import { exportData } from "../utils/export";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const pageSizeDropdownOptions = [100, 200, 500, 1000];

const SortHeader = ({ column, label, sort, order, handleSort }) => (
  <button
    onClick={() => handleSort(column)}
    className="flex items-center gap-1 hover:text-purple-600 transition-colors"
  >
    {label}
    {sort === column ? (
      order === "asc" ? (
        <AiOutlineArrowUp className="inline-block" />
      ) : (
        <AiOutlineArrowDown className="inline-block" />
      )
    ) : (
      <span className="opacity-30">
        <AiOutlineArrowUp className="inline-block" />
      </span>
    )}
  </button>
);

const TableLoader = ({ rows = 10, cols = 5 }) => (
  <>
    {Array.from({ length: rows }).map((_, rIdx) => (
      <tr key={rIdx} className="border-b animate-pulse">
        {Array.from({ length: cols }).map((_, cIdx) => (
          <td key={cIdx} className="px-4 py-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </td>
        ))}
      </tr>
    ))}
  </>
);

const ResultsTable = () => {
  const {
    accounts,
    page,
    limit,
    total,
    totalPages,
    filters,
    loading,
    selectedAccounts,
    sort,
    order,
  } = useSelector((state) => state.emailAccounts);

  const dispatch = useDispatch();

  // Select all/deselect all logic

  const [atTop, setAtTop] = useState(true);

  const handleSort = (column) => {
    if (sort === column) {
      dispatch(updateSortData({ order: order === "asc" ? "desc" : "asc" }));
    } else {
      dispatch(updateSortData({ order: "asc", sort: column }));
    }
  };

  const handleSelectAccount = (accountNew) => {
    if (checkIsSelected(accountNew._id)) {
      // Deselect: remove by _id
      dispatch(
        setSelectedAccounts(
          selectedAccounts.filter((account) => account._id !== accountNew._id)
        )
      );
    } else {
      // Select: add only if not already present
      dispatch(setSelectedAccounts([...selectedAccounts, accountNew]));
    }
  };

  const handleSelectAll = () => {
    if (selectedAccounts.length === accounts.length) {
      dispatch(clearSelectedAccounts());
    } else {
      dispatch(selectAllAccounts());
    }
  };

  const goToPage = (page) => {
    dispatch(updatePagination({ page }));
  };

  const goToPrevPage = () => {
    dispatch(updatePagination({ page: Math.max(page - 1, 1) }));
  };

  const goToNextPage = () => {
    dispatch(updatePagination({ page: Math.min(page + 1, totalPages) }));
  };

  const changePageSize = (size) => {
    dispatch(updatePagination({ limit: size, page: 1 })); // Reset to first page
  };

  const checkIsSelected = (id) => {
    for (let i = 0; i < selectedAccounts.length; i++) {
      if (selectedAccounts[i]._id === id) {
        return true;
      }
    }
    return false;
  };

  const handleClick = () => {
    if (atTop) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    dispatch(fetchEmailAccountsRequested());
  }, [filters, page, limit, sort, order]);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className=" w-full md:max-w-[78%] bg-white rounded-xl mt-7 "
      style={{ zIndex: 1000 }}
    >
      {/* Header and pagination */}
      <div className="flex flex-col md:flex-row justify-between md:justify-evenly md:gap-14 gap-4 mt-6 px-4">
        <div className="flex items-start gap-3 mr-2">
          {accounts.length > 0 && (
            <>
              <input
                type="checkbox"
                className="mt-3 h-4 w-4 cursor-pointer"
                checked={selectedAccounts.length === accounts.length}
                onChange={handleSelectAll}
                indeterminate={
                  selectedAccounts.length < accounts.length ? "true" : undefined
                }
              />
              <p className="text-black mb-2 mt-2">
                {" "}
                {selectedAccounts.length > 0 ? (
                  <span>{selectedAccounts.length} selected</span>
                ) : (
                  <span>Select all</span>
                )}
              </p>
            </>
          )}
        </div>
        <div className="flex flex-row gap-5">
          {selectedAccounts.length > 0 && (
            <button
              onClick={() => exportData(selectedAccounts)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl shadow hover:scale-95 hover:shadow-lg transition-all duration-300"
            >
              <FiDownload className="w-4 h-4" />
              <span>Download</span>
            </button>
          )}
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-9">
            <p className="text-black font-inter font-semibold text-sm md:text-base text-center mt-4 ml-12">
              {total.toLocaleString()} records
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <div className="text-black text-sm text-center md:text-left mt-5">
              Page {page} of {totalPages}
            </div>
            <div className="flex gap-1 justify-center mt-4">
              <button
                style={{ zIndex: 100000 }}
                onClick={goToPrevPage}
                disabled={page === 1}
              >
                <BiLeftArrowCircle
                  color={page === 1 ? "#ccc" : "black"}
                  size={28}
                />
              </button>
              <button
                style={{ zIndex: 100000 }}
                onClick={goToNextPage}
                disabled={page === totalPages}
              >
                <BiRightArrowCircle
                  color={page === totalPages ? "#ccc" : "black"}
                  size={28}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table or Loader */}
      <div className="overflow-x-auto p-4">
        {loading ? (
          <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg">
            <thead className="bg-gray-100 text-xs md:text-sm">
              <tr>
                <th className="px-5 py-3 text-left font-medium text-gray-700">
                  Name
                </th>
                <th className="px-5 py-3 text-left font-medium text-gray-700">
                  Email
                </th>
                <th className="px-5 py-3 text-left font-medium text-gray-700">
                  Website
                </th>
                <th className="px-12 py-3 text-left font-medium text-gray-700">
                  Company
                </th>
                <th c20ame="px-5 py-3 text-left font-medium text-gray-700">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(limit)].map((_, idx) => (
                <tr key={idx} className="border-t animate-pulse"></tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg">
            <thead className="bg-gray-100 text-xs md:text-sm">
              <tr>
                <th className="px-5 py-3 text-left font-medium text-gray-700">
                  <button
                    onClick={() => {
                      handleSort("name");
                    }}
                  >
                    Name {sort === "name" && (order === "asc" ? "▲" : "▼")}
                  </button>
                </th>
                <th className="px-5 py-3 text-left font-medium text-gray-700">
                  <button
                    onClick={() => {
                      handleSort("email");
                    }}
                  >
                    Email {sort === "email" && (order === "asc" ? "▲" : "▼")}
                  </button>
                </th>
                <th className="px-5 py-3 text-left font-medium text-gray-700">
                  <button
                    onClick={() => {
                      handleSort("website");
                    }}
                  >
                    Website{" "}
                    {sort === "website" && (order === "asc" ? "▲" : "▼")}
                  </button>
                </th>
                <th className="px-12 py-3 text-left font-medium text-gray-700">
                  <button
                    onClick={() => {
                      handleSort("companyname");
                    }}
                  >
                    Company{" "}
                    {sort === "companyname" && (order === "asc" ? "▲" : "▼")}
                  </button>
                </th>
                <th className="px-5 py-3 text-left font-medium text-gray-700">
                  <button
                    onClick={() => {
                      handleSort("role");
                    }}
                  >
                    Role {sort === "role" && (order === "asc" ? "▲" : "▼")}
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {accounts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-5 text-gray-500">
                    No data available
                  </td>
                </tr>
              ) : (
                accounts.map((person, index) => (
                  <tr key={index} className="border-t text-sm">
                    <td className="px-4 py-3">
                      <div className="flex items-start space-x-2">
                        <input
                          onChange={() => handleSelectAccount(person)}
                          type="checkbox"
                          className="mt-1 cursor-pointer"
                          checked={checkIsSelected(person._id)}
                        />
                        {person.linkedin && (
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <FaLinkedin size={18} />
                          </a>
                        )}
                        <div>
                          <div className="font-medium text-gray-800">
                            {person.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MdEmail onClick={() => {}} className="w-4 h-4" />
                          <span>{person.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {/* <div className="flex items-center space-x-3">
                        <img
                          src={CompanyLogo}
                          alt="logo"
                          className="h-[52px] w-[52px] rounded-full shadow-lg object-contain"
                        />
                        <div>
                          <div className="font-medium text-gray-800">
                            {person.company}
                          </div>
                          <div className="text-sm text-gray-400 flex items-center">
                            <MdLocationOn className="w-4 h-4 mr-1" />
                            {person.location}
                          </div>
                        </div>
                      </div> */}

                      <div className="text-gray-500">{person.website}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-gray-500">{person.companyname}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      <div className="text-gray-500">{person.role}</div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
      {/* Toggle Scroll Button */}
      <button
        onClick={handleClick}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
        aria-label={atTop ? "Scroll to bottom" : "Scroll to top"}
      >
        {atTop ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        )}
        <span className="hidden md:inline">
          {atTop ? "Go to bottom" : "Go to top"}
        </span>
      </button>
    </div>
  );
};

export default ResultsTable;
