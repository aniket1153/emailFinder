import { PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalbutton() {
  return (
    <PayPalButtons
      style={{ layout: "horizontal" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "19.99", // Set your amount here
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then((details) => {
          alert(`Transaction completed by ${details.payer.name.given_name}`);
          console.log("Payment details:", details);
          // You can call your backend here to save the transaction
        });
      }}
      onError={(err) => {
        console.error("PayPal error", err);
      }}
    />
  );
}
