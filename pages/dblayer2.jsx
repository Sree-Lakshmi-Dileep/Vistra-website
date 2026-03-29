// import React from 'react';
// import AccountsIcon from '../assets/account.png';
// import { useNavigate } from 'react-router-dom';

// function Dblayer2() {
//   const navigate = useNavigate();

//   /* ---------- styles ---------- */
//   const header = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '1rem 1.5rem',
//   };

//   const account = {
//     width: '40px',
//     height: '40px',
//     objectFit: 'contain',
//   };

//   const tabs = {
//     display: 'flex',
//     maxWidth: '400px',
//     margin: '2rem auto',
//     border: '2px solid #333',
//     borderRadius: '8px',
//     overflow: 'hidden',
//   };

//   const tab = {
//     flex: 1,
//     padding: '0.875rem 2rem',
//     fontSize: '2rem',
//     fontWeight: 500,
//     backgroundColor: '#fff',
//     border: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//   };

//   const active = {
//     backgroundColor: '#ffb3d9',
//   };

//   const content = {
//     margin: '2rem',
//     padding: '3rem 2rem',
//     minHeight: '400px',
//     backgroundColor: '#fff',
//     borderRadius: '8px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   };

//   const title = {
//     fontSize: '3rem',
//     fontWeight: 700,
//     marginBottom: '2rem',
//   };

//   /* ---------- handler ---------- */
//   const handleReportClick = (file) => {
//     console.log('Report clicked:', file);
//     navigate('/reports', { state: { file } });
//   };

//   /* ---------- table component ---------- */
//   const ReportTable = () => {
//     const files = [
//       // {
//       //   f_name: 'hello',
//       //   f_path: '/sys/class/net/ttx_errors',
//       //   f_score: 30,
//       //   f_action: 'quarantine',
//       // },
//       // {
//       //   f_name: 'sree_lakshmi_dileep',
//       //   f_path: '/sys/class/net/ttx_errors',
//       //   f_score: 60,
//       //   f_action: 'quarantine',
//       // },
//     ];
//     if (!files||files.length==0){
//       return(
//         <div style={{
//           marginTop: '3rem',
//           fontSize: '1.4rem',
//           fontWeight: 500,
//           color: '#666',
//           textAlign: 'center',
//         }}>
//         NO ALERT FOUND 
//         </div>     
//         );
//       }
//     return (
//       <table
//         style={{
//           width: '100%',
//           borderCollapse: 'collapse',
//           tableLayout: 'fixed', // ⭐ IMPORTANT
//         }}
//         cellPadding="10"
//       >
//         <thead>
//           <tr>
//             <th style={{ width: '80px', textAlign: 'center' }}>Sl No</th>
//             <th style={{ textAlign: 'center' }}>File Name</th>
//             <th style={{ textAlign: 'center' }}>File Path</th>
//             <th style={{ width: '100px', textAlign: 'center' }}>Score</th>
//             <th style={{ width: '140px', textAlign: 'center' }}>Action</th>
//             <th style={{ width: '120px', textAlign: 'center' }}>Report</th>
//           </tr>
//         </thead>

//         <tbody>
//           {files.map((file, index) => (
//             <tr key={index}>
//               <td
//                 style={{
//                   width: '80px',
//                   textAlign: 'center',
//                   verticalAlign: 'middle',
//                   fontWeight: 500,
//                 }}
//               >
//                 {index + 1}
//               </td>

//               <td
//                 style={{
//                   textAlign: 'center',
//                   wordBreak: 'break-word',
//                   overflowWrap: 'break-word',
//                 }}
//               >
//                 {file.f_name}
//               </td>

//               <td
//                 style={{
//                   textAlign: 'center',
//                   wordBreak: 'break-word',
//                 }}
//               >
//                 {file.f_path}
//               </td>

//               <td style={{ textAlign: 'center' }}>{file.f_score}</td>

//               <td style={{ textAlign: 'center' }}>{file.f_action}</td>

//               <td style={{ textAlign: 'center' }}>
//                 <button
//                   onClick={() => handleReportClick(file)}
//                   style={{
//                     padding: '6px 14px',
//                     backgroundColor: '#000',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   Report
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   /* ---------- JSX ---------- */
//   return (
//     <div>
//       <div style={header}>
//         <h2>Logo</h2>
//         <img src={AccountsIcon} alt="account" style={account} />
//       </div>

