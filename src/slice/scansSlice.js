// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// const scansSlice = createSlice({
//   name: "scans",
//   initialState,
//   reducers: {
 
//     addScan: (state, action) => {
//       const { scan_id, user_id, device_id, scan_type, started_at, completed_at, status } = action.payload;
//       const scanArray = [scan_id, user_id, device_id, scan_type, started_at, completed_at, status];
//       state.push(scanArray);

//       console.log("After ADD (2D Array in Slice):", JSON.stringify(state, null, 2));
//     },

    
//     updateScan: (state, action) => {
//       const { scan_id, user_id, device_id, scan_type, started_at, completed_at, status } = action.payload;
//       const index = state.findIndex(scan => scan[0] === scan_id); // scan_id is first element

//       if (index !== -1) {
//         state[index] = [scan_id, user_id, device_id, scan_type, started_at, completed_at, status];
//       }

//       console.log("After UPDATE (2D Array in Slice):", JSON.stringify(state, null, 2));
//     },

   
//     deleteScan: (state, action) => {
//       const scan_id = action.payload;
//       const index = state.findIndex(scan => scan[0] === scan_id);

//       if (index !== -1) {
//         state.splice(index, 1);
//       }

//       console.log("After DELETE (2D Array in Slice):", JSON.stringify(state, null, 2));
//     },
//   },
// });

// export const { addScan, updateScan, deleteScan } = scansSlice.actions;
// export default scansSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   scans: [], // ✅ store all scans here (2D array if you want)
//   layer1: {
//     running: false,
//     progress: 0,
//   },
//   layer2: {
//     running: false,
//     progress: 0,
//   },
// };

// const scansSlice = createSlice({
//   name: "scans",
//   initialState,
//   reducers: {
//     startScan: (state) => {
//         state.isScanning = true;
//         state.scanCompleted = false;
//         state.progress = 0;
//     },
//     completeScan: (state) => {
//         state.isScanning = false;
//         state.scanCompleted = true;
//     },
//     updateProgress: (state,action) => {
//         state.progress = action.payload.progress;
//     },
//     updateReport: (state,action) => {
//         state.totalThreats = action.payload.totalThreats;
//         state.low = action.payload.low;
//         state.medium = action.payload.medium;
//         state.high = action.payload.high;
//     }
// },


//     addScan: (state, action) => {
//       const {
//         scan_id,
//         user_id,
//         device_id,
//         scan_type,
//         started_at,
//         completed_at,
//         status,
//       } = action.payload;

//       const scanArray = [
//         scan_id,
//         user_id,
//         device_id,
//         scan_type,
//         started_at,
//         completed_at,
//         status,
//       ];

//       state.scans.push(scanArray);

//       console.log("After ADD:", state.scans);
//     },

//     updateScan: (state, action) => {
//       const {
//         scan_id,
//         user_id,
//         device_id,
//         scan_type,
//         started_at,
//         completed_at,
//         status,
//       } = action.payload;

//       const index = state.scans.findIndex(
//         (scan) => scan[0] === scan_id
//       );

//       if (index !== -1) {
//         state.scans[index] = [
//           scan_id,
//           user_id,
//           device_id,
//           scan_type,
//           started_at,
//           completed_at,
//           status,
//         ];
//       }

//       console.log("After UPDATE:", state.scans);
//     },

//     deleteScan: (state, action) => {
//       const scan_id = action.payload;

//       state.scans = state.scans.filter(
//         (scan) => scan[0] !== scan_id
//       );

//       console.log("After DELETE:", state.scans);
//     },

//     // ========================
//     // 🔹 LAYER 1 SCAN CONTROL
//     // ========================

//     startLayer1: (state) => {
//       state.layer1.running = true;
//       state.layer1.progress = 0;
//     },

//     updateLayer1: (state, action) => {
//       state.layer1.progress = action.payload;
//     },

//     stopLayer1: (state) => {
//       state.layer1.running = false;
//     },

//     // ========================
//     // 🔹 LAYER 2 SCAN CONTROL
//     // ========================

//     startLayer2: (state) => {
//       state.layer2.running = true;
//       state.layer2.progress = 0;
//     },

//     updateLayer2: (state, action) => {
//       state.layer2.progress = action.payload;
//     },

//     stopLayer2: (state) => {
//       state.layer2.running = false;
//     },
//   });

// // ========================
// // 🔥 ASYNC SCAN LOGIC (IMPORTANT)
// // ========================

// // Layer 1 Scan (runs independent of UI)
// export const runLayer1Scan = () => (dispatch, getState) => {
//   const { layer1 } = getState().scans;

//   if (layer1.running) return; // prevent duplicate start

//   dispatch(startLayer1());

//   let progress = 0;

//   const interval = setInterval(() => {
//     progress += 10;
//     dispatch(updateLayer1(progress));

