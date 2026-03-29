import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../supabaseClient";
const initialState = [];


const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
   
    addFile: (state, action) => {
      const file = action.payload;

      state.push({
        file_id: file.file_id,
        scan_id: file.scan_id,
        file_path: file.file_path,
        file_name: file.file_name,
        file_score: file.file_score,
        layer: file.layer,
        action: file.action,
        quarantine_path: file.quarantine_path
      });

      console.log("After ADD (2D Array in Slice):", JSON.stringify(state, null, 2));
    },

   
    updateFile: (state, action) => {
      const { file_id, scan_id, file_name, file_hash, file_score,layer, action: fileAction, quarantine_path } = action.payload;
      const index = state.findIndex(file => file[0] === file_id); // file_id is first

      if (index !== -1) {
        state[index] = [file_id, scan_id, file_name, file_hash, file_score,layer, fileAction, quarantine_path];
      }

      console.log("After UPDATE (2D Array in Slice):", JSON.stringify(state, null, 2));
    },

   
    deleteFile: (state, action) => {
      const file_id = action.payload;
      const index = state.findIndex(file => file[0] === file_id);

      if (index !== -1) {
        state.splice(index, 1);
      }

      console.log("After DELETE (2D Array in Slice):", JSON.stringify(state, null, 2));
    },
    setFiles: (state, action) => {
      const newFiles = action.payload;
      console.log(newFiles)
      newFiles.forEach(newFile => {
        const exists = state.some(file => file[0] == newFile[0]); // file_id check

        if (!exists) {
          state.push(newFile);
        }
      });

      console.log("After SET (append unique):", JSON.stringify(state, null, 2));
    }
  },
});

export const { addFile, updateFile, deleteFile, setFiles } = filesSlice.actions;
export default filesSlice.reducer;

