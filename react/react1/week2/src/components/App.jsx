import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NotePage from "../pages/NotePage";

function App() {
  return (
    <>
      <Header />
      <div className="note">
        <NotePage />
      </div>
      <Footer />
    </>
  );
}

export default App;
