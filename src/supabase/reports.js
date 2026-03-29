import { useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useDispatch } from "react-redux";
import { addReport, updateReport, deleteReport } from "../slice/reportsSlice";

export const useReportsSubscription = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const channel = supabase
      .channel("reports-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "reports" },
        (payload) => {

          console.log("REPORTS SUB TRIGGERED:", payload);

          const { eventType, new: row, old } = payload;

          if (eventType === "INSERT") dispatch(addReport(row));
          if (eventType === "UPDATE") dispatch(updateReport(row));
          if (eventType === "DELETE") dispatch(deleteReport(old.scan_id));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
};