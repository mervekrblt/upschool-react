import { v4 as uuidv4 } from "uuid";

const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";

export const addTask = (title) => {
  return {
    type: ADD_TASK,
    payload: {
      id: uuidv4(),
      title,
    },
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: {
      id,
    },
  };
};

export const tasksReducer = (tasks = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [action.payload, ...tasks];
    case REMOVE_TASK:
      return tasks.filter(task => task.id !== action.payload.id);
    default:
      return tasks;
  }
};
