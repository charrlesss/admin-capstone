import React from "react";
import "./assets/google-style.css";
import { InitialBackroundComponent } from "./features/shared/presentation/components/initial-backround-component";

const App: React.FC = (): JSX.Element => {
  console.log(process.env.REACT_APP_DOMAIN_URL)
  return (
    <React.Fragment>
      <InitialBackroundComponent />
    </React.Fragment>
  );
};

export default App;
