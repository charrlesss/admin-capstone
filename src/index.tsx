import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { AdminDashboardPage } from "./features/shared/presentation/pages";
import "./assets/index.css";
import { store } from "./config/store";
import { AboutPages } from "./pages/about.pages";
import { ContactPages } from "./pages/contact.pages";
import { LoadingPage } from "./pages/loading.page";
import { ProtectedRoutesComponent } from "./component/protected-routes-component";
import { FalitiesPage } from "./features/facilities/pages/falities.page";
import { ScheduleYourVisitPages } from "./features/sched/pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Routes>
        <Route  element={<LoadingPage />}>
          <Route path={process.env.REACT_APP_DOMAIN_URL} element={<App />} />
          <Route
            path={process.env.REACT_APP_DOMAIN_URL + "/reservation"}
            element={<div>reservation</div>}
          />
          <Route
            path={process.env.REACT_APP_DOMAIN_URL + "/features"}
            element={<AboutPages />}
          />
          <Route
            path={process.env.REACT_APP_DOMAIN_URL + "/contact"}
            element={<ContactPages />}
          />

          <Route
            path={process.env.REACT_APP_DOMAIN_URL + "dashboard"}
            element={<ProtectedRoutesComponent/>}
          >
            <Route index element={<AdminDashboardPage />} />
            <Route path='facilities' element={<FalitiesPage />} />
            <Route path='sched' element={<ScheduleYourVisitPages />} />

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
