
// import React, { useState, useEffect } from 'react';
// import AccountsIcon from '../assets/account.png';
// import { useNavigate } from 'react-router-dom';

// function Dblayer2(){
//     const navigate = useNavigate();

//     const [isScanning,setIsScanning] = useState(false);
//     const [progress,setProgress] = useState(0);
//     const [scanCompleted, setScanCompleted] = useState(false);


//    useEffect(() => {
//   let timer;

//   if (isScanning && progress < 100) {
//     timer = setInterval(() => {
//       setProgress(prev => prev + 5);
//     }, 300);
//   }

 
//   if (progress >= 100 && isScanning) {
//     setIsScanning(false);      
//     setScanCompleted(true);   
//   }

//   return () => clearInterval(timer);
// }, [isScanning, progress]);

// const last_scan = {
//   date: "20 Feb 2025",
//   totalMalwares: 200,
//  files_deleted: 20,
// };

// const  files_quarantined = last_scan.totalMalwares - last_scan.files_deleted;
 

//     const containerStyles ={
        
//     }
//     const header={
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '1rem 1.5rem',
//     }
//     const account={
//         width: '40px', 
//         height: '40px', 
//         objectFit: 'contain'
//     }
//     const tabs={ 
//         display: 'flex',
//         gap: '0',
//         maxWidth: '400px',
//         margin: '2rem auto',
//         border: '2px solid #333',
//         borderRadius: '8px',
//         overflow: 'hidden',

//     }
//     const tab={
//         flex: 1,
//   padding: '0.875rem 2rem',
//   fontSize: '2rem',
//   fontWeight: 500,
//   backgroundColor: '#ffffff',
//   border: 'none',
//   transition: 'all 0.3s ease',
//   color: '#333',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//     }
//     const tab1style = {
//   borderRight: '2px solid #333',
// };
// const active={
//     backgroundColor: '#ffb3d9',
//     color: '#333'
// }
// const content = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   //border: "2px solid #4a9eff",
//   borderRadius: "8px",
//   padding: "2rem",
//   minHeight: "400px",
//   backgroundColor: "#ffffff",
//   gap: "2rem",
//   width: "80rem",
//   margin: "4rem auto",  
// };

// const title={
//     fontSize: '3rem',
//     fontWeight: 700,
//     marginBottom: '1.5rem',
//     color: '#000',
// }
// const scancount={
//     fontSize: '1.125rem',
//     color: '#666',
//     marginBottom: '2rem',
// }
// const buttons={
//     display: 'flex',
//     gap: '1rem',
//     flexWrap: 'wrap',
// }
// const button={
    
//   padding: '0.875rem 1.75rem',
//   fontSize: '1rem',
//   fontWeight: 500,
//   borderRadius: '6px',
//   cursor: 'pointer',
//   transition: 'all 0.2s ease',
//   border: '2px solid #000',
//   //position:"relative"

 
// }
// const button1 ={
//     backgroundColor: '#000',
//     color: '#fff',
//      width:"20%",
//      position:"relative",
     
// }


//   const button2= {
//     backgroundColor: '#fff',
//     color: '#000',
    
//   };






//     return(
//         <div className="layer2-Container" style ={containerStyles}>
//            <div className="header" style={header}>
//               <div className="logo">
//                 <h2>logo</h2>
//               </div>
//             <div className="account" >
//                 <img src={AccountsIcon} alt="Accounts" className="accounts-icon" style={account}/>
//             </div>
//            </div>

//          <div className="main">
//             <div className="tabs" style={tabs}>
//                 <div className="tab1 active" style={{...tab, ...tab1style,...active}}>Layer 1</div>
//                 <div className="tab " style={{...tab}}
//                     onClick={() => navigate('/dblayer2')}>Layer 2
//                  </div>
//             </div>
//             <div style={{ display: 'flex', gap: '2rem' }}>
//                   <div className="content" style={content}>
//                     <div style={{ flex: 1 }}>
//                         <h1 style={title}>Layer 1</h1>
//                         <p style={scancount}>1000 files</p>
//                         <div style={buttons}>
//                             <div
//                               style={{ ...button, ...button2 }}
//                               onClick={() => {
//                               setIsScanning(true);
//                               setProgress(0);
//                               }}>
                               
