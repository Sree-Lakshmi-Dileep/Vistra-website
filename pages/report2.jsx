// import React from "react";
// import { useLocation } from "react-router-dom";

// const Report2 = () => {
//   //const file = {
//     //name: "hello.txt",
//    // path: "C:/home/sree/Downloads",
//     //score: 92,
//     //status: "Quarantined",
//   //};

// const { state } = useLocation();
// const file = state?.file;
// if (!file) {
//     return <h2>No file data</h2>;
//   }

// const score = file.score;

// let riskText;
// let riskColor;

// if (score >= 90) {
//   riskText = "High Risk";
//   riskColor = "#d61714ff"
// } else {
//   riskText = "Low Risk";
//   riskColor = "#ed5c08ff"; 
// }
  



//   return (
//     <div style={styles.page}>
      
//       <div style={styles.header}>
//         <h1 style={styles.title}>Malware Report</h1>
//         <p style={styles.subtitle}>
//           Detailed analysis of the quarantined file.
//         </p>
//       </div>

      
//       <div style={styles.reportcard}>
//         <div style={styles.row}>
//           <span style={styles.key}>File Name:</span>
//           <span style={styles.value}>{file.name}</span>
//         </div>

//         <div style={styles.row}>
//           <span style={styles.key}>File Path:</span>
//           <span style={styles.value}>{file.path}</span>
//         </div>

//         <div style={styles.row}>
//           <span style={styles.key}>Risk Score:</span>
// <span
//   style={{
//     ...styles.score,
//     color: riskColor,
//   }}
// >
//   {score}
// </span>

// <span
//   style={{
//     ...styles.badge,
//     backgroundColor: riskColor,
//   }}
// >
//   {riskText}
// </span>          
//         </div>

//         <div style={styles.row}>
//           <span style={styles.key}>Status:</span>
//           <span style={styles.status}>{file.status}</span>
//         </div>

        
//         {file.status !== "Deleted" && (
//   <div style={styles.buttonContainer}>
//     <button style={styles.deleteBtn}>Delete File</button>
//     <button style={styles.keepBtn}>Keep File</button>
//   </div>
// )}
//       </div>
//     </div>
//   );
// };

// export default Report2;

// const styles = {
//   page: {
//     backgroundColor: "#f4f6f9",
//     minHeight: "98vh",
//   },

//   header: {
//     backgroundColor: "#132a54ff",
//     padding: "40px 20px",
//     color: "white",
//     textAlign: "center",
//   },

//   title: {
   
//     height:"4vh ",
//     fontSize: "36px",
//   },

//   subtitle: {
//     marginTop: "10px",
//     opacity: 0.9,
//   },

//   reportcard: {
//     backgroundColor: "white",
//     width: "80%",
//     maxWidth: "800px",
//     margin: "50px auto",
//     padding: "40px",
//     borderRadius: "15px",
//     marginTop:"15vh"
   
//   },

//   row: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "20px",
//     paddingBottom: "10px",
//   },

//   key: {
//     width: "150px",
//     fontWeight: "bold",
//     color: "#555",
//   },

//   value: {
//     flex: 1,
//     color: "#333",
//   },

//   score: {
//     fontSize: "28px",
//     fontWeight: "bold",
//     color: "red",
//     marginRight: "10px",
//   },

//   badge: {
   
//     color: "white",
//     padding: "5px 12px",
//     borderRadius: "20px",
//     fontSize: "14px",
//   },

//   status: {
   
//     padding: "5px 12px",
//     borderRadius: "6px",
//     fontWeight: "bold",
//   },

//   buttonContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: "30px",
//   },

//   deleteBtn: {
//     backgroundColor: "#e53935",
//     color: "white",
//     border: "none",
//     padding: "12px 20px",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },

//   keepBtn: {
//     backgroundColor: "#066125ff",
//     color: "white",
//     border: "none",
//     padding: "12px 20px",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
// };
import React from "react";
import { useLocation } from "react-router-dom";
import AboutBG from "../assets/about_image.png";
import { useDispatch } from "react-redux";
import { deleteFile, keepFile } from "../src/slice/reportSlice";

