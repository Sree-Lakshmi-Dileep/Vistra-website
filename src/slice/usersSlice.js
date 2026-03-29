import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🔥 Async Thunk (send user to backend)
export const sendUserToBackend = createAsyncThunk(
  "users/sendUserToBackend",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/users",
        userData
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || err.message
      );
    }
  }
);




export const checkDevice = createAsyncThunk(
  "users/checkDevice",
  async (user_id) => {
    const response = await fetch("http://localhost:8000/api/checkDevice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id }),
    });

    const data = await response.json();
    console.log("✅ CHECK DEVICE RESPONSE:", data);
    return data;
  }
);


// ✅ Better initial state
const initialState = {
  users: [],          // all users (optional)
  currentUser: null,  // logged-in user (important)
  device: null, 
  status: "idle",
  error: null,
};


const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {

    // ✅ ADD USER (object, not array)
    addUser: (state, action) => {
      state.users.push(action.payload);

      console.log("After INSERT:", state.users);
    },

    // ✅ UPDATE USER
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        user => user.user_id === action.payload.user_id
      );

      if (index !== -1) {
        state.users[index] = action.payload;
      }

      console.log("After UPDATE:", state.users);
    },

    // ✅ DELETE USER
    deleteUser: (state, action) => {
      state.users = state.users.filter(
        user => user.user_id !== action.payload
      );

      console.log("After DELETE:", state.users);
    },

    // 🔐 LOGOUT
    logout: (state) => {
      state.currentUser = null;
    },
  },


  // 🔥 Handle async thunk
  extraReducers: (builder) => {
    builder

      // ⏳ loading
      .addCase(sendUserToBackend.pending, (state) => {
        state.status = "loading";
      })

      // ✅ success
      .addCase(sendUserToBackend.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;

        // optional: add to users list if not exists
        const exists = state.users.find(
          user => user.user_id === action.payload.user_id
        );

        if (!exists) {
          state.users.push(action.payload);
        }

        console.log("User stored:", state.currentUser);
      })

      // ❌ error
      .addCase(sendUserToBackend.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(checkDevice.fulfilled, (state, action) => {
        state.device = action.payload;

        console.log(" Device check result:", action.payload);
      })

      .addCase(checkDevice.pending, (state) => {
          state.status = "loading";
        })

      .addCase(checkDevice.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
 });


// ✅ exports
export const { addUser, updateUser, deleteUser, logout } = usersSlice.actions;
export default usersSlice.reducer;