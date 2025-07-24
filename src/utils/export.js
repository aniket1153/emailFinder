import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { showGlobalToast } from "./toastService";
export const exportData = (data) => {
  if (!data || data.length === 0) {
    showGlobalToast("No data selected for export", "error");
    console.error("No data available for export");
    return;
  }
  // Exclude unwanted fields
  const filteredData = data.map(
    ({ _id, __v, createdAt, updatedAt, ...rest }) => rest
  );
  const worksheet = XLSX.utils.json_to_sheet(filteredData);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "EmailAccounts");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const file = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  saveAs(file, `email_accounts_export_${Date.now()}.xlsx`);
};
