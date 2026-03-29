import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AboutBG from "../assets/about_image.png";

/* ---------- SAME CSS FROM LAYER 1 ---------- */
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

  .db2-content {
    position: relative;
    padding: 2rem;
  }
  //   .db2-corner {
  //   position: absolute;
  //   width: 60px;
  //   height: 60px;
  //   opacity: 0.5;
  // }
  // .db2-corner.tl { top: 16px; left: 16px; border-top: 2px solid #00b4ff; border-left: 2px solid #00b4ff; }
  // .db2-corner.tr { top: 16px; right: 16px; border-top: 2px solid #00b4ff; border-right: 2px solid #00b4ff; }
  // .db2-corner.bl { bottom: 16px; left: 16px; border-bottom: 2px solid #00b4ff; border-left: 2px solid #00b4ff; }
  // .db2-corner.br { bottom: 16px; right: 16px; border-bottom: 2px solid #00b4ff; border-right: 2px solid #00b4ff; }

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

function Dblayer2() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleReportClick = (file) => {
    navigate("/report2", { state: { file } });
  };

  const ReportTable = () => {
    // ✅ CORRECT ARRAY
    const files = [
      {
        f_name: "hello",
        f_path: "/sys/class/net/ttx_errors",
        f_score: 30,
        f_action: "quarantine",
      },
      {
        f_name: "sree_lakshmi_dileep",
        f_path: "/sys/class/net/ttx_errors",
        f_score: 60,
        f_action: "quarantine",
      },
    ];

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
              <td>{file.f_name}</td>
              <td>{file.f_path}</td>
              <td>{file.f_score}</td>
              <td>{file.f_action}</td>
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
