import React from "react";
import { tasks } from "../todo-list";

function NoteList(props) {
  return (
    <ul>
      <li>{props.todo}</li>
      <li>{props.time}</li>
    </ul>
  );
}
function Note() {
  return tasks.map((e) => {
    return <NoteList todo={e.todo} time={e.time} />;
  });
}

export default Note;
