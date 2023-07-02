import React, { useState } from "react";
import { todos } from "../todo-list";
import NoteList from "./NoteList";

function Note() {
  const [noteValue, setNoteValue] = useState("");
  const [tasks, setTasks] = useState(todos);

  const addTodo = () => {
    if (noteValue.trim() === "") {
      setTasks([...tasks]);
    } else {
      setTasks([
        ...tasks,
        {
          id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
          description: noteValue,
        },
      ]);
      setNoteValue("");
    }
  };

  const deleteTodo = (id) => {
    setTasks(tasks.filter((e) => e.id !== id));
  };

  const renderNotes =
    tasks.length > 0 ? (
      tasks.map((e) => {
        return (
          <ul key={e.id}>
            <NoteList todo={e.description} onDelete={() => deleteTodo(e.id)} />
          </ul>
        );
      })
    ) : (
      <ul>
        <p>No task found</p>
      </ul>
    );

  return (
    <>
      <input
        type="text"
        value={noteValue}
        onChange={(e) => {
          setNoteValue(e.target.value);
        }}
        placeholder="Enter your Task"
      />
      <button onClick={addTodo}>add</button>
      {renderNotes}
    </>
  );
}

export default Note;
