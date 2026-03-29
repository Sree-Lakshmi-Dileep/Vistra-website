import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { supabase } from "../supabaseClient";
import { setFiles } from "./filesSlice";
const initialState = {
    progress: 0,
    totalThreats: 0,
    low:0,
    medium:0,
    high:0,
    isScanning: false,     
    scanCompleted: false,
    behavioral_scanId: null
}

const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {
        setBehavioralScanId: (state,action) => {
            state.behavioral_scanId = action.payload.scan_id
        },
        updateProgress: (state,action) => {
            const progress = action.payload.progress;
            state.progress = progress
        },
        updateReport: (state,action) => {
            state.totalThreats = action.payload.totalThreats;
            state.low = action.payload.low;
            state.medium = action.payload.medium;
            state.high = action.payload.high;
        },
        startScan: (state) => {
      state.isScanning = true;
      state.scanCompleted = false;
    },
     completeScan: (state) => {
      state.isScanning = false;
      state.scanCompleted = true;
    },
  },
});

export const {
  updateProgress,
  updateReport,
  startScan,
  completeScan,
  setBehavioralScanId
} = progressSlice.actions;
export default progressSlice.reducer

export const fetchLayer2Files = () => async (dispatch, getState) => {
  try {
    // ✅ Get scan_id from Redux
    const state = getState();
    const scanId = state.progress.behavioral_scanId;
    console.log(scanId)
    if (!scanId) {
      console.log("No scanId found, skipping fetch");
      return;
    }

    const { data, error } = await supabase
      .from("files")
      .select("*")
      .eq("layer", 2)
      .eq("scan_id",scanId)
     

    if (error) {
      console.error("Fetch error:", error);
      return;
    }
    console.log(data)
    // ✅ Object format
    const formatted = data.map(file => ({
      file_id: file.file_id,
      scan_id: file.scan_id,
      file_path: file.file_path,
      file_name: file.file_name,
      file_score: file.file_score,
      layer: file.layer,
      action: file.action,
      quarantine_path: file.quarantine_path
    }));
    console.log(formatted)

    dispatch(setFiles(formatted));

  } catch (err) {
    console.error("Unexpected error:", err);
  }
};