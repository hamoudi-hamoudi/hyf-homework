import React, { useEffect, useState } from "react";
import Note from "../components/Notes/Note";
import NoteForm from "../components/Notes/NotesForm";

function NotePage() {
  const [noteValue, setNoteValue] = useState({
    description: "",
    deadline: "",
  });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
      );
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

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
          <Note
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
      <NoteForm
        handleNoteValue={handleNoteValue}
        noteValue={noteValue}
        addTodo={addTodo}
      />
      {RenderNotes}
    </>
  );
}

export default NotePage;
