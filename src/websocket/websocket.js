import { useDispatch } from "react-redux";
import { updateProgress, updateReport } from "../slice/progressSlice";
import { useRef } from "react";  

export const useWebSocketTask = (deviceId,handleScanCompleted) => {
    const wsRef = useRef(null);
    const dispatch = useDispatch();

    const startTask = () => {
        if (wsRef.current) {
            console.log("Socket already running");
            return;
        }

        const ws = new WebSocket(`ws://localhost:8000/ws/frontend/${deviceId}`);
        wsRef.current = ws;

        ws.onopen = () => {
            console.log("Connected");
            ws.send(JSON.stringify({ event: "START_SCAN", deviceId: deviceId }));
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("message from backend:", data);

            if (data.event === "SCAN_PROGRESS") {
                dispatch(updateProgress({ progress: data.value }));
            }

            if (data.event === "SCAN_COMPLETED") {
                handleScanCompleted();
            }

            if (data.event === "FILE_COUNT") {
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
                wsRef.current = null; // IMPORTANT
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