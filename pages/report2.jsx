// import React from "react";
// import { useLocation } from "react-router-dom";
// import AboutBG from "../assets/about_image.png";
// import { useDispatch } from "react-redux";
// import { deleteFile, keepFile } from "../src/slice/reportSlice";
// import { supabase } from "../src/supabaseClient";
// import { useState } from "react";


// /* ---------- CYBER STYLE ---------- */
// const stylesCSS = `
//   .r2-root {
//     min-height: 100vh;
//     background-size: cover;
//     background-position: center;
//     position: relative;
//     color: white;
//     font-family: 'Rajdhani', sans-serif;
//   }

//   .r2-overlay {
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(
//       135deg,
//       rgba(0,4,20,0.92),
//       rgba(0,15,40,0.88),
//       rgba(5,0,20,0.92)
//     );
//   }

//   .r2-content {
//     position: relative;
//     padding: 2rem;
//   }

//   .r2-title {
//     font-size: 40px;
//     letter-spacing: 4px;
//     margin-bottom: 0.5rem;
//   }

//   .r2-sub {
//     font-family: monospace;
//     color: rgba(0,180,255,0.7);
//     margin-bottom: 2rem;
//   }

//   .r2-card {
//     background: rgba(0,20,50,0.6);
//     border: 1px solid rgba(0,180,255,0.3);
//     padding: 2rem;
//     border-radius: 10px;
//     max-width: 700px;
//     margin: auto;
//   }

//   .r2-row {
//     display: flex;
//     justify-content: space-between;
//     padding: 1rem 0;
//     border-bottom: 1px solid rgba(255,255,255,0.05);
//   }

//   .r2-key {
//     color: rgba(255,255,255,0.5);
//     letter-spacing: 1px;
//   }

//   .r2-value {
//     font-family: monospace;
//   }

//   .r2-score {
//     font-size: 28px;
//     font-weight: bold;
//   }

//   .r2-badge {
//     padding: 4px 12px;
//     border-radius: 20px;
//     font-size: 12px;
//     margin-left: 10px;
//   }

//   .r2-actions {
//     display: flex;
//     justify-content: space-between;
//     margin-top: 2rem;
//   }

//   .r2-btn {
//     padding: 10px 20px;
//     border: 1px solid;
//     background: transparent;
//     cursor: pointer;
//     font-weight: 600;
//   }

//   /* Base button styles */
// .delete {
//   border: 2px solid #ff3250;     
//   color: #ff3250;                 
//   background: transparent;       
//   padding: 10px 20px;
//   border-radius: 8px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: all 0.2s ease;
// }

// .keep {
//   border: 2px solid #00ff96;      /* green border */
//   color: #00ff96;                 /* green text */
//   background: transparent;
//   padding: 10px 20px;
//   border-radius: 8px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: all 0.2s ease;
// }

// /* Hover effect */
// .delete:hover {
//   transform: scale(1.05);           /* grows slightly */
//   background-color: rgba(255,50,80,0.1);  /* subtle red background on hover */
// }

// .keep:hover {
//   transform: scale(1.05);
//   background-color: rgba(0,255,150,0.1);   /* subtle green background on hover */
// }

// .delete:active, .keep:active {
//   transform: scale(0.95);          


//   .no-data {
//     text-align: center;
//     margin-top: 3rem;
//   }
// `;

// const Report2 = () => {
//   const { state } = useLocation();
//   const file = state?.file;
//   const dispatch = useDispatch();
//   const [currentAction, setCurrentAction] = useState(file.action);

//   const handleDelete = () => {
//     console.log("Deleting file");

//    const { error } = await supabase
//     .from("files")
//     .update({ action: "deleted" })
//     .eq("file_id", file.file_id);

//   if (error) {
//     console.log(error);
//     return;
//   }
//   setCurrentAction("deleted");
// };

//   const handleKeep = () => {
//     console.log("keeping file");
//       const { error } = await supabase
//     .from("files")
//     .update({ action: "restored" })
//     .eq("file_id", file.file_id);

//   if (error) {
//     console.log(error);
//     return;
//   }

//   setCurrentAction("restored");
// };

//   if (!file) {
//     return <h2 className="no-data">No file data</h2>;
//   }

//   const score = file.file_score;

//   let riskText, riskColor;

//   if (score >= 80) {
//     riskText = "HIGH";
//     riskColor = "#ff3250";
//   } else if (score >= 40) {
//     riskText = "MEDIUM";
//     riskColor = "#ffaa00";
//   } else {
//     riskText = "LOW";
//     riskColor = "#00ff96";
//   }

//   return (
//     <>
//       <style>{stylesCSS}</style>

//       <div
//         className="r2-root"
//         style={{ backgroundImage: `url(${AboutBG})` }}
//       >
//         <div className="r2-overlay" />

//         <div className="r2-content">
//           <h1 className="r2-title">MALWARE REPORT</h1>
//           <p className="r2-sub">// FILE ANALYSIS DETAILS</p>

//           <div className="r2-card">
//             <div className="r2-row">
//               <span className="r2-key">File Name</span>
//               <span className="r2-value">{file.file_name}</span>
//             </div>
//             {file.action === "deleted" && (
//   <h2 style={{
//     textAlign: "center",
//     color: "#ff3250",
//     marginTop: "2rem"
//   }}>
//     FILE IS DELETED
//   </h2>
// )}

// {file.action === "restored" && (
//   <h2 style={{
//     textAlign: "center",
//     color: "#00ff96",
//     marginTop: "2rem"
//   }}>
//     FILE IS RESTORED
//   </h2>
// )}


//             <div className="r2-row">
//               <span className="r2-key">File Path</span>
//               <span className="r2-value">{file.file_path}</span>
//             </div>

//             <div className="r2-row">
//               <span className="r2-key">Risk Score</span>
//               <span className="r2-value">
//                 <span
//                   className="r2-score"
//                   style={{ color: riskColor }}
//                 >
//                   {score}
//                 </span>

//                 <span
//                   className="r2-badge"
//                   style={{ background: riskColor }}
//                 >
//                   {riskText}
//                 </span>
//               </span>
//             </div>

//             <div className="r2-row">
//               <span className="r2-key">Status</span>
//               <span className="r2-value">{file.action}</span>
//             </div>

//             {file.action === "quarantine" && (
//   <div className="r2-actions">
//     <button className="r2-btn delete" onClick={handleDelete}>
//       Delete File
//     </button>

//     <button className="r2-btn keep" onClick={handleKeep}>
//       Keep File
//     </button>
//   </div>
// )}

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Report2;
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import AboutBG from "../assets/about_image.png";
import { supabase } from "../src/supabaseClient";
import { deleteFile, keepFile } from "../src/slice/reportSlice"; 

const stylesCSS = `
.r2-root {
  min-height:100vh;
  background-size:cover;
  position:relative; 
  color:white; 
  }
.r2-overlay {
   position:absolute; 
   inset:0; 
   background:rgba(0,0,0,0.8); 
   }
.r2-content {
   position:relative;
    padding:2rem; }
.r2-card {
   background:rgba(0,20,50,0.6); 
   padding:2rem; 
   border-radius:10px; 
   max-width:700px; 
   margin:auto; 
   }
.r2-row { 
  display:flex;
  justify-content:space-between; 
  padding:1rem 0;
  }
.r2-actions { 
  display:flex; 
  justify-content:space-between; 
  margin-top:2rem; 
  }
.delete { 
  border:2px solid #ff3250; 
  color:#ff3250; 
  background:transparent; 
  padding:10px; 
  }
.keep { 
  border:2px solid #00ff96; 
  color:#00ff96; 
  background:transparent; 
  padding:10px; 
  }
.center-msg { 
  text-align:center; 
  margin-top:2rem; 
  font-weight:bold; 
  }
`;

const Report2 = () => {
  const { state } = useLocation();
  const file = state?.file;
  const dispatch = useDispatch();

  if (!file) return <h2>No file data</h2>;

  const [currentAction, setCurrentAction] = useState(file.action);

  
  const handleDelete = async () => {
    const { error } = await supabase
      .from("files")
      .update({ action: "deleted" })
      .eq("file_id", file.file_id);

    if (error) return console.log(error);

    dispatch(deleteFile({ file_id: file.file_id })); 
    setCurrentAction("deleted"); 
  };

 
  const handleKeep = async () => {
    const { error } = await supabase
      .from("files")
      .update({ action: "restored" })
      .eq("file_id", file.file_id);

    if (error) return console.log(error);

    dispatch(keepFile({ file_id: file.file_id })); 
    setCurrentAction("restored"); 
  };

  return (
    <>
      <style>{stylesCSS}</style>

      <div className="r2-root" style={{ backgroundImage: `url(${AboutBG})` }}>
        <div className="r2-overlay" />

        <div className="r2-content">
          <div className="r2-card">
            <div className="r2-row">
              <span>File</span>
              <span>{file.file_name}</span>
            </div>

            <div className="r2-row">
              <span>Status</span>
              <span>{currentAction}</span>
            </div>

            {currentAction === "quarantine" && (
              <div className="r2-actions">
                <button className="delete" onClick={handleDelete}>
                  Delete
                </button>
                <button className="keep" onClick={handleKeep}>
                  Keep
                </button>
              </div>
            )}
          </div>

          {currentAction === "deleted" && (
            <div className="center-msg" style={{ color: "#ff3250" }}>
              FILE IS DELETED
            </div>
          )}

          {currentAction === "restored" && (
            <div className="center-msg" style={{ color: "#00ff96" }}>
              FILE IS RESTORED
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Report2;
