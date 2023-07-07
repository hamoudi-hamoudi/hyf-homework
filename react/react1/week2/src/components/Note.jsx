import React, { useState } from "react";
import { todos } from "../todo-list";
import NoteList from "./NoteList";

function Note() {
  const [noteValue, setNoteValue] = useState({
    description: "",
    deadline: "",
  });
  const [tasks, setTasks] = useState(todos);

  const handleNoteValue = (e) => {
    const { name, value } = e.target;
    setNoteValue((prev) => ({ ...prev, [name]: value }));
  };

  const addTodo = () => {
    const { description, deadline } = noteValue;
    const now = new Date();
    const comareDeadLinre = now < new Date(deadline);
    if (description.trim() === "" || !comareDeadLinre) {
      alert("please fill up the form");
    } else {
      setTasks([
        ...tasks,
        {
          id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
          description: description,
          deadline: deadline,
        },
      ]);
      setNoteValue({
        description: "",
        deadline: "",
      });
    }
  };

  const deleteTodo = (id) => {
    setTasks(tasks.filter((e) => e.id !== id));
  };
  const RenderNotes =
    tasks.length > 0 ? (
      tasks.map((e) => {
        return (
          <NoteList
            key={e.id}
            description={e.description}
            deadline={e.deadline}
            onDelete={() => deleteTodo(e.id)}
          />
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
        name="description"
        type="text"
        value={noteValue.description}
        onChange={(e) => handleNoteValue(e)}
        placeholder="Enter your Task"
      />
      <input
        type="date"
        name="deadline"
        value={noteValue.deadline}
        onChange={(e) => handleNoteValue(e)}
        placeholder="Task DeadLine"
      />

      <button onClick={addTodo}>add</button>
      {RenderNotes}
    </>
  );
}

export default Note;
