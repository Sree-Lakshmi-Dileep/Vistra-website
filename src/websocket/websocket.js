import { useDispatch } from "react-redux";
import { setScanId, updateProgress, updateReport } from "../slice/progressSlice";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid"; 
// let socket = null;   

export const useWebSocketTask = (deviceId,handleScanCompleted) => {
    const wsRef = useRef(null);
    const dispatch = useDispatch();

    const startTask = () => {
        // const ws = new WebSocket(`ws://10.107.190.46:8000/ws/frontend/${deviceId}`);
        // wsRef.current = ws;
        if (wsRef.current) {
            console.log("Socket already running");
            return;
        }

        const ws= new WebSocket(`ws://localhost:8000/ws/frontend/${deviceId}`);
        wsRef.current=ws;

        const scanId = uuidv4();
        dispatch(setScanId({scanId: scanId}))
        console.log("Generated scan ID:", scanId);


        ws.onopen = () => {
            console.log("Connected");
            ws.send(JSON.stringify({ 
                event: "START_SCAN", 
                scan_id: scanId, 
                device_id: deviceId }));
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("message from backend:", data);

            if (data.event === "SCAN_PROGRESS") {
                dispatch(updateProgress({ progress: data.value }));
            }

            if (data.event === "SCAN_COMPLETED") {
                console.log("SCAN COMPLETED")
                 //closure to handle completion
            }

            if (data.event == "FILE_COUNT"){
                console.log("File result reached");
                handleScanCompleted();
                console.log("DATA: ", data.value)
                const totalThreats = data.value.totalThreats;
                const low = data.value.safe;
                const medium = data.value.quarantine;
                const high = data.value.deletion;

                dispatch(updateReport({
                    totalThreats,
                    low,
                    medium,
                    high
                }));

                ws.close();
            }   
        };

        ws.onclose = () => {
            console.log("Disconnected");
            wsRef.current = null; // cleanup
        };

        ws.onerror = (err) => {
            console.error(err);
        };
    };

    return { startTask };
};