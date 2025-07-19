import { useEffect, useRef } from "react";

// Usage: <div ref={paypalRef}></div> in your component
export default function usePayment({
  amount,
  currency = "USD",
  onSuccess,
  onError,
}) {
  const paypalRef = useRef(null);

  useEffect(() => {
    if (!window.paypal || !paypalRef.current) return;

    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                  currency_code: currency,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          try {
            const details = await actions.order.capture();
            if (onSuccess) onSuccess(details);
          } catch (err) {
            if (onError) onError(err);
          }
        },
        onError: (err) => {
          if (onError) onError(err);
        },
      })
      .render(paypalRef.current);
  }, [amount, currency, onSuccess, onError]);

  return paypalRef;
}
