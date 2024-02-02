import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: 1,
      task: "Do chores",
      isDone: false,
    },
    { id: 2, task: "Meditate", isDone: false },
  ],
  reducers: {
    addNewTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
        const {id} = action.payload;
        return state.filter(task => task.id !==id);
    },
    completeTask: (state, action) => {
        const {id} = action.payload;
        const existingTask = state.find(task => task.id ===id);
        if(existingTask){
            existingTask.isDone = true;
        }
    }
  },
});

export default todoSlice.reducer;
