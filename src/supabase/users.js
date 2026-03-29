import { useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useDispatch } from "react-redux";
import { addUser, updateUser, deleteUser } from "../slice/usersSlice"; // ✅ fixed path


 export const useUsersSubscription = () => { 
  const dispatch = useDispatch();

  useEffect(() => {
    const channel = supabase
      .channel("users-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "users" },
        (payload) => {
          console.log("Realtime payload:", payload);

          const { eventType, new: newRow, old } = payload;

          // ✅ Handle events
          if (eventType === "INSERT") {
            dispatch(addUser(newRow));
          }

          if (eventType === "UPDATE") {
            dispatch(updateUser(newRow));
          }

          if (eventType === "DELETE") {
            dispatch(deleteUser(old.user_id));
          }
        }
      )
      .subscribe((status, err) => {
        console.log("STATUS:", status);
        if (err) console.log("ERROR:", err);
      });

    // ✅ Cleanup
    return () => {
      supabase.removeChannel(channel);
    };
  }, [dispatch]); // ✅ added dependency
};