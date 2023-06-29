import React from "react";

function NoteList(props) {
  return (
    <ul>
      <li>{props.todo}</li>
      <li>{props.time}</li>
    </ul>
  );
}
export default NoteList;
