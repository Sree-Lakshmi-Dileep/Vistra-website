import { useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useDispatch } from "react-redux";
import { addScan, updateScan, deleteScan } from "../slice/scansSlice";
console.log("addScan:" , addScan)


export const useScansSubscription = () => {
  const dispatch = useDispatch();
  useEffect(() => {
     

    const channel = supabase
      .channel("scans-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "scans" },
        (payload) => {
          console.log("SCANS SUB TRIGGERED:", payload)
          

          

          // const { eventType, new: row } = payload;

          // if (eventType === "INSERT" || eventType === "UPDATE") {
          //   const scanArray = [
          //     row.scan_id,
          //     row.user_id,
          //     row.device_id,
          //     row.scan_type,
          //     row.started_at,
          //     row.completed_at,
          //     row.status,
          //   ];

          //   console.log("Scans Table Row:", scanArray);
          // }

          // if (eventType === "DELETE") {
          //   const deletedArray = [
          //     payload.old.scan_id,
          //     payload.old.user_id,
          //     payload.old.device_id,
          //     payload.old.scan_type,
          //     payload.old.started_at,
          //     payload.old.completed_at,
          //     payload.old.status,
          //   ];

          //   console.log("Deleted Scan:", deletedArray);
          // }
           const { eventType, new: row, old } = payload;

          if (eventType === "INSERT") dispatch(addScan(row));
          if (eventType === "UPDATE") dispatch(updateScan(row));
          if (eventType === "DELETE") dispatch(deleteScan(old.scan_id));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
};