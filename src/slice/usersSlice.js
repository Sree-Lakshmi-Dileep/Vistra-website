import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "krishnan"
}


const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
   
    addUser: (state, action) => {
      const { user_id, username, email, created_at } = action.payload;
      const userArray = [user_id, username, email, created_at];
      state.push(userArray);

      console.log(
        "After INSERT (2D Array in Slice):",
        JSON.stringify(state, null, 2)
      );
    },

   
    updateUser: (state, action) => {
      const { user_id, username, email, created_at } = action.payload;
      const index = state.findIndex(user => user[0] === user_id);

      if (index !== -1) {
        state[index] = [user_id, username, email, created_at];
      }

      console.log(
        "After UPDATE (2D Array in Slice):",
        JSON.stringify(state, null, 2)
      );
    },

  
    deleteUser: (state, action) => {
      const user_id = action.payload;
      const index = state.findIndex(user => user[0] === user_id);

      if (index !== -1) {
        state.splice(index, 1);
      }

      console.log(
        "After DELETE (2D Array in Slice):",
        JSON.stringify(state, null, 2)
      );
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    }
  },
});

export const { addUser, updateUser, deleteUser, setUserId } = usersSlice.actions;
export default usersSlice.reducer;