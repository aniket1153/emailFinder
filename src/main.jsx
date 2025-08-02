import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import "./index.css";
import App from "./App.jsx";
import { ToastProvider } from "./contexctprovider/toast.context.jsx";
import { BrowserRouter } from "react-router-dom";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<>Loading ....</>} persistor={persistor}>
        <BrowserRouter>
          <ToastProvider>
            {/* <PayPalScriptProvider
              options={{
                clientId:
                  "AVdJKQBbuwMjqqyRhvDCjCa1-HyOic9aVNVSsQwdiiK66JAHijqpBOsPOCr9W7-x2evA4a7bvGTXSSnE",
              }}
            > */}
            <App />
            {/* </PayPalScriptProvider> */}
          </ToastProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
