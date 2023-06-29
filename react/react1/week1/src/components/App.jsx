import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <>
      <Header />
      <div className="note">
        <Note />
      </div>
      <Footer />
    </>
  );
}

export default App;
