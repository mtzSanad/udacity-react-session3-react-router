import { useState } from "react";
import "./App.css";
import PageA from "./components/PageA";
import PageB from "./components/PageB";

function App() {
  const [page, setPage] = useState("main");

  let renderedPage = "";

  if (page === "main") {
    renderedPage = <div>Main Application</div>;
  } else if (page === "a") {
    renderedPage = <PageA />;
  } else if (page === "b") {
    renderedPage = <PageB />;
  }

  return (
    <div className="App">
      {renderedPage}
      <button
        onClick={() => {
          setPage("a");
        }}
      >
        Page A
      </button>
      <button
        onClick={() => {
          setPage("b");
        }}
      >
        Page B
      </button>
    </div>
  );
}

export default App;
