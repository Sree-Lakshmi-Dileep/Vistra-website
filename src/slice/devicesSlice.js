import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
   
    addDevice: (state, action) => {
      const { device_id, user_id, device_name, os } = action.payload;
      const deviceArray = [device_id, user_id, device_name, os];
      state.push(deviceArray);

      console.log("After ADD (2D Array in Slice):", JSON.stringify(state, null, 2));
    },

   
    updateDevice: (state, action) => {
      const { device_id, user_id, device_name, os } = action.payload;
      const index = state.findIndex(device => device[0] === device_id); // device_id is first

      if (index !== -1) {
        state[index] = [device_id, user_id, device_name, os];
      }

      console.log("After UPDATE (2D Array in Slice):", JSON.stringify(state, null, 2));
    },

    
    deleteDevice: (state, action) => {
      const device_id = action.payload;
      const index = state.findIndex(device => device[0] === device_id);

      if (index !== -1) {
        state.splice(index, 1);
      }

      console.log("After DELETE (2D Array in Slice):", JSON.stringify(state, null, 2));
    },
  },
});

export const { addDevice, updateDevice, deleteDevice } = devicesSlice.actions;
export default devicesSlice.reducer;

