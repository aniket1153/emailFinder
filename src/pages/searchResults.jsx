import React from "react";
import SearchRecords from "../Components/searchBar";
import ResultsTable from "../Components/table";

const SearchResults = () => {
  return (
    <div>
      {" "}
      <div
        className={`" ${"bg-[#1b1f30] flex flex-col md:flex-row gap-5 rounded-2xl p-4 sm:p-6 md:p-9 shadow-xl border border-[#2e3248] w-[85%] mx-auto mt-10"}`}
      >
        {/* Textarea with gray placeholder */}
        <SearchRecords isvisible={true} /> 

        <ResultsTable />
      </div>
    </div>
  );
};

export default SearchResults;
