function L1Scan(){
    return(
            <div className="l1scan-container">
                <div className="progress"></div>
                <div className="review">
                    <h2>SCAN COMPLETE</h2>
                    <h3>Layer 1 Scanning Finished</h3>
                </div>
                <div className="severity">
                    <p>Yara hits & Severity Score of issues files</p>
                    <div className="lvl">
                        <div className="low">Low</div>
                        <div className="med">Medium</div>
                        <div className="high">High</div>
                    </div>
                </div>
                <button className="report">FULL REPORT</button>

            </div>
    )

}
export default L1Scan;