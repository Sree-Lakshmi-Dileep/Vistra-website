// import React from "react";
// import { useLocation } from "react-router-dom";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend
// } from "recharts";

// function Reports() {
//   const { state } = useLocation();

//   if (!state) {
//     return <h2>No scan data available</h2>;
//   }

//   const {
//     totalFiles,
//     infectedFiles,
//     deletedFiles,
//     quarantinedFiles,
//     low,
//     medium,
//     high,
//     deletedList,
//     quarantinedList
//   } = state;

//   /* ----------- PIE DATA ----------- */

//   const severityData = [
//     { name: "Low", value: low },
//     { name: "Medium", value: medium },
//     { name: "High", value: high }
//   ];

//   const infectionData = [
//     { name: "Clean Files", value: totalFiles - infectedFiles },
//     { name: "Infected Files", value: infectedFiles }
//   ];

//   const COLORS = ["green", "orange", "red"];

//   const malwareDensity = ((infectedFiles / totalFiles) * 100).toFixed(2);

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>FULL SCAN REPORT</h1>

//       {/* BASIC STATS */}
//       <div style={{ marginTop: "1rem" }}>
//         <p>Total Files Scanned: {totalFiles}</p>
//         <p>Infected Files: {infectedFiles}</p>
//         <p>Deleted Files: {deletedFiles}</p>
//         <p>Quarantined Files: {quarantinedFiles}</p>
//         <p>Malware Density: {malwareDensity}%</p>
//       </div>

//       {/* SEVERITY PIE CHART */}
//       <h3 style={{ marginTop: "2rem" }}>
//         YARA Hits & Severity Distribution
//       </h3>

//       <PieChart width={400} height={300}>
//         <Pie
//           data={severityData}
//           dataKey="value"
//           cx="50%"
//           cy="50%"
//           outerRadius={100}
//           label
//         >
//           {severityData.map((entry, index) => (
//             <Cell key={index} fill={COLORS[index]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>

//       {/* INFECTION PIE */}
//       <h3>Clean vs Infected</h3>
//       <PieChart width={400} height={300}>
//         <Pie
//           data={infectionData}
//           dataKey="value"
//           cx="50%"
//           cy="50%"
//           outerRadius={100}
//           label
//         >
//           <Cell fill="#4CAF50" />
//           <Cell fill="#F44336" />
//         </Pie>
//         <Tooltip />
//       </PieChart>

//       {/* BAR GRAPH */}
//       <h3>File Action Summary</h3>
//       <BarChart width={500} height={300} data={[
//         { name: "Deleted", value: deletedFiles },
//         { name: "Quarantined", value: quarantinedFiles }
//       ]}>
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="value" fill="#8884d8" />
//       </BarChart>

//       {/* DELETED FILES LIST */}
//       <h3 style={{ marginTop: "2rem" }}>Deleted Files</h3>
//       <ul>
//         {deletedList.map((file, index) => (
//           <li key={index}>{file}</li>
//         ))}
//       </ul>

//       {/* QUARANTINED FILES LIST */}
//       <h3>Quarantined Files</h3>
//       <ul>
//         {quarantinedList.map((file, index) => (
//           <li key={index}>{file}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Reports;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  PieChart, Pie, Cell, BarChart, Bar,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";


