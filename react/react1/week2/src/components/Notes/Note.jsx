import React, { useState } from "react";

function Note(props) {
  const { description, deadline, onDelete } = props;
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsDone((prev) => !prev);
  };

  return (
    <ul onClick={handleClick} style={{ backgroundColor: isDone && "red" }}>
      <button onClick={onDelete}>X</button>

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
export default Note;
