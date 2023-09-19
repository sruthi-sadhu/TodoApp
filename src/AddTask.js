import { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "./AddTaskActions";
const AddTask = ({ handleAddTask }) => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></input>
      <button onClick={() => handleAddTask(text)}>Submit</button>
    </>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTask: addTask
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
