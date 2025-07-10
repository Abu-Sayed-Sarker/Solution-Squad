import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Landingpage from "./Layouts/Landingpage.jsx";
import { BrowserRouter } from "react-router-dom";
import ClickSpark from "./Animation/ClickSpark/ClickSpark.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ClickSpark
        sparkColor="#00FF00"
        sparkSize={30}
        sparkRadius={30}
        sparkCount={12}
        duration={600}
        extraScale={1.5}
      >
        <Landingpage />
      </ClickSpark>
    </BrowserRouter>
  </StrictMode>
);