/* ---------- CYBER STYLE ---------- */
const stylesCSS = `
  .r2-root {
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    position: relative;
    color: white;
    font-family: 'Rajdhani', sans-serif;
  }

  .r2-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0,4,20,0.92),
      rgba(0,15,40,0.88),
      rgba(5,0,20,0.92)
    );
  }

  .r2-content {
    position: relative;
    padding: 2rem;
  }

  .r2-title {
    font-size: 40px;
    letter-spacing: 4px;
    margin-bottom: 0.5rem;
  }

  .r2-sub {
    font-family: monospace;
    color: rgba(0,180,255,0.7);
    margin-bottom: 2rem;
  }

  .r2-card {
    background: rgba(0,20,50,0.6);
    border: 1px solid rgba(0,180,255,0.3);
    padding: 2rem;
    border-radius: 10px;
    max-width: 700px;
    margin: auto;
  }

  .r2-row {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }

  .r2-key {
    color: rgba(255,255,255,0.5);
    letter-spacing: 1px;
  }

  .r2-value {
    font-family: monospace;
  }

  .r2-score {
    font-size: 28px;
    font-weight: bold;
  }

  .r2-badge {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    margin-left: 10px;
  }

  .r2-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .r2-btn {
    padding: 10px 20px;
    border: 1px solid;
    background: transparent;
    cursor: pointer;
    font-weight: 600;
  }

  /* Base button styles */
.delete {
  border: 2px solid #ff3250;     
  color: #ff3250;                 
  background: transparent;       
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
}

.keep {
  border: 2px solid #00ff96;      /* green border */
  color: #00ff96;                 /* green text */
  background: transparent;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Hover effect */
.delete:hover {
  transform: scale(1.05);           /* grows slightly */
  background-color: rgba(255,50,80,0.1);  /* subtle red background on hover */
}

.keep:hover {
  transform: scale(1.05);
  background-color: rgba(0,255,150,0.1);   /* subtle green background on hover */
}

.delete:active, .keep:active {
  transform: scale(0.95);          


  .no-data {
    text-align: center;
    margin-top: 3rem;
  }
`;

const Report2 = () => {
  const { state } = useLocation();
  const file = state?.file;
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log("Deleting file");

    dispatch(
      deleteFile({
        scanId: file.scan_id,
        fileName: file.file_name,
        filePath: file.file_path,
      })
    );
  };

  const handleKeep = () => {
    console.log("keeping file");
     dispatch(
      keepFile({
        scanId: file.scan_id,
        fileName: file.file_name,
        filePath: file.file_path,
      })
    );
  }

  if (!file) {
    return <h2 className="no-data">No file data</h2>;
  }

  const score = file.file_score;

  let riskText, riskColor;

  if (score >= 80) {
    riskText = "HIGH";
    riskColor = "#ff3250";
  } else if (score >= 40) {
    riskText = "MEDIUM";
    riskColor = "#ffaa00";
  } else {
    riskText = "LOW";
    riskColor = "#00ff96";
  }

  return (
    <>
      <style>{stylesCSS}</style>

      <div
        className="r2-root"
        style={{ backgroundImage: `url(${AboutBG})` }}
      >
        <div className="r2-overlay" />

        <div className="r2-content">
          <h1 className="r2-title">MALWARE REPORT</h1>
          <p className="r2-sub">// FILE ANALYSIS DETAILS</p>

          <div className="r2-card">
            <div className="r2-row">
              <span className="r2-key">File Name</span>
              <span className="r2-value">{file.file_name}</span>
            </div>

            <div className="r2-row">
              <span className="r2-key">File Path</span>
              <span className="r2-value">{file.file_path}</span>
            </div>

            <div className="r2-row">
              <span className="r2-key">Risk Score</span>
              <span className="r2-value">
                <span
                  className="r2-score"
                  style={{ color: riskColor }}
                >
                  {score}
                </span>

                <span
                  className="r2-badge"
                  style={{ background: riskColor }}
                >
                  {riskText}
                </span>
              </span>
            </div>

            <div className="r2-row">
              <span className="r2-key">Status</span>
              <span className="r2-value">{file.action}</span>
            </div>

            {file.action !== "delete" && (
              <div className="r2-actions">
                <button className="r2-btn delete" onClick={()=>handleDelete()}>
                  Delete File
                </button>

                <button className="r2-btn keep" onClick={()=>handleKeep()}>
                  Keep File
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Report2;
