import { useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useDispatch } from "react-redux";
import { addFile, updateFile, deleteFile } from "../slice/filesSlice";


export const useFilesSubscription = () => {
   const dispatch = useDispatch();

  useEffect(() => {
    const channel = supabase
      .channel("files-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "files" },
        (payload) => {
          console.log("FILES SUB TRIGGERED:", payload);
        //   const { eventType, new: row } = payload;

        //   if (eventType === "INSERT" || eventType === "UPDATE") {
        //     const fileArray = [
        //       row.file_id,
        //       row.scan_id,
        //       row.file_path,
        //       row.file_hash,
        //       row.is_malicious,
        //       row.action,
        //       row.action_time,
        //     ];

        //     console.log("Files Table Row:", fileArray);
        //   }

        //   if (eventType === "DELETE") {
        //     const deletedArray = [
        //       payload.old.file_id,
        //       payload.old.scan_id,
        //       payload.old.file_path,
        //       payload.old.file_hash,
        //       payload.old.is_malicious,
        //       payload.old.action,
        //       payload.old.action_time,
        //     ];

        //     console.log("Deleted File:", deletedArray);
        //   }
        const { eventType, new: row, old } = payload;

          if (eventType === "INSERT") dispatch(addFile(row));
          if (eventType === "UPDATE") dispatch(updateFile(row));
          if (eventType === "DELETE") dispatch(deleteFile(old.file_id));
         }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
};