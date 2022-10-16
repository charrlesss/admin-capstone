import React from "react";
import "./assets/google-style.css";
import { InitialBackroundComponent } from "./features/shared/presentation/components/initial-backround-component";
import { useInterceptorAxios } from "./lib/interceptor-axios";

const App: React.FC = (): JSX.Element => {
  const { isAuthenticated } = useInterceptorAxios();
  return (
    <React.Fragment>
      <InitialBackroundComponent />
    </React.Fragment>
  );
};

export default App;
