export const addTask = (task) => {
  return function (dispatch) {
    console.log(task);
    return dispatch({ task: task, action: "ADD_TASK" });
  };
};
