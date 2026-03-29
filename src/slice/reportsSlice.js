import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {

    addReport: (state, action) => {
      const {
        scan_id,
        files_scanned,
        infected_files,
        clean_files,
        deleted_files,
        quarantined_files,
        malware_density,
        quarantined_names,
        deleted_names
      } = action.payload;

      const reportArray = [
        scan_id,
        files_scanned,
        infected_files,
        clean_files,
        deleted_files,
        quarantined_files,
        malware_density,
        quarantined_names,
        deleted_names
      ];

      state.push(reportArray);

      console.log("After ADD REPORT:", JSON.stringify(state, null, 2));
    },

    updateReport: (state, action) => {
      const {
        scan_id,
        files_scanned,
        infected_files,
        clean_files,
        deleted_files,
        quarantined_files,
        malware_density,
        quarantined_name,
        deleted_names
      } = action.payload;

      const index = state.findIndex(r => r[0] === scan_id);

      if (index !== -1) {
        state[index] = [
          scan_id,
          files_scanned,
          infected_files,
          clean_files,
          deleted_files,
          quarantined_files,
          malware_density,
          quarantined_name,
          deleted_names
        ];
      }

      console.log("After UPDATE REPORT:", JSON.stringify(state, null, 2));
    },

    deleteReport: (state, action) => {
      const scan_id = action.payload;

      const index = state.findIndex(r => r[0] === scan_id);

      if (index !== -1) {
        state.splice(index, 1);
      }

      console.log("After DELETE REPORT:", JSON.stringify(state, null, 2));
    },
  },
});

export const { addReport, updateReport, deleteReport } = reportsSlice.actions;
export default reportsSlice.reducer;