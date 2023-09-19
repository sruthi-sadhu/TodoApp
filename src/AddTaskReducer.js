import { setIn } from "immutable";

const INITIAL_STATE = {
  tasks: []
};
export function addTaskReducer(state = INITIAL_STATE, action) {
  let tasks = state.tasks;
  let newTasks = [...tasks, action.task];
  state = setIn([state, "tasks"], newTasks);
  return state;
}
