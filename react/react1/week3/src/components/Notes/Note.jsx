import React, { useState } from "react";

function Note(props) {
  const { id, description, deadline, onDelete, onUpdate } = props;
  const [isDone, setIsDone] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(description);

  const handleClick = () => {
    setIsDone((prev) => !prev);
  };
  const handleEdit = () => {
    setIsEdit((prev) => !prev);
    onUpdate(id, editValue);
  };
  return (
    <ul style={{ backgroundColor: isDone && "red" }}>
      <button onClick={onDelete}>X</button>
      <button onClick={handleEdit}>{!isEdit ? "Edit" : "Update"}</button>
      {!isEdit ? (
        <li
          onClick={handleClick}
          style={{
            textDecoration: isDone && "line-through",
            cursor: "pointer",
          }}
        >
          {description}
        </li>
      ) : (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      )}

      <li>{deadline}</li>
    </ul>
  );
}
export default Note;
