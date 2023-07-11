function NoteForm(props) {
  const { noteValue, handleNoteValue, addTodo } = props;

  return (
    <form>
      <input
        name="description"
        type="text"
        value={noteValue.description}
        onChange={handleNoteValue}
        placeholder="Enter your Task"
      />
      <input
        type="date"
        name="deadline"
        value={noteValue.deadline}
        onChange={handleNoteValue}
        placeholder="Task DeadLine"
      />

      <button onClick={addTodo}>add</button>
    </form>
  );
}

export default NoteForm;