//                               {isScanning ? "Scanning..." : "Scan me"}
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div
//                       style={{
//                         flex: 1,
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}>
//                         {!isScanning && !scanCompleted && (
//                           <div style={{ width: "100%", maxWidth: "300px" }}>
//                               <h3 style={{ marginBottom: "1rem" }}>Last Scan Summary</h3>

//                               <p><strong>Date:</strong> {last_scan.date}</p>
//                               <p><strong>Total Malwares:</strong> {last_scan.totalMalwares}</p>

//                               <p >
//                               < strong>Files Deleted:</strong> {last_scan.files_deleted}
//                               </p>

//                               <p >
//                                 <strong>Files Quarantined:</strong> {files_quarantined}
//                               </p>                            
//                           </div>
//                         )}
  

//                       {(isScanning || scanCompleted) && (
//                         <>
//                           <h3>Scan Progress</h3>
//                           <div style={{ position: "relative", width: 120, height: 120 }}>
//                             <svg width="120" height="120">
//                               <circle
//                                   cx="60"
//                                   cy="60"
//                                   r="50"
//                                   stroke="#eee"
//                                   strokeWidth="10"
//                                   fill="none"
//                                 />

//                               <circle
//                                   cx="60"
//                                   cy="60"
//                                   r="50"
//                                   stroke="#4a9eff"
//                                   strokeWidth="10"
//                                   fill="none"
//                                   strokeDasharray={2 * Math.PI * 50}
//                                   strokeDashoffset={
//                                     2 * Math.PI * 50 * (1 - progress / 100)
//                                   }
//                                   strokeLinecap="round"
//                                   style={{
//                                     transition: "stroke-dashoffset 0.3s ease",
//                                     transform: "rotate(-90deg)",
//                                     transformOrigin: "50% 50%",
//                                   }}
//                               />
//                             </svg>

//                             <div
//                               style={{
//                                 position: "absolute",
//                                 top: "50%",
//                                 left: "50%",
//                                 transform: "translate(-50%, -50%)",
//                                 fontSize: "20px",
//                                 fontWeight: "bold",
//                               }}>
//                               {progress}%
//                             </div>
//                           </div>
//                         </>
//                       )}

                      
//                        {scanCompleted && (
//                             <div
//                               style={{ ...button, ...button1, marginTop: "1.5rem" }}
//                               onClick={() => navigate("/reports")}>
//                               FULL REPORT
//                             </div>
//                        )}

//                     </div>
//                   </div>      
//             </div>
//          </div>
//        </div>
//     )
// }
// export default  Dblayer2;
// import React, { useState, useEffect } from "react";
// import AccountsIcon from "../assets/account.png";
// import { useNavigate, useLocation } from "react-router-dom";

// function Dblayer2() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [isScanning, setIsScanning] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [scanCompleted, setScanCompleted] = useState(false);

//   useEffect(() => {
//     let timer;

//     if (isScanning && progress < 100) {
//       timer = setInterval(() => {
//         setProgress((p) => p + 5);
//       }, 300);
//     }

//     if (progress >= 100 && isScanning) {
//       setIsScanning(false);
//       setScanCompleted(true);
//     }

//     return () => clearInterval(timer);
//   }, [isScanning, progress]);

//   /* ---------------- STYLES ---------------- */

//   const header = {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "1rem 1.5rem",
//   };

//   const tabs = {
//     display: "flex",
//     maxWidth: "400px",
//     margin: "2rem auto",
//     border: "2px solid #333",
//     borderRadius: "8px",
//     overflow: "hidden",
//     cursor: "pointer",
//   };

//   const tab = {
//     flex: 1,
//     padding: "0.875rem",
//     fontSize: "2rem",
//     textAlign: "center",
//   };

//   const active = { backgroundColor: "#ffb3d9" };

//   const content = {
//     display: "flex",
//     width: "80rem",
//     margin: "4rem auto",
//     gap: "4rem",
//   };