/* ─── INLINE STYLES ──────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;500;600;700&family=Exo+2:wght@300;400;600;700&display=swap');

  :root {
    --bg: #050a0f;
    --bg2: #090f17;
    --panel: #0d1620;
    --panel2: #111c2a;
    --border: #1a3048;
    --accent: #00e5ff;
    --accent2: #ff3b6b;
    --accent3: #00ff9d;
    --text: #c8dff0;
    --muted: #4a6a80;
    --low: #00ff9d;
    --medium: #ffc107;
    --high: #ff3b6b;
    --clean: #00b96b;
    --infected: #ff3b6b;
    --font-mono: 'Share Tech Mono', monospace;
    --font-head: 'Rajdhani', sans-serif;
    --font-body: 'Exo 2', sans-serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .av-report {
    background: var(--bg);
    min-height: 100vh;
    font-family: var(--font-body);
    color: var(--text);
    padding: 2rem;
    position: relative;
    overflow-x: hidden;
  }

  .av-report::before {
    content: '';
    position: fixed;
    inset: 0;
    background:
      repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,229,255,0.025) 40px),
      repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,229,255,0.015) 40px);
    pointer-events: none;
    z-index: 0;
  }

  .av-content { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; }

  /* ── HEADER ── */
  .av-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border);
    padding-bottom: 1.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .av-logo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .av-shield {
    width: 52px; height: 52px;
    background: linear-gradient(135deg, #0a1e30, #0d2840);
    border: 1px solid var(--accent);
    border-radius: 4px 4px 20px 20px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.6rem;
    position: relative;
    box-shadow: 0 0 20px rgba(0,229,255,0.3), inset 0 0 15px rgba(0,229,255,0.05);
    animation: shieldPulse 3s ease-in-out infinite;
  }

  @keyframes shieldPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(0,229,255,0.3), inset 0 0 15px rgba(0,229,255,0.05); }
    50% { box-shadow: 0 0 35px rgba(0,229,255,0.5), inset 0 0 20px rgba(0,229,255,0.1); }
  }

  .av-title-block h1 {
    font-family: var(--font-head);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #fff;
    line-height: 1;
  }

  .av-title-block p {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--accent);
    letter-spacing: 0.2em;
    margin-top: 4px;
  }

  .av-timestamp {
    text-align: right;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--muted);
    line-height: 1.8;
  }

  .av-timestamp span { color: var(--accent); }

  /* ── THREAT BADGE ── */
  .av-threat-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    border-radius: 2px;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    font-weight: 700;
    text-transform: uppercase;
  }

  .av-threat-badge.critical { background: rgba(255,59,107,0.15); border: 1px solid var(--high); color: var(--high); }
  .av-threat-badge.warning  { background: rgba(255,193,7,0.12);  border: 1px solid var(--medium); color: var(--medium); }
  .av-threat-badge.safe     { background: rgba(0,255,157,0.1);   border: 1px solid var(--low); color: var(--low); }

  .av-threat-badge .dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: currentColor;
    animation: blink 1.2s step-end infinite;
  }

  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

  /* ── STAT CARDS ── */
  .av-stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .av-stat-card {
    background: var(--panel);
    border: 1px solid var(--border);
    border-top: 2px solid transparent;
    padding: 1.2rem 1.4rem;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, border-color 0.2s;
    animation: fadeUp 0.5s ease both;
  }

  .av-stat-card:hover { transform: translateY(-3px); border-color: rgba(0,229,255,0.3); }

  .av-stat-card.blue   { border-top-color: var(--accent); }
  .av-stat-card.red    { border-top-color: var(--high); }
  .av-stat-card.green  { border-top-color: var(--low); }
  .av-stat-card.orange { border-top-color: var(--medium); }
  .av-stat-card.purple { border-top-color: #a855f7; }

  .av-stat-card::after {
    content: '';
    position: absolute; bottom: 0; right: 0;
    width: 60px; height: 60px;
    background: currentColor;
    opacity: 0.03;
    border-radius: 50%;
    transform: translate(20px, 20px);
  }

  .av-stat-label {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 0.5rem;
  }

  .av-stat-value {
    font-family: var(--font-head);
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1;
    color: #fff;
  }

  .av-stat-value.red    { color: var(--high); }
  .av-stat-value.green  { color: var(--low); }
  .av-stat-value.orange { color: var(--medium); }

  .av-stat-icon {
    position: absolute; top: 1rem; right: 1.2rem;
    font-size: 1.4rem;
    opacity: 0.35;
  }

  /* ── PANELS ── */
  .av-panel {
    background: var(--panel);
    border: 1px solid var(--border);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    animation: fadeUp 0.5s ease both;
  }

  .av-panel-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.2rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--border);
  }

  .av-panel-header h2 {
    font-family: var(--font-head);
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
  }

  .av-panel-icon {
    width: 28px; height: 28px;
    background: rgba(0,229,255,0.1);
    border: 1px solid rgba(0,229,255,0.3);
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.9rem;
  }

  .av-panel-tag {
    margin-left: auto;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    color: var(--muted);
    background: var(--panel2);
    padding: 0.2rem 0.6rem;
    border: 1px solid var(--border);
  }

  /* ── CHARTS GRID ── */
  .av-charts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) { .av-charts-grid { grid-template-columns: 1fr; } }

  .av-chart-wrap {
    background: var(--panel);
    border: 1px solid var(--border);
    padding: 1.5rem;
    animation: fadeUp 0.5s ease both;
  }

  .av-chart-wrap h3 {
    font-family: var(--font-head);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 1.2rem;
  }

  /* ── SEVERITY BARS ── */
  .av-sev-row {
    display: flex; align-items: center; gap: 1rem;
    margin-bottom: 1rem;
  }

  .av-sev-label {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    width: 60px;
    text-transform: uppercase;
  }

  .av-sev-track {
    flex: 1;
    height: 8px;
    background: var(--panel2);
    border: 1px solid var(--border);
    border-radius: 1px;
    overflow: hidden;
  }

  .av-sev-fill {
    height: 100%;
    border-radius: 1px;
    position: relative;
    transition: width 1s cubic-bezier(.25,.8,.25,1);
  }

  .av-sev-fill::after {
    content: '';
    position: absolute; right: 0; top: 0; bottom: 0;
    width: 3px;
    background: rgba(255,255,255,0.6);
    filter: blur(1px);
  }

  .av-sev-count {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    width: 24px;
    text-align: right;
    color: var(--muted);
  }

  /* ── FILE LISTS ── */
  .av-file-list {
    list-style: none;
    max-height: 220px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
  }

  .av-file-list::-webkit-scrollbar { width: 4px; }
  .av-file-list::-webkit-scrollbar-track { background: transparent; }
  .av-file-list::-webkit-scrollbar-thumb { background: var(--border); }

  .av-file-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.5rem 0.6rem;
    border-bottom: 1px solid rgba(26,48,72,0.6);
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--text);
    transition: background 0.15s;
  }

  .av-file-item:hover { background: var(--panel2); }
  .av-file-item:last-child { border-bottom: none; }

  .av-file-dot {
    width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
  }

  .av-empty {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--muted);
    text-align: center;
    padding: 1.5rem;
    border: 1px dashed var(--border);
  }

  /* ── DENSITY METER ── */
  .av-density-wrap {
    display: flex; align-items: center; gap: 1.2rem;
    margin-top: 1rem;
  }

  .av-density-ring {
    position: relative;
    width: 90px; height: 90px; flex-shrink: 0;
  }

  .av-density-ring svg { transform: rotate(-90deg); }

  .av-density-pct {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-head);
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
  }

  .av-density-info h4 {
    font-family: var(--font-head);
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 0.3rem;
  }

  .av-density-info p {
    font-size: 0.8rem;
    color: var(--muted);
    line-height: 1.5;
  }

  /* ── FOOTER ── */
  .av-footer {
    margin-top: 2.5rem;
    padding-top: 1.2rem;
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .av-footer p {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--muted);
    letter-spacing: 0.1em;
  }

  .av-footer span { color: var(--accent); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* staggered delays */
  .av-stat-card:nth-child(1) { animation-delay: 0.05s; }
  .av-stat-card:nth-child(2) { animation-delay: 0.1s; }
  .av-stat-card:nth-child(3) { animation-delay: 0.15s; }
  .av-stat-card:nth-child(4) { animation-delay: 0.2s; }
  .av-stat-card:nth-child(5) { animation-delay: 0.25s; }

  /* tooltip override */
  .recharts-tooltip-wrapper .recharts-default-tooltip {
    background: var(--panel2) !important;
    border: 1px solid var(--border) !important;
    font-family: var(--font-mono) !important;
    font-size: 0.75rem !important;
    color: var(--text) !important;
  }
`;

/* ─── CUSTOM TOOLTIP ─────────────────────────────────────────── */
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "#0d1620", border: "1px solid #1a3048",
      padding: "0.6rem 1rem", fontFamily: "'Share Tech Mono', monospace",
      fontSize: "0.75rem", color: "#c8dff0"
    }}>
      {label && <p style={{ color: "#00e5ff", marginBottom: 4 }}>{label}</p>}
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.fill || p.color || "#c8dff0" }}>
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
};

/* ─── DENSITY RING ───────────────────────────────────────────── */
const DensityRing = ({ pct }) => {
  const r = 38, circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const color = pct > 50 ? "#ff3b6b" : pct > 20 ? "#ffc107" : "#00ff9d";
  return (
    <div className="av-density-ring">
      <svg width="90" height="90" viewBox="0 0 90 90">
        <circle cx="45" cy="45" r={r} fill="none" stroke="#1a3048" strokeWidth="8" />
        <circle cx="45" cy="45" r={r} fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="butt"
          style={{ transition: "stroke-dasharray 1.2s cubic-bezier(.25,.8,.25,1)", filter: `drop-shadow(0 0 6px ${color})` }} />
      </svg>
      <div className="av-density-pct" style={{ color }}>{pct}%</div>
    </div>
  );
};

/* ─── MAIN COMPONENT ─────────────────────────────────────────── */
function Reports() {
  //const { state } = useLocation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const reports = useSelector(state => state.reports);
  const scans = useSelector(state => state.scans.scans);

  const latestScan = scans[scans.length -1];
  const scanId = latestScan?.[0];

  const report = reports.find(r => r[0] === scanId);
  

  if (!report) {
  return <h2>Loading...</h2>;
  }

  // if (!state) {
  //   return (
  //     <>
  //       <style>{styles}</style>
  //       <div className="av-report">
  //         <div className="av-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", gap: "1rem" }}>
  //           <div style={{ fontSize: "3rem" }}>🛡️</div>
  //           <p style={{ fontFamily: "var(--font-head)", fontSize: "1.5rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>
  //             No Scan Data Available
  //           </p>
  //           <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)" }}>
  //             Run a full system scan to generate a report.
  //           </p>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  
  const totalFiles = report[1];          // files_scanned
  const infectedFiles = report[2];       // infected_files
  const cleanFiles = report[3];          // clean_files
  const deletedFiles = report[4];        // deleted_files
  const quarantinedFiles = report[5];    // quarantined_files
  const malwareDensity = report[6];      // malware_density
  const quarantinedList = report[7] || [];
  const deletedList = report[8] || [];
  const threatLevel = parseFloat(malwareDensity) > 30 ? "critical" : parseFloat(malwareDensity) > 5 ? "warning" : "safe";
  const threatLabel = { critical: "⚠ Critical Threat", warning: "⚡ Elevated Risk", safe: "✔ System Safe" }[threatLevel];

  const low = 0;
  const medium = 0;
  const high = 0;

  const severityData = [
    { name: "Low",    value: low,    fill: "#00ff9d" },
    { name: "Medium", value: medium, fill: "#ffc107" },
    { name: "High",   value: high,   fill: "#ff3b6b" }
  ];

  const infectionData = [
    { name: "Clean",    value: cleanFiles,    fill: "#00b96b" },
    { name: "Infected", value: infectedFiles, fill: "#ff3b6b" }
  ];

  const actionData = [
    { name: "Deleted", value: deletedFiles,     fill: "#ff3b6b" },
    { name: "Quarantined", value: quarantinedFiles, fill: "#ffc107" }
  ];


  const maxSev = Math.max(low, medium, high, 1);
  const now = new Date();

  const navigate =useNavigate();
const handleFileClick = (fileName,status) => {
  navigate("/report2", {
    state: {
      file: {
        name: fileName,
        path: "C:/sample/path",
        score: Math.floor(Math.random() * 100),
        status: status,
      }
    }
  });
};
  return (
    <>
      <style>{styles}</style>
      <div className="av-report">
        <div className="av-content">

          {/* ── HEADER ── */}
          <div className="av-header">
            <div className="av-logo">
              {/* <div className="av-shield">🛡️</div> */}
              <div className="av-title-block">
                <h1>COMPLETED LAYER-1 SCAN REPORT</h1>
                <p>FULL SYSTEM SCAN REPORT — ANALYSIS COMPLETE</p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.6rem" }}>
              <div className={`av-threat-badge ${threatLevel}`}>
                <div className="dot" />
                {threatLabel}
              </div>
              <div className="av-timestamp">
                <div>DATE&nbsp;&nbsp;<span>{now.toLocaleDateString("en-GB", { day:"2-digit", month:"short", year:"numeric" })}</span></div>
                <div>TIME&nbsp;&nbsp;<span>{now.toLocaleTimeString("en-GB", { hour:"2-digit", minute:"2-digit" })}</span></div>
                <div>ENGINE <span>v4.9.2</span></div>
              </div>
            </div>
          </div>

          {/* ── STAT CARDS ── */}
          <div className="av-stats-grid">
            <div className="av-stat-card blue">
              <div className="av-stat-label">Files Scanned</div>
              <div className="av-stat-value">{totalFiles.toLocaleString()}</div>
              <div className="av-stat-icon">📂</div>
            </div>
            <div className="av-stat-card red">
              <div className="av-stat-label">Infected Files</div>
              <div className="av-stat-value red">{infectedFiles.toLocaleString()}</div>
              <div className="av-stat-icon">🦠</div>
            </div>
            <div className="av-stat-card green">
              <div className="av-stat-label">Clean Files</div>
              <div className="av-stat-value green">{cleanFiles.toLocaleString()}</div>
              <div className="av-stat-icon">✅</div>
            </div>
            <div className="av-stat-card red">
              <div className="av-stat-label">Deleted Files</div>
              <div className="av-stat-value red">{deletedFiles.toLocaleString()}</div>
              <div className="av-stat-icon">🗑️</div>
            </div>
            <div className="av-stat-card orange">
              <div className="av-stat-label">Quarantined</div>
              <div className="av-stat-value orange">{quarantinedFiles.toLocaleString()}</div>
              <div className="av-stat-icon">🔒</div>
            </div>
          </div>

          {/* ── MALWARE DENSITY + SEVERITY BARS ── */}
          <div className="av-charts-grid" style={{ gridTemplateColumns: "1fr 1.4fr" }}>
            <div className="av-panel" style={{ marginBottom: 0 }}>
              <div className="av-panel-header">
                <div className="av-panel-icon">📊</div>
                <h2>Malware Density</h2>
              </div>
              <div className="av-density-wrap">
                <DensityRing pct={parseFloat(malwareDensity)} />
                <div className="av-density-info">
                  <h4>Infection Rate</h4>
                  <p>{malwareDensity}% of scanned files were flagged as threats.</p>
                  <p style={{ marginTop: "0.4rem", color: threatLevel === "critical" ? "var(--high)" : threatLevel === "warning" ? "var(--medium)" : "var(--low)" }}>
                    {threatLevel === "critical" ? "Immediate action required." : threatLevel === "warning" ? "Review recommended." : "System is healthy."}
                  </p>
                </div>
              </div>
            </div>

            <div className="av-panel" style={{ marginBottom: 0 }}>
              <div className="av-panel-header">
                <div className="av-panel-icon">⚠️</div>
                <h2>Severity Distribution</h2>
                <div className="av-panel-tag">YARA HITS</div>
              </div>
              {[["Low", low, "#00ff9d"], ["Medium", medium, "#ffc107"], ["High", high, "#ff3b6b"]].map(([label, val, color]) => (
                <div className="av-sev-row" key={label}>
                  <span className="av-sev-label" style={{ color }}>{label}</span>
                  <div className="av-sev-track">
                    {mounted && (
                      <div className="av-sev-fill"
                        style={{ width: `${(val / maxSev) * 100}%`, background: `linear-gradient(90deg, ${color}55, ${color})`, boxShadow: `0 0 8px ${color}55` }} />
                    )}
                  </div>
                  <span className="av-sev-count" style={{ color }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── PIE CHARTS ── */}
          <div className="av-charts-grid">
            <div className="av-chart-wrap">
              <h3>🔵&nbsp; Clean vs Infected Files</h3>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={infectionData} dataKey="value" cx="50%" cy="50%" outerRadius={85} innerRadius={40} paddingAngle={3} label={({ name, value }) => `${name}: ${value}`}
                    labelLine={{ stroke: "#1a3048" }}>
                    {infectionData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="av-chart-wrap">
              <h3>⚡&nbsp; Threat Severity Breakdown</h3>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={severityData} dataKey="value" cx="50%" cy="50%" outerRadius={85} innerRadius={40} paddingAngle={3} label={({ name, value }) => `${name}: ${value}`}
                    labelLine={{ stroke: "#1a3048" }}>
                    {severityData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ── BAR CHART ── */}
          <div className="av-chart-wrap" style={{ marginBottom: "1.5rem" }}>
            <h3>🗂️&nbsp; File Remediation Actions</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={actionData} barSize={40}>
                <XAxis dataKey="name" tick={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 11, fill: "#4a6a80" }} axisLine={{ stroke: "#1a3048" }} tickLine={false} />
                <YAxis tick={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 11, fill: "#4a6a80" }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0,229,255,0.05)" }} />
                {actionData.map((e) => (
                  <Bar key={e.name} dataKey="value" data={[e]} fill={e.fill} radius={[2, 2, 0, 0]}
                    style={{ filter: `drop-shadow(0 0 6px ${e.fill}66)` }} />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* ── FILE LISTS ── */}
          <div className="av-charts-grid">
            <div className="av-panel" style={{ marginBottom: 0 }}>
              <div className="av-panel-header">
                <div className="av-panel-icon" style={{ borderColor: "rgba(255,59,107,0.4)", background: "rgba(255,59,107,0.1)" }}>🗑️</div>
                <h2>Deleted Files</h2>
                <div className="av-panel-tag">{deletedList.length} FILES</div>
              </div>
              {deletedList.length > 0 ? (
                <ul className="av-file-list">
                  {deletedList.map((f, i) => (
                    <li
                        key={i}
                        className="av-file-item"
                        onClick={() => handleFileClick(f,"Deleted")}
                        style={{ cursor: "pointer" }}
                      >
                      <div className="av-file-dot" style={{ background: "var(--high)" }} />
                      {f}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="av-empty">— No files deleted —</div>
              )}
            </div>

            <div className="av-panel" style={{ marginBottom: 0 }}>
              <div className="av-panel-header">
                <div className="av-panel-icon" style={{ borderColor: "rgba(255,193,7,0.4)", background: "rgba(255,193,7,0.1)" }}>🔒</div>
                <h2>Quarantined Files</h2>
                <div className="av-panel-tag">{quarantinedList.length} FILES</div>
              </div>
              {quarantinedList.length > 0 ? (
                <ul className="av-file-list">
                  {quarantinedList.map((f, i) => (
                    <li
                        key={i}
                        className="av-file-item"
                        onClick={() => handleFileClick(f,"Quarantined")}
                        style={{ cursor: "pointer" }}
                      >
                      <div className="av-file-dot" style={{ background: "var(--medium)" }} />
                      {f}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="av-empty">— No files quarantined —</div>
              )}
            </div>
          </div>

          {/* ── FOOTER ── */}
          <div className="av-footer">
            <p>THREATSCAN PRO — <span>FULL SYSTEM ANALYSIS</span></p>
            <p>SCAN ID: <span>{scanId}</span></p>
            <p>GENERATED: <span>{now.toISOString().slice(0, 19).replace("T", " ")}</span></p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Reports;