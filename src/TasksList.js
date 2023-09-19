import { connect } from "react-redux";
const TasksList = ({ tasks }) => {
  console.log(tasks);
  return (
    <>
      <p> TODO: Show tasks</p>
      <ul></ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
