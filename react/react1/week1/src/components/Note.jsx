import React from "react";
import { tasks } from "../todo-list";
import NoteList from "./NoteList";

function Note() {
  return tasks.map((e) => {
    return <NoteList todo={e.todo} time={e.time} key={e.id} />;
  });
}

export default Note;
