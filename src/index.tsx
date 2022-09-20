import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminDashboardPage } from "./features/Administrative/presentation/pages";
import "./index.css";
import { WrapperWithSidebarContent } from "./components/wrapper-with-sidebar-content";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);



root.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path={process.env.REACT_APP_DOMAIN_URL} element={<App />} />

      <Route path={process.env.REACT_APP_DOMAIN_URL + "admin"}>
        <Route index element={<AdminDashboardPage />} />
        <Route
          path="facilities"
          element={
            <WrapperWithSidebarContent>
              <div>
                facilities schedule, active-shipment ,assigning drivers ,reserve
                transaction
              </div>
            </WrapperWithSidebarContent>
          }
        >
          <Route path="schedule" element={<div>schedule</div>} />
          <Route path="active-shipment" element={<div>active-shipment</div>} />
          <Route
            path="assigning-drivers"
            element={<div>assigning-drivers</div>}
          />
          <Route
            path="reserve-transaction"
            element={<div>reserve-transaction</div>}
          />
        </Route>

        <Route
          path={"transaction-document"}
          element={
            <WrapperWithSidebarContent>
              <div>transaction-document</div>
            </WrapperWithSidebarContent>
          }
        >
          <Route
            path="processing-shipping"
            element={<div>processing-shipping</div>}
          />
          <Route path="drivers-entries" element={<div>drivers-entries</div>} />
          <Route path="bills-landing" element={<div>bills-landing</div>} />
          <Route path="managing-budget" element={<div>managing-budget</div>} />
          <Route path="payroll" element={<div>payroll</div>} />
        </Route>

  
        <Route
          path={"legal"}
          element={
            <WrapperWithSidebarContent>
              <div>legal</div>
            </WrapperWithSidebarContent>
          }
        >
          <Route
            path="company-policies"
            element={<div>company-policies</div>}
          />
          <Route
            path="complians-management"
            element={<div>complians-management</div>}
          />
          <Route
            path="complians-transaction"
            element={<div>complians-transaction</div>}
          />
          <Route path="feedback" element={<div>feedback</div>} />
        </Route>

    

        <Route
          path={"visitor"}
          element={
            <WrapperWithSidebarContent>
              <div>visitor</div>
            </WrapperWithSidebarContent>
          }
        >
          <Route
            path="customer-queries"
            element={<div>customer-queries</div>}
          />
          <Route path="company-queries" element={<div>company-queries</div>} />
        </Route>
      </Route>

      <Route path="core-1" element={<div>core-1</div>} />
      <Route path="core-2" element={<div>core-2</div>} />
      <Route path="hr-1" element={<div>hr-2</div>} />
      <Route path="hr-2" element={<div>hr-2</div>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
