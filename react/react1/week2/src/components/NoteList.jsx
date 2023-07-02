import React, { useState } from "react";

function NoteList(props) {
  const { id, todo, onDelete } = props;
  const [underLine, setUnderline] = useState("");
  const [check, setCheck] = useState("check");
  const [myVar, setMyVar] = useState(true);

  const underLineStyle = () => {
    if (myVar) {
      setUnderline("line-through");
      setCheck("checked");
      setMyVar(false);
    } else {
      setUnderline("none");
      setCheck("check");
      setMyVar(true);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        X
      </button>
      <li style={{ textDecoration: underLine }}>{todo}</li>
      <button
        style={{ width: "100px", height: "20px" }}
        onClick={underLineStyle}
      >
        {check}
      </button>
    </>
  );
}
export default NoteList;