//     if (progress >= 100) {
//       clearInterval(interval);
//       dispatch(stopLayer1());
//     }
//   }, 1000);
// };

// // Layer 2 Scan
// export const runLayer2Scan = () => (dispatch, getState) => {
//   const { layer2 } = getState().scans;

//   if (layer2.running) return;

//   dispatch(startLayer2());

//   let progress = 0;

//   const interval = setInterval(() => {
//     progress += 5;
//     dispatch(updateLayer2(progress));

//     if (progress >= 100) {
//       clearInterval(interval);
//       dispatch(stopLayer2());
//     }
//   }, 1000);
// };

// // ========================

// export const {
//   addScan,
//   updateScan,
//   deleteScan,
//   startLayer1,
//   updateLayer1,
//   stopLayer1,
//   startLayer2,
//   updateLayer2,
//   stopLayer2,
// } = scansSlice.actions;

// export default scansSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scans: [],
  layer1: {
    running: false,
    progress: 0,
  },
  layer2: {
    running: false,
    progress: 0,
  },
};

const scansSlice = createSlice({
  name: "scans",
  initialState,
  reducers: {

    // ========================
    // 🔹 BASIC SCAN STATE
    // ========================

    startScan: (state) => {
      state.isScanning = true;
      state.scanCompleted = false;
      state.progress = 0;
    },

    completeScan: (state) => {
      state.isScanning = false;
      state.scanCompleted = true;
    },

    updateProgress: (state, action) => {
      state.progress = action.payload.progress;
    },

    updateReport: (state, action) => {
      state.totalThreats = action.payload.totalThreats;
      state.low = action.payload.low;
      state.medium = action.payload.medium;
      state.high = action.payload.high;
    },

    // ========================
    // 🔹 SUPABASE SCANS TABLE
    // ========================

    addScan: (state, action) => {
      const {
        scan_id,
        user_id,
        device_id,
        scan_type,
        started_at,
        completed_at,
        status,
      } = action.payload;

      const scanArray = [
        scan_id,
        user_id,
        device_id,
        scan_type,
        started_at,
        completed_at,
        status,
      ];

      state.scans.push(scanArray);

      console.log("After ADD:", state.scans);
    },

    updateScan: (state, action) => {
      const {
        scan_id,
        user_id,
        device_id,
        scan_type,
        started_at,
        completed_at,
        status,
      } = action.payload;

      const index = state.scans.findIndex(
        (scan) => scan[0] === scan_id
      );

      if (index !== -1) {
        state.scans[index] = [
          scan_id,
          user_id,
          device_id,
          scan_type,
          started_at,
          completed_at,
          status,
        ];
      }

      console.log("After UPDATE:", state.scans);
    },

    deleteScan: (state, action) => {
      const scan_id = action.payload;

      state.scans = state.scans.filter(
        (scan) => scan[0] !== scan_id
      );

      console.log("After DELETE:", state.scans);
    },

    // ========================
    // 🔹 LAYER 1 SCAN CONTROL
    // ========================

    startLayer1: (state) => {
      state.layer1.running = true;
      state.layer1.progress = 0;
    },

    updateLayer1: (state, action) => {
      state.layer1.progress = action.payload;
    },

    stopLayer1: (state) => {
      state.layer1.running = false;
    },

    // ========================
    // 🔹 LAYER 2 SCAN CONTROL
    // ========================

    startLayer2: (state) => {
      state.layer2.running = true;
      state.layer2.progress = 0;
    },

    updateLayer2: (state, action) => {
      state.layer2.progress = action.payload;
    },

    stopLayer2: (state) => {
      state.layer2.running = false;
    },
  },
});

// ========================
// 🔥 ASYNC SCAN LOGIC
// ========================

export const runLayer1Scan = () => (dispatch, getState) => {
  const { layer1 } = getState().scans;

  if (layer1.running) return;

  dispatch(startLayer1());

  let progress = 0;

  const interval = setInterval(() => {
    progress += 10;
    dispatch(updateLayer1(progress));

    if (progress >= 100) {
      clearInterval(interval);
      dispatch(stopLayer1());
    }
  }, 1000);
};

export const runLayer2Scan = () => (dispatch, getState) => {
  const { layer2 } = getState().scans;

  if (layer2.running) return;

  dispatch(startLayer2());

  let progress = 0;

  const interval = setInterval(() => {
    progress += 5;
    dispatch(updateLayer2(progress));

    if (progress >= 100) {
      clearInterval(interval);
      dispatch(stopLayer2());
    }
  }, 1000);
};

// ========================

export const {
  addScan,
  updateScan,
  deleteScan,
  startScan,
  completeScan,
  updateProgress,
  updateReport,
  startLayer1,
  updateLayer1,
  stopLayer1,
  startLayer2,
  updateLayer2,
  stopLayer2,
} = scansSlice.actions;

export default scansSlice.reducer;