//       <div style={tabs}>
//         <div style={tab} onClick={() => navigate('/dblayer1')}>
//           Layer 1
//         </div>
//         <div style={{ ...tab, ...active }}>Layer 2</div>
//       </div>

//       <div style={content}>
//         <h1 style={title}>Layer 2</h1>
//         <ReportTable />
//       </div>
//     </div>
//   );
// }

// export default Dblayer2;
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AboutBG from "../assets/about_image.png";
import { fetchLayer2Files } from "../src/slice/progressSlice";


/* ---------- SAME CSS FROM LAYER 1 ---------- */
const styles = `
  .db2-root {
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    position: relative;
    color: white;
    font-family: 'Rajdhani', sans-serif;
  }

  .db2-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.85);
  }

  .db2-content {
    position: relative;
    padding: 2rem;
  }

  .db2-tabs {
    display: flex;
    margin-bottom: 2rem;
    border: 1px solid rgba(0,180,255,0.3);
    width: fit-content;
  }

  .db2-tab {
    padding: 0.7rem 2rem;
    cursor: pointer;
    background: transparent;
    color: rgba(255,255,255,0.5);
    border: none;
  }

  .db2-tab.active {
    color: #ffb3d9;
    border-bottom: 2px solid #ffb3d9;
  }

  .db2-table-card {
    background: rgba(0,20,50,0.6);
    border: 1px solid rgba(0,180,255,0.3);
    padding: 2rem;
    border-radius: 10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    color: white;
  }

  th {
    font-size: 12px;
    letter-spacing: 2px;
    color: rgba(0,180,255,0.7);
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  td {
    font-size: 14px;
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }

  .report-btn {
    padding: 6px 14px;
    background: transparent;
    border: 1px solid #ffb3d9;
    color: #ffb3d9;
    cursor: pointer;
  }

  .no-alert {
    text-align: center;
    margin-top: 2rem;
    color: rgba(255,255,255,0.6);
    letter-spacing: 2px;
  }
`;
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Dblayer2() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const handleReportClick = (file) => {
    navigate("/report2", { state: { file } });
  };
  const files = useSelector((state) => state.files);
  useEffect(() => {
    console.log("yaay")
    dispatch(fetchLayer2Files());
  }, [dispatch]);

  const ReportTable = () => {
    // ✅ CORRECT ARRAY
    // const files = [
    //   {
    //     f_name: "hello",
    //     f_path: "/sys/class/net/ttx_errors",
    //     f_score: 30,
    //     f_action: "quarantine",
    //   },
    //   {
    //     f_name: "sree_lakshmi_dileep",
    //     f_path: "/sys/class/net/ttx_errors",
    //     f_score: 60,
    //     f_action: "quarantine",
    //   },
    // ];

    if (!files || files.length === 0) {
      return <div className="no-alert">NO ALERT FOUND</div>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>File Name</th>
            <th>File Path</th>
            <th>Score</th>
            <th>Action</th>
            <th>Report</th>
          </tr>
        </thead>

        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{file.file_name}</td>
              <td>{file.file_path}</td>
              <td>{file.file_score}</td>
              <td>{file.action}</td>
              <td>
                <button
                  className="report-btn"
                  onClick={() => handleReportClick(file)}
                >
                  Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <style>{styles}</style>

      <div
        className="db2-root"
        style={{ backgroundImage: `url(${AboutBG})` }}
      >
        <div className="db2-overlay" />

        <div className="db2-content">
          <div className="db2-tabs">
            <button
              className={`db2-tab ${
                location.pathname === "/dblayer1" ? "active" : ""
              }`}
              onClick={() => navigate("/dblayer1")}
            >
              Layer 1
            </button>

            <button
              className={`db2-tab ${
                location.pathname === "/dblayer2" ? "active" : ""
              }`}
            >
              Layer 2
            </button>
          </div>

          <h1 style={{ letterSpacing: "4px" }}>LAYER 2 REPORT</h1>

          <div className="db2-table-card">
            <ReportTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dblayer2;