//   const button = {
//     padding: "0.875rem 1.75rem",
//     border: "2px solid #000",
//     borderRadius: "6px",
//     cursor: "pointer",
//   };

//   /* ----------- CENTER SCAN MODE ----------- */

//   const centerMode = {
//     height: "70vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center",
//   };

//   const severityBox = (color) => ({
//     border: `2px solid ${color}`,
//     padding: "1rem 2rem",
//     borderRadius: "8px",
//     fontWeight: 600,
//     minWidth: "120px",
//   });

//   /* ---------------- UI ---------------- */

//   return (
//     <div>
//       {/* HEADER */}
//       <div style={header}>
//         <h2>logo</h2>
//         <img src={AccountsIcon} alt="account" width={40} />
//       </div>

//       {/* TABS (FIXED) */}
//       <div style={tabs}>
//         <div
//           style={{
//             ...tab,
//             ...(location.pathname === "/dblayer1" ? active : {}),
//           }}
//           onClick={() => navigate("/dblayer1")}
//         >
//           Layer 1
//         </div>

//         <div
//           style={{
//             ...tab,
//             ...(location.pathname === "/dblayer2" ? active : {}),
//           }}
//           onClick={() => navigate("/dblayer2")}
//         >
//           Layer 2
//         </div>
//       </div>

//       {/* ================= NORMAL MODE ================= */}
//       {!isScanning && !scanCompleted && (
//         <div style={content}>
//           {/* LEFT */}
//           <div style={{ flex: 1 }}>
//             <h1>Layer 1</h1>
//             <p>1000 files</p>

//             <div
//               style={button}
//               onClick={() => {
//                 setIsScanning(true);
//                 setProgress(0);
//                 setScanCompleted(false);
//               }}
//             >
//               Scan me
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div style={{ flex: 1 }}>
//             <h3>Last Scan Summary</h3>
//             <p>Date: 20 Feb 2025</p>
//             <p>Total Malwares: 200</p>
//             <p>Files Deleted: 20</p>
//             <p>Files Quarantined: 180</p>
//           </div>
//         </div>
//       )}

//       {/* ================= CENTER SCAN MODE ================= */}
//       {(isScanning || scanCompleted) && (
//         <div style={centerMode}>
//           <h1>Layer 1</h1>

//           {/* PROGRESS */}
//           <div style={{ position: "relative", width: 160, height: 160 }}>
//             <svg width="160" height="160">
//               <circle
//                 cx="80"
//                 cy="80"
//                 r="70"
//                 stroke="#eee"
//                 strokeWidth="12"
//                 fill="none"
//               />
//               <circle
//                 cx="80"
//                 cy="80"
//                 r="70"
//                 stroke="#4a9eff"
//                 strokeWidth="12"
//                 fill="none"
//                 strokeDasharray={2 * Math.PI * 70}
//                 strokeDashoffset={
//                   2 * Math.PI * 70 * (1 - progress / 100)
//                 }
//                 strokeLinecap="round"
//                 style={{
//                   transform: "rotate(-90deg)",
//                   transformOrigin: "50% 50%",
//                   transition: "0.3s",
//                 }}
//               />
//             </svg>

//             <div
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 fontSize: "26px",
//                 fontWeight: "bold",
//               }}
//             >
//               {progress}%
//             </div>
//           </div>

//           {/* RESULTS */}
//           {scanCompleted && (
//             <>
//               <h2 style={{ marginTop: "1.5rem" }}>SCAN COMPLETED!</h2>
//               <p>Layer 1 Scan Finished</p>

//               <h4 style={{ marginTop: "1.5rem" }}>
//                 YARA hits & Severity Scores of user files
//               </h4>

//               <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
//                 <div style={severityBox("green")}>Low 23</div>
//                 <div style={severityBox("orange")}>Medium 41</div>
//                 <div style={severityBox("red")}>High 11</div>
//               </div>

//               <div
//                 style={{
//                   ...button,
//                   background: "#000",
//                   color: "#fff",
//                   marginTop: "2rem",
//                 }}
//                 onClick={() =>
//   navigate("/reports", {
//     state: {
//       totalFiles: 1000,
//       infectedFiles: 75,
//       deletedFiles: 20,
//       quarantinedFiles: 55,
//       low: 23,
//       medium: 41,
//       high: 11,
//       deletedList: ["virus1.exe", "trojan.dll"],
//       quarantinedList: ["ransomware.tmp", "spyware.sys"]
//     }
//   })
// }

