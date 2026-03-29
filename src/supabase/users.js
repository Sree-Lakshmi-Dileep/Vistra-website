// import { useEffect } from "react";
// import { supabase } from "../supabaseClient";
// import { useDispatch } from "react-redux";
// import { addUser, updateUser, deleteUser } from "../slice/usersSlice";


// export const useUsersSubscription = () => { 
//   const dispatch = useDispatch();

//   useEffect(() => {
    

//     const channel = supabase
//       .channel("users-channel")
//       .on(
//   "postgres_changes",
//   { event: "*", schema: "public", table: "users" },
//   (payload) => {
//    //console.log("Realtime payload received:", payload);

//     const { eventType, new: row, old } = payload;

//     if (eventType === "INSERT") dispatch(addUser(row));
//     if (eventType === "UPDATE") dispatch(updateUser(row));
//     if (eventType === "DELETE") dispatch(deleteUser(old.user_id));
//   }
// )
//      .subscribe((status, err) => {
//   console.log("STATUS:", status);
//   console.log("ERROR:", err);
// });

//     return () => {
//       supabase.removeChannel(channel);
//     };
//   }, []);
// };