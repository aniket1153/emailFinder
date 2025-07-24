// src/pages/CancelPage.js
import React from "react";

const CancelPage = () => {
  return (
    <div
      style={{
        padding: 20,
        color: "red",
        textAlign: "center",
        fontSize: "1.5rem",
        alignSelf: "center",
      }}
    >
      <h2>❌ Payment Cancelled</h2>
      <p>Your payment was not completed. You may try again.</p>
    </div>
  );
};

export default CancelPage;
