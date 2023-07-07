import React, { useState } from "react";

function NoteList(props) {
  const { id, description, deadline, onDelete } = props;
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    return setIsDone((prev) => !prev);
  };

  return (
    <ul onClick={handleClick} style={{ backgroundColor: isDone && "red" }}>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        X
      </button>
      <li
        style={{
          textDecoration: isDone && "line-through",
        }}
      >
        {description}
      </li>
      <li>{deadline}</li>
    </ul>
  );
}
export default NoteList;