//               >
//                 FULL REPORT
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dblayer2;
// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import AboutBG from "../assets/about_image.png";

// function Dblayer2() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [isScanning, setIsScanning] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [scanCompleted, setScanCompleted] = useState(false);

//   /* ---------------- SCAN LOGIC ---------------- */
//   useEffect(() => {
//     let timer;

//     if (isScanning && progress < 100) {
//       timer = setInterval(() => {
//         setProgress((p) => Math.min(p + 2, 100));
//       }, 120);
//     }

//     if (progress >= 100 && isScanning) {
//       setIsScanning(false);
//       setScanCompleted(true);
//     }

//     return () => clearInterval(timer);
//   }, [isScanning, progress]);

//   /* ---------------- SCAN DATA ---------------- */
//   const scanData = {
//     totalFiles: 1000,
//     infectedFiles: 75,
//     deletedFiles: 20,
//     quarantinedFiles: 55,
//     low: 23,
//     medium: 41,
//     high: 11,
//     deletedList: ["virus1.exe", "trojan.dll"],
//     quarantinedList: ["ransomware.tmp", "spyware.sys"],
//   };

//   const R = 85;
//   const CIRC = 2 * Math.PI * R;
//   const offset = CIRC * (1 - progress / 100);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundImage: `url(${AboutBG})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         position: "relative",
//         color: "white",
//         fontFamily: "sans-serif",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: "rgba(0,0,0,0.75)",
//         }}
//       />

//       {/* Main Content */}
//       <div style={{ position: "relative", padding: "2rem" }}>
//         {/* ---------------- TABS ---------------- */}
//         <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
//           <div
//             style={{
//               padding: "0.7rem 2rem",
//               border: "1px solid white",
//               cursor: "pointer",
//               background:
//                 location.pathname === "/dblayer1"
//                   ? "#ffb3d9"
//                   : "transparent",
//             }}
//             onClick={() => navigate("/dblayer1")}
//           >
//             Layer 1
//           </div>

//           <div
//             style={{
//               padding: "0.7rem 2rem",
//               border: "1px solid white",
//               cursor: "pointer",
//               background:
//                 location.pathname === "/dblayer2"
//                   ? "#ffb3d9"
//                   : "transparent",
//             }}
//             onClick={() => navigate("/dblayer2")}
//           >
//             Layer 2
//           </div>
//         </div>

//         {/* ================= NORMAL MODE ================= */}
//         {!isScanning && !scanCompleted && (
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <div>
//               <h1>Layer 2 Scan</h1>
//               <p>1000 Files Indexed</p>

//               <button
//                 style={{
//                   padding: "0.8rem 1.5rem",
//                   cursor: "pointer",
//                   marginTop: "1rem",
//                 }}
//                 onClick={() => {
//                   setIsScanning(true);
//                   setProgress(0);
//                   setScanCompleted(false);
//                 }}
//               >
//                 Start Scan
//               </button>
//             </div>

//             <div>
//               <h3>Last Scan Summary</h3>
//               <p>Total Malware: 200</p>
//               <p>Files Deleted: 20</p>
//               <p>Quarantined: 180</p>
//             </div>
//           </div>
//         )}

//         {/* ================= SCAN MODE ================= */}
//         {(isScanning || scanCompleted) && (
//           <div
//             style={{
//               height: "70vh",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <h1>{scanCompleted ? "Scan Completed!" : "Scanning..."}</h1>

//             {/* Progress Ring */}
//             <div style={{ position: "relative", width: 200, height: 200 }}>
//               <svg width="200" height="200">
//                 <circle
//                   cx="100"
//                   cy="100"
//                   r={R}
//                   stroke="#eee"
//                   strokeWidth="12"
//                   fill="none"
//                 />
//                 <circle
//                   cx="100"
//                   cy="100"
//                   r={R}
//                   stroke="#4a9eff"
//                   strokeWidth="12"
//                   fill="none"
//                   strokeDasharray={CIRC}
//                   strokeDashoffset={offset}
//                   strokeLinecap="round"
//                   style={{
//                     transform: "rotate(-90deg)",
//                     transformOrigin: "50% 50%",
//                     transition: "0.3s",
//                   }}
//                 />
//               </svg>

