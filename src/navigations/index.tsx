import { BrowserRouter } from "react-router-dom";
import SwapContainer from "../containers/Swap/Swap.container";

export default function App() {
  return (
    <BrowserRouter>
      <meta name="description" content="Project Prism" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <SwapContainer />
          </div>
        </div>
      </>
    </BrowserRouter>
  );
}