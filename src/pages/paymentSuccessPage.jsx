// src/pages/SuccessPage.js
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import usePayment from "../hooks/usePayment";

const SuccessPage = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const planId = params.get("planId");
  const { handlePaymentSuccess, loading } = usePayment();

  const hasCalled = useRef(false);

  useEffect(() => {
    const process = async () => {
      if (token && !hasCalled.current) {
        hasCalled.current = true;
        await handlePaymentSuccess({ orderId: token, planId });
      }
    };
    process();
  }, [token, planId]);

  return (
    <div
      style={{
        padding: 20,
        color: loading ? "#333" : "green",
        textAlign: "center",
        fontSize: "1.5rem",
        alignSelf: "center",
      }}
    >
      {loading ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <svg
              className="animate-spin"
              style={{ height: 48, width: 48, marginBottom: 16 }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <div>Processing your payment...</div>
            <div style={{ color: "#eab308", fontSize: "1rem", marginTop: 8 }}>
              Please do not refresh or go back.
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>✅ Payment Successful</h2>
          <p>Thank you for your purchase.</p>
          <p>
            <strong>Order Token:</strong> {token}
          </p>
        </>
      )}
    </div>
  );
};

export default SuccessPage;