//               <div
//                 style={{
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   fontSize: "28px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {progress}%
//               </div>
//             </div>

//             {/* RESULTS AFTER COMPLETE */}
//             {scanCompleted && (
//               <>
//                 <p style={{ marginTop: "1rem" }}>
//                   {scanData.infectedFiles} Threats Found
//                 </p>

//                 <div
//                   style={{
//                     display: "flex",
//                     gap: "1rem",
//                     marginTop: "1.5rem",
//                   }}
//                 >
//                   <div style={{ border: "2px solid green", padding: "1rem" }}>
//                     Low {scanData.low}
//                   </div>

//                   <div style={{ border: "2px solid orange", padding: "1rem" }}>
//                     Medium {scanData.medium}
//                   </div>

//                   <div style={{ border: "2px solid red", padding: "1rem" }}>
//                     High {scanData.high}
//                   </div>
//                 </div>

//                 <button
//                   style={{
//                     marginTop: "2rem",
//                     padding: "0.8rem 2rem",
//                     background: "black",
//                     color: "white",
//                     cursor: "pointer",
//                   }}
//                   onClick={() =>
//                     navigate("/reports", {
//                       state: scanData,
//                     })
//                   }
//                 >
//                   FULL REPORT
//                 </button>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dblayer2;
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AboutBG from "../assets/about_image.png";
import { useDispatch, useSelector } from "react-redux";
import { startScan, completeScan } from "../src/slice/progressSlice";
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&display=swap');

  .db2-root {
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    color: white;
    font-family: 'Rajdhani', sans-serif;
    overflow: hidden;
  }

  .db2-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,4,20,0.92) 0%, rgba(0,15,40,0.88) 50%, rgba(5,0,20,0.92) 100%);
  }

  /* Animated grid lines */
  .db2-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(0,180,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,180,255,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    animation: gridPulse 4s ease-in-out infinite;
  }
  @keyframes gridPulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  /* Corner decorations */
  .db2-corner {
    position: absolute;
    width: 60px;
    height: 60px;
    opacity: 0.5;
  }
  .db2-corner.tl { top: 16px; left: 16px; border-top: 2px solid #00b4ff; border-left: 2px solid #00b4ff; }
  .db2-corner.tr { top: 16px; right: 16px; border-top: 2px solid #00b4ff; border-right: 2px solid #00b4ff; }
  .db2-corner.bl { bottom: 16px; left: 16px; border-bottom: 2px solid #00b4ff; border-left: 2px solid #00b4ff; }
  .db2-corner.br { bottom: 16px; right: 16px; border-bottom: 2px solid #00b4ff; border-right: 2px solid #00b4ff; }

  .db2-content {
    position: relative;
    padding: 2rem 2.5rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* ---- TABS ---- */
  .db2-tabs {
    display: flex;
    gap: 0;
    margin-bottom: 2.5rem;
    border: 1px solid rgba(0,180,255,0.25);
    width: fit-content;
    position: relative;
  }
  .db2-tabs::before {
    content: 'DEFENSE BARRIER';
    position: absolute;
    top: -22px;
    left: 0;
    font-size: 10px;
    letter-spacing: 3px;
    color: rgba(0,180,255,0.4);
    font-family: 'Share Tech Mono', monospace;
  }
  .db2-tab {
    padding: 0.65rem 2.2rem;
    cursor: pointer;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: all 0.2s;
    border: none;
    background: transparent;
    color: rgba(255,255,255,0.45);
    position: relative;
  }
  .db2-tab:hover {
    color: white;
    background: rgba(0,180,255,0.08);
  }
  .db2-tab.active {
    background: rgba(255,179,217,0.15);
    color: #ffb3d9;
    border-bottom: 2px solid #ffb3d9;
  }
  .db2-tab + .db2-tab {
    border-left: 1px solid rgba(0,180,255,0.25);
  }

  /* ---- IDLE STATE ---- */
  .db2-idle {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    flex: 1;
    padding-top: 1rem;
  }

  .db2-idle-left h1 {
    font-size: 52px;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 0 0.2rem;
    line-height: 1;
    background: linear-gradient(90deg, #ffffff, #a0d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .db2-idle-left .subtitle {
    font-family: 'Share Tech Mono', monospace;
    font-size: 13px;
    color: rgba(0,180,255,0.7);
    letter-spacing: 2px;
    margin-bottom: 2rem;
  }

  .db2-scan-btn {
    padding: 0.85rem 2.4rem;
    background: transparent;
    color: #00b4ff;
    border: 1px solid #00b4ff;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 3px;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
  }
  .db2-scan-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,180,255,0.1);
    transform: translateX(-100%);
    transition: transform 0.3s;
  }
  .db2-scan-btn:hover::before { transform: translateX(0); }
  .db2-scan-btn:hover {
    color: white;
    box-shadow: 0 0 20px rgba(0,180,255,0.3);
  }

  .db2-summary-card {
    background: rgba(0,20,50,0.6);
    border: 1px solid rgba(0,180,255,0.2);
    padding: 1.5rem 2rem;
    min-width: 260px;
    clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);
    position: relative;
  }
  .db2-summary-card::before {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 0; height: 0;
    border-top: 16px solid rgba(0,180,255,0.3);
    border-left: 16px solid transparent;
  }
  .db2-summary-card h3 {
    font-size: 11px;
    letter-spacing: 3px;
    color: rgba(0,180,255,0.6);
    text-transform: uppercase;
    margin: 0 0 1.2rem;
    font-family: 'Share Tech Mono', monospace;
  }
  .db2-stat-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    font-size: 14px;
    letter-spacing: 1px;
  }
  .db2-stat-row:last-child { border-bottom: none; }
  .db2-stat-row .label { color: rgba(255,255,255,0.5); }
  .db2-stat-row .value { 
    font-family: 'Share Tech Mono', monospace;
    color: #ffb3d9;
    font-size: 18px;
    font-weight: 600;
  }
  .db2-stat-row .value.danger { color: #ff4466; }
  .db2-stat-row .value.warn { color: #ffaa00; }

  /* ---- SCANNING STATE ---- */
  .db2-scan-view {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
  .db2-scan-title {
    font-size: 13px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: rgba(0,180,255,0.7);
    font-family: 'Share Tech Mono', monospace;
    animation: blink 1.2s step-end infinite;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
  .db2-scan-title.done {
    color: #00ffaa;
    animation: none;
    letter-spacing: 6px;
  }

  .db2-ring-wrap {
    position: relative;
    width: 220px;
    height: 220px;
  }
  .db2-ring-wrap svg { transform: rotate(-90deg); }
  .db2-ring-percent {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Share Tech Mono', monospace;
    font-size: 36px;
    font-weight: 400;
    color: white;
    text-align: center;
  }
  .db2-ring-percent span {
    display: block;
    font-size: 11px;
    letter-spacing: 2px;
    color: rgba(0,180,255,0.6);
    margin-top: 2px;
  }

  /* Threat badges */
  .db2-threat-grid {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
  }
  .db2-threat-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.6rem;
    border: 1px solid;
    position: relative;
    min-width: 100px;
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
    animation: fadeUp 0.4s ease forwards;
    opacity: 0;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .db2-threat-badge.low { border-color: rgba(0,255,150,0.5); background: rgba(0,255,150,0.05); animation-delay: 0.1s; }
  .db2-threat-badge.med { border-color: rgba(255,170,0,0.5); background: rgba(255,170,0,0.05); animation-delay: 0.2s; }
  .db2-threat-badge.high { border-color: rgba(255,50,80,0.5); background: rgba(255,50,80,0.05); animation-delay: 0.3s; }

  .db2-threat-badge .t-num {
    font-family: 'Share Tech Mono', monospace;
    font-size: 32px;
    font-weight: 400;
    line-height: 1;
  }
  .db2-threat-badge.low .t-num { color: #00ff96; }
  .db2-threat-badge.med .t-num { color: #ffaa00; }
  .db2-threat-badge.high .t-num { color: #ff3250; }

  .db2-threat-badge .t-label {
    font-size: 10px;
    letter-spacing: 3px;
    margin-top: 4px;
    text-transform: uppercase;
    opacity: 0.7;
  }

  .db2-threats-found {
    font-family: 'Share Tech Mono', monospace;
    font-size: 13px;
    letter-spacing: 2px;
    color: rgba(255,255,255,0.55);
    text-align: center;
  }
  .db2-threats-found strong {
    color: #ff3250;
    font-size: 20px;
    display: block;
    letter-spacing: 1px;
    margin-bottom: 2px;
  }

  .db2-report-btn {
    padding: 0.9rem 3rem;
    background: transparent;
    color: #ffb3d9;
    border: 1px solid #ffb3d9;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
    animation: fadeUp 0.4s ease 0.5s forwards;
    opacity: 0;
  }
  .db2-report-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255,179,217,0.12);
    transform: translateX(-100%);
    transition: transform 0.3s;
  }
  .db2-report-btn:hover::before { transform: translateX(0); }
  .db2-report-btn:hover { box-shadow: 0 0 24px rgba(255,179,217,0.25); }

  /* Scanline effect */
  .db2-scanline {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.03) 2px,
      rgba(0,0,0,0.03) 4px
    );
  }

  /* Status bar */
  .db2-statusbar {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 0.5rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0,10,30,0.8);
    border-top: 1px solid rgba(0,180,255,0.15);
    font-family: 'Share Tech Mono', monospace;
    font-size: 11px;
    color: rgba(0,180,255,0.45);
    letter-spacing: 1px;
  }
  .db2-status-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #00ff96;
    box-shadow: 0 0 6px #00ff96;
    display: inline-block;
    margin-right: 6px;
    animation: dotPulse 2s ease-in-out infinite;
  }
  @keyframes dotPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;
import { useWebSocketTask } from "../src/websocket/websocket";
function Dblayer2() {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  // const [isScanning, setIsScanning] = useState(false);
  // //const [progress, setProgress] = useState(0);
  // const [scanCompleted, setScanCompleted] = useState(false);
  const [time, setTime] = useState(new Date());
  const deviceId = "c4e5752238794973b24661bf4e08ded8"

  const handleScanCompleted = () => {
    console.log("scan completed")
    dispatch(completeScan());
  };

  const { startTask } = useWebSocketTask(deviceId,handleScanCompleted);
  const {
  progress,
  totalThreats,
  low,
  medium,
  high,
  isScanning,
  scanCompleted
} = useSelector((state) => state.progress);

  

  const handleScan = () => {
    console.log("SCAN BUTTON CLICKED");
    // setIsScanning(true); 
    dispatch(startScan()); 
    // setScanCompleted(false)
    
    startTask();
  };

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // useEffect(() => {
  //   let timer;
  //   if (isScanning && progress < 100) {
  //     timer = setInterval(() => setProgress((p) => Math.min(p + 2, 100)), 120);
  //   }
  //   if (progress >= 100 && isScanning) {
  //     setIsScanning(false);
  //     setScanCompleted(true);
  //   }
  //   return () => clearInterval(timer);
  // }, [isScanning, progress]);

  const scanData = {
    totalFiles: 1000, infectedFiles: 75, deletedFiles: 20,
    quarantinedFiles: 55, low: 23, medium: 41, high: 11,
    deletedList: ["virus1.exe", "trojan.dll"],
    quarantinedList: ["ransomware.tmp", "spyware.sys"],
  };

  const R = 90;
  const CIRC = 2 * Math.PI * R;
  const offset = CIRC * (1 - progress / 100);

  return (
    <>
      <style>{styles}</style>
      <div
        className="db2-root"
        style={{ backgroundImage: `url(${AboutBG})` }}
      >
        <div className="db2-overlay" />
        <div className="db2-grid" />
        <div className="db2-scanline" />
        <div className="db2-corner tl" />
        <div className="db2-corner tr" />
        <div className="db2-corner bl" />
        <div className="db2-corner br" />

        <div className="db2-content">
          {/* TABS */}
          <div className="db2-tabs">
            <button
              className={`db2-tab ${location.pathname === "/dblayer1" ? "active" : ""}`}
              onClick={() => navigate("/dblayer1")}
            >
              Layer 1
            </button>
            <button
              className={`db2-tab ${location.pathname === "/dblayer2" ? "active" : ""}`}
              onClick={() => navigate("/dblayer2")}
            >
              Layer 2
            </button>
          </div>

          {/* IDLE STATE */}
          {!isScanning && !scanCompleted && (
            <div className="db2-idle">
              <div className="db2-idle-left">
                <h1>Layer 1<br />Scan</h1>
                <p className="subtitle">1000 FILES INDEXED — READY</p>
                <button
                  className="db2-scan-btn"
                  onClick={() => { 
                    handleScan()
                  }}
                >
                  ▶ Initiate Scan
                </button>
              </div>

              <div className="db2-summary-card">
                <h3>// Last Scan Summary</h3>
                <div className="db2-stat-row">
                  <span className="label">Total Malware</span>
                  <span className="value danger">200</span>
                </div>
                <div className="db2-stat-row">
                  <span className="label">Files Deleted</span>
                  <span className="value warn">20</span>
                </div>
                <div className="db2-stat-row">
                  <span className="label">Quarantined</span>
                  <span className="value">180</span>
                </div>
              </div>
            </div>
          )}

          {/* SCAN / COMPLETE STATE */}
          {(isScanning || scanCompleted) && (
            <div className="db2-scan-view">
              <p className={`db2-scan-title ${scanCompleted ? "done" : ""}`}>
                {scanCompleted ? "◆ SCAN COMPLETE ◆" : "⬡ SCANNING SYSTEM..."}
              </p>

              <div className="db2-ring-wrap">
                <svg width="220" height="220" viewBox="0 0 220 220">
                  <circle cx="110" cy="110" r={R} stroke="rgba(0,180,255,0.1)" strokeWidth="14" fill="none" />
                  <circle
                    cx="110" cy="110" r={R}
                    stroke={scanCompleted ? "#00ffaa" : "#00b4ff"}
                    strokeWidth="14"
                    fill="none"
                    strokeDasharray={CIRC}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.2s, stroke 0.4s" }}
                  />
                  {/* Tick marks */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i / 12) * 360;
                    const rad = (angle * Math.PI) / 180;
                    const x1 = 110 + (R - 22) * Math.cos(rad);
                    const y1 = 110 + (R - 22) * Math.sin(rad);
                    const x2 = 110 + (R - 14) * Math.cos(rad);
                    const y2 = 110 + (R - 14) * Math.sin(rad);
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(0,180,255,0.25)" strokeWidth="1.5" />;
                  })}
                </svg>
                <div className="db2-ring-percent">
                  {progress}%<span>{scanCompleted ? "DONE" : "PROG"}</span>
                </div>
              </div>

              {scanCompleted && (
                <>
                  <div className="db2-threats-found">
                    <strong>{totalThreats}</strong>
                    THREATS DETECTED
                  </div>

                  <div className="db2-threat-grid">
                    <div className="db2-threat-badge low">
                      <span className="t-num">{low}</span>
                      <span className="t-label">Low</span>
                    </div>
                    <div className="db2-threat-badge med">
                      <span className="t-num">{medium}</span>
                      <span className="t-label">Medium</span>
                    </div>
                    <div className="db2-threat-badge high">
                      <span className="t-num">{high}</span>
                      <span className="t-label">High</span>
                    </div>
                  </div>

                  <button
                    className="db2-report-btn"
                    onClick={() => navigate("/reports", { state: scanData })}
                  >
                    View Full Report →
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* STATUS BAR */}
        <div className="db2-statusbar">
          <span><span className="db2-status-dot" />SYSTEM ACTIVE</span>
          <span>LAYER 2 — DEEP BARRIER</span>
          <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
        </div>
      </div>
    </>
  );
}

export default Dblayer2;