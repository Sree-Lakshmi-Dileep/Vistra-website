import { useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useDispatch } from "react-redux";
import { addDevice, updateDevice, deleteDevice } from "../slice/devicesSlice";

export const useDevicesSubscription = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const channel = supabase
      .channel("devices-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "devices" },
        (payload) => {
          // const { eventType, new: row } = payload;

          // if (eventType === "INSERT" || eventType === "UPDATE") {
          //   const deviceArray = [
          //     row.device_id,
          //     row.user_id,
          //     row.device_name,
          //     row.os,
          //   ];

          //   console.log("Devices Table Row:", deviceArray);
          // }

          // if (eventType === "DELETE") {
          //   const deletedArray = [
          //     payload.old.device_id,
          //     payload.old.user_id,
          //     payload.old.device_name,
          //     payload.old.os,
          //   ];

        //     console.log("Deleted Device:", deletedArray);
        //   }
         const { eventType, new: row, old } = payload;

          if (eventType === "INSERT") dispatch(addDevice(row));
          if (eventType === "UPDATE") dispatch(updateDevice(row));
          if (eventType === "DELETE") dispatch(deleteDevice(old.device_id));
          
         }
     )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
};