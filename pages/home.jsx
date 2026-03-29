// // import { useNavigate } from 'react-router-dom';
// // import { useEffect, useState } from 'react';
// // import { supabase } from '../src/supabaseClient';
// // import HomeBG from '../assets/home_img.png';
// // import AboutBG from '../assets/about_image.png';
// // import AccountsIcon from '../assets/account.png';

// // function Home() {
// //   const navigate = useNavigate();
// //   const [showNav, setShowNav] = useState(false);
// //   const [session, setSession] = useState(null);
// //   const [showProfile, setShowProfile] = useState(false);

// //   /* SCROLL */
// //   const scrollToSection = (id) => {
// //     const section = document.getElementById(id);
// //     if (section) {
// //       section.scrollIntoView({ behavior: 'smooth' });
// //     }
// //   };

// //   /* AUTH */
// //   const handleLogout = async () => {
// //     const { error } = await supabase.auth.signOut();
// //     if (error) alert(error.message);
// //     else navigate('/signin');
// //   };

// //   useEffect(() => {
// //     setTimeout(() => setShowNav(true), 200);

// //     supabase.auth.getSession().then(({ data }) => {
// //       setSession(data.session);
// //     });

// //     const { data: listener } = supabase.auth.onAuthStateChange(
// //       (_event, session) => setSession(session)
// //     );

// //     return () => {
// //       listener.subscription.unsubscribe();
// //     };
// //   }, []);

// //   /* STYLES */
// //   const homeStyle = {
// //     minHeight: '100vh',
// //     backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${HomeBG})`,
// //     backgroundSize: 'cover',
// //     backgroundPosition: 'center',
// //     color: '#fff',
// //     fontFamily: '"Outfit", sans-serif',
// //   };
// //   const account={
// //         width: '40px', 
// //         height: '40px', 
// //         objectFit: 'contain'
// //     }


// //   const navWrapper = {
// //     position: 'fixed',
// //     top: '30px',
// //     left: '50%',
// //     transform: showNav
// //       ? 'translateX(-50%) translateY(0)'
// //       : 'translateX(-50%) translateY(-120px)',
// //     opacity: showNav ? 1 : 0,
// //     transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
// //     zIndex: 1000,
// //   };

// //   const navStyle = {
// //     display: 'flex',
// //     gap: '50px',
// //     padding: '16px 60px',
// //     background: 'rgba(255,255,255,0.08)',
// //     backdropFilter: 'blur(18px)',
// //     borderRadius: '50px',
// //     border: '1px solid rgba(255,255,255,0.2)',
// //   };

// //   const navBtn = {
// //     background: 'none',
// //     border: 'none',
// //     color: '#fff',
// //     fontSize: '14px',
// //     letterSpacing: '2px',
// //     textTransform: 'uppercase',
// //     cursor: 'pointer',
// //   };

// //   const authBox = {
// //     position: 'fixed',
// //     top: '40px',
// //     right: '50px',
// //     display: 'flex',
// //     gap: '15px',
// //     zIndex: 1001,
// //   };
// //   const authBtn = {
// //   height: '38px',              // 🔥 controls size
// //   padding: '0 22px',           // horizontal padding only
// //   borderRadius: '999px',
// //   background: 'transparent',
// //   backdropFilter: 'blur(18px)',
// //   WebkitBackdropFilter: 'blur(18px)',
// //   border: '1px solid rgba(255,255,255,0.35)',
// //   color: '#fff',
// //   fontSize: '14px',
// //   letterSpacing: '2px',
// //   textTransform: 'uppercase',
// //   cursor: 'pointer',
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',

  
// // };


// //   const hero = {
// //     height: '100vh',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     textAlign: 'center',
// //   };

// //   const title = {
// //     fontSize: 'clamp(4rem, 14vw, 12rem)',
// //     fontWeight: '800',
// //     background: 'linear-gradient(135deg,#fff,#00d4ff,#8a2be2)',
// //     WebkitBackgroundClip: 'text',
// //     WebkitTextFillColor: 'transparent',
// //   };

// //   const btnBox = {
// //     display: 'flex',
// //     gap: '30px',
// //     marginTop: '60px',
// //   };

// //   const btn = {
// //     padding: '15px 40px',
// //     borderRadius: '40px',
// //     background: 'rgba(255,255,255,0.08)',
// //     backdropFilter: 'blur(20px)',
// //     border: '1px solid rgba(255,255,255,0.25)',
// //     color: '#fff',
// //     cursor: 'pointer',
// //     textTransform: 'uppercase',
// //   };

// //   const aboutStyle = {
// //     minHeight: '100vh',
// //     backgroundImage: `url(${AboutBG})`,
// //     backgroundSize: 'cover',
// //     backgroundPosition: 'center',
// //     backgroundAttachment: 'fixed',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     padding: '100px',
// //     color: '#fff',
// //   };

// //   return (
// //     <div>
// //       {/* NAVBAR */}
// //       <div style={navWrapper}>
// //         <nav style={navStyle}>
// //           <button style={navBtn} onClick={() => scrollToSection('home')}>Home</button>
// //           <button style={navBtn} onClick={() => scrollToSection('about')}>About</button>
// //           <button style={navBtn} onClick={() => navigate('/dblayer1')}>Dashboard</button>
// //         </nav>
// //       </div>

// //       {/* AUTH (TOP RIGHT) */}
// //       {/* <div style={authBox}>
// //         {/* {!session ? (
// //           <>
// //             <button style={authBtn} onClick={() => navigate('/signin')}>SIGN IN</button>
// //             <button
// //               style={{
// //                 ...navBtn,
// //                 border: '1px solid rgba(255,255,255,0.4)',
// //                 borderRadius: '30px',
// //                 padding: '8px 18px',
// //               }}
// //               onClick={() => navigate('/signup')}
// //             >
// //               Sign Up
// //             </button>
// //           </>
// //         ) : (
// //           <button style={{ ...navBtn, color: '#ffb3b3' }} onClick={handleLogout}>
// //             Logout
// //           </button>
// //         )} */} 
// //         <div style={authBox}>
// //   {!session ? (
// //     <>
// //       <button style={authBtn} onClick={() => navigate('/signin')}>
// //         SIGN IN
// //       </button>
// //       <button
// //         style={{
// //           ...navBtn,
// //           border: '1px solid rgba(255,255,255,0.4)',
// //           borderRadius: '30px',
// //           padding: '8px 18px',
// //         }}
// //         onClick={() => navigate('/signup')}
// //       >
// //         Sign Up
// //       </button>
// //     </>
// //   ) : (
// //     <div style={{ position: 'relative' }}>
// //       {/* ACCOUNT ICON */}
// //       <img
// //         src={AccountsIcon}
// //         alt="Account"
// //         style={{ ...account, cursor: 'pointer' }}
// //         onClick={() => setShowProfile(!showProfile)}
// //       />

// //       {/* DROPDOWN */}
// //       {showProfile && (
// //         <div
// //           style={{
// //             position: 'absolute',
// //             top: '55px',
// //             right: 0,
// //             background: 'rgba(0,0,0,0.85)',
// //             backdropFilter: 'blur(20px)',
// //             borderRadius: '12px',
// //             padding: '14px 18px',
// //             minWidth: '200px',
// //             color: '#fff',
// //           }}
// //         >
// //           <p style={{ marginBottom: '12px', fontSize: '14px' }}>
// //             👤 {session.user.email}
// //           </p>

// //           <button
// //             onClick={handleLogout}
// //             style={{
// //               width: '100%',
// //               padding: '8px',
// //               borderRadius: '8px',
// //               border: 'none',
// //               background: '#ff4d4d',
// //               color: '#fff',
// //               cursor: 'pointer',
// //             }}
// //           >
// //             Logout
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   )}
// // </div>

// //       </div>

// //       {/* HOME */}
// //       <section id="home" style={homeStyle}>
// //         <div style={hero}>
// //           <h1 style={title}>VISTRA</h1>
// //           {/* <div style={btnBox}>
// //             <button style={btn} onClick={() => navigate('/dblayer1')}>Layer 1</button>
// //             <button style={btn} onClick={() => navigate('/dblayer2')}>Layer 2</button>
// //           </div> */}
// //         </div>
// //       </section>

// //       {/* ABOUT */}
// //       <section id="about" style={aboutStyle}>
// //         <div>
// //           <h1 style={{ fontSize: '4rem', marginBottom: '30px' }}>About Vistra</h1>
// //           <p style={{ maxWidth: '700px', lineHeight: '1.8', fontSize: '1.2rem' }}>
// //             Vistra is a cyber-security focused platform designed to analyze,
// //             detect, and prevent digital threats using layered protection.
// //           </p>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // export default Home;
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { supabase } from '../src/supabaseClient';
// import HomeBG from '../assets/home_img.png';
// import AboutBG from '../assets/about_image.png';
// import AccountsIcon from '../assets/account.png';

// function Home() {
//   const navigate = useNavigate();

//   const [showNav, setShowNav] = useState(false);
//   const [session, setSession] = useState(null);
//   const [showProfile, setShowProfile] = useState(false);

//   /* ---------- SCROLL ---------- */
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   /* ---------- LOGOUT ---------- */
//   const handleLogout = async () => {
//     const { error } = await supabase.auth.signOut();
//     if (error) alert(error.message);
//     else navigate('/signin');
//   };

//   /* ---------- SESSION ---------- */
//   useEffect(() => {
//     setTimeout(() => setShowNav(true), 200);

//     supabase.auth.getSession().then(({ data }) => {
//       setSession(data.session);
//     });

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => setSession(session)
//     );

//     return () => {
//       listener.subscription.unsubscribe();
//     };
//   }, []);

//   /* ---------- STYLES ---------- */
//   const homeStyle = {
//     minHeight: '100vh',
//     backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${HomeBG})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     color: '#fff',
//     fontFamily: '"Outfit", sans-serif',
//   };

//   const account = {
//     width: '40px',
//     height: '40px',
//     objectFit: 'contain',
//   };

//   const navWrapper = {
//     position: 'fixed',
//     top: '30px',
//     left: '50%',
//     transform: showNav
//       ? 'translateX(-50%) translateY(0)'
//       : 'translateX(-50%) translateY(-120px)',
//     opacity: showNav ? 1 : 0,
//     transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
//     zIndex: 1000,
//   };

//   const navStyle = {
//     display: 'flex',
//     gap: '50px',
//     padding: '16px 60px',
//     background: 'rgba(255,255,255,0.08)',
//     backdropFilter: 'blur(18px)',
//     borderRadius: '50px',
//     border: '1px solid rgba(255,255,255,0.2)',
//   };

//   const navBtn = {
//     background: 'none',
//     border: 'none',
//     color: '#fff',
//     fontSize: '14px',
//     letterSpacing: '2px',
//     textTransform: 'uppercase',
//     cursor: 'pointer',
//   };

//   const authBox = {
//   position: 'fixed',
//   top: '30px',
//   right: '50px',
//   display: 'flex',
//   gap: '15px',
//   zIndex: 9999,
//   background: 'white',   // 👈 TEST
//   padding: '10px',
// };


//   const authBtn = {
//     height: '38px',
//     padding: '0 22px',
//     borderRadius: '999px',
//     background: 'transparent',
//     backdropFilter: 'blur(18px)',
//     border: '1px solid rgba(255,255,255,0.35)',
//     color: '#fff',
//     fontSize: '14px',
//     letterSpacing: '2px',
//     textTransform: 'uppercase',
//     cursor: 'pointer',
//   };

//   const hero = {
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//   };

//   const title = {
//     fontSize: 'clamp(4rem, 14vw, 12rem)',
//     fontWeight: '800',
//     background: 'linear-gradient(135deg,#fff,#00d4ff,#8a2be2)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   };

//   const aboutStyle = {
//     minHeight: '100vh',
//     backgroundImage: `url(${AboutBG})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundAttachment: 'fixed',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '100px',
//     color: '#fff',
//   };

//   /* ---------- JSX ---------- */
//   return (
//     <div>
//       {/* NAVBAR */}
//       <div style={navWrapper}>
//         <nav style={navStyle}>
//           <button style={navBtn} onClick={() => scrollToSection('home')}>
//             Home
//           </button>
//           <button style={navBtn} onClick={() => scrollToSection('about')}>
//             About
//           </button>
//           <button style={navBtn} onClick={() => navigate('/dblayer1')}>
//             Dashboard
//           </button>
//         </nav>
//       </div>

//       {/* AUTH (TOP RIGHT) */}
//       <div style={authBox}>
//         {!session ? (
//           <>
//             <button style={authBtn} onClick={() => navigate('/signin')}>
//               SIGN IN
//             </button>

//             <button
//               style={{
//                 ...navBtn,
//                 border: '1px solid rgba(255,255,255,0.4)',
//                 borderRadius: '30px',
//                 padding: '8px 18px',
//               }}
//               onClick={() => navigate('/signup')}
//             >
//               Sign Up
//             </button>
//           </>
//         ) : (
//           <div style={{ position: 'relative' }}>
//             <img
//               src={AccountsIcon}
//               alt="Account"
//               style={{ ...account, cursor: 'pointer' }}
//               onClick={() => setShowProfile(!showProfile)}
//             />

//             {showProfile && (
//               <div
//                 style={{
//                   position: 'absolute',
//                   top: '55px',
//                   right: 0,
//                   background: 'rgba(0,0,0,0.85)',
//                   backdropFilter: 'blur(20px)',
//                   borderRadius: '12px',
//                   padding: '14px 18px',
//                   minWidth: '200px',
//                   color: '#fff',
//                 }}
//               >
//                 <p style={{ marginBottom: '12px', fontSize: '14px' }}>
//                   👤 {session.user.email}
//                 </p>

//                 <button
//                   onClick={handleLogout}
//                   style={{
//                     width: '100%',
//                     padding: '8px',
//                     borderRadius: '8px',
//                     border: 'none',
//                     background: '#ff4d4d',
//                     color: '#fff',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* HOME */}
//       <section id="home" style={homeStyle}>
//         <div style={hero}>
//           <h1 style={title}>VISTRA</h1>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" style={aboutStyle}>
//         <div>
//           <h1 style={{ fontSize: '4rem', marginBottom: '30px' }}>
//             About Vistra
//           </h1>
//           <p style={{ maxWidth: '700px', lineHeight: '1.8', fontSize: '1.2rem' }}>
//             Vistra is a cyber-security focused platform designed to analyze,
//             detect, and prevent digital threats using layered protection.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../src/supabaseClient';
import HomeBG from '../assets/home_img.png';
import AboutBG from '../assets/about_image.png';
import { useDispatch, useSelector } from 'react-redux';
import { setBehavioralScanId } from '../src/slice/progressSlice';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [showNav, setShowNav] = useState(false);
  const [session, setSession] = useState(null);

  /* ---------- SCROLL ---------- */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const userId = useSelector((state) => state.users.userId);
  useEffect(() => {
    const fetchLatestScan = async () => {
      if (!userId) return; // 🔥 important guard

      const { data, error } = await supabase
        .from("scans")
        .select("*")
        .eq("user_id", "krishnan")
        .eq("layer", 2)
         // ✅ filter by user
        .order("started_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error(error);
      } else {
        console.log(data)
        console.log("Scan id: ", data?.scan_id)
        dispatch(setBehavioralScanId({scan_id:  data?.scan_id}))
      }
    };

    fetchLatestScan();
  }, [userId]);

  /* ---------- LOGOUT ---------- */
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) alert(error.message);
    else navigate('/signin');
  };

  /* ---------- SESSION ---------- */
  useEffect(() => {
    setTimeout(() => setShowNav(true), 200);

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session)
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  /* ---------- STYLES ---------- */
  const homeStyle = {
    minHeight: '100vh',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${HomeBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    fontFamily: '"Outfit", sans-serif',
  };

  const navWrapper = {
    position: 'fixed',
    top: '30px',
    left: '50%',
    transform: showNav
      ? 'translateX(-50%) translateY(0)'
      : 'translateX(-50%) translateY(-120px)',
    opacity: showNav ? 1 : 0,
    transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1000,
  };

  const navStyle = {
    display: 'flex',
    gap: '50px',
    padding: '16px 60px',
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(18px)',
    borderRadius: '50px',
    border: '1px solid rgba(255,255,255,0.2)',
  };

  const navBtn = {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '14px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
  };

  const authBox = {
    position: 'fixed',
    top: '30px',
    right: '50px',
    display: 'flex',
    gap: '15px',
    zIndex: 9999,
  };

  const authBtn = {
    height: '38px',
    padding: '0 22px',
    borderRadius: '999px',
    background: 'transparent',
    backdropFilter: 'blur(18px)',
    border: '1px solid rgba(255,255,255,0.35)',
    color: '#fff',
    fontSize: '14px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
  };

  const hero = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const title = {
    fontSize: 'clamp(4rem, 14vw, 12rem)',
    fontWeight: '800',
    background: 'linear-gradient(135deg,#fff,#00d4ff,#8a2be2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const aboutStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${AboutBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px',
    color: '#fff',
  };

  return (
    <div>
      {/* NAVBAR */}
      <div style={navWrapper}>
        <nav style={navStyle}>
          <button style={navBtn} onClick={() => scrollToSection('home')}>
            Home
          </button>
          <button style={navBtn} onClick={() => scrollToSection('about')}>
            About
          </button>
          {session &&(
          <button style={navBtn} onClick={() => navigate('/dblayer1')}>
            Dashboard
          </button>
          )}
        </nav>
      </div>

      {/* AUTH SECTION */} 
       <div style={authBox}>
        {!session ? (
          <>
            <button style={authBtn} onClick={() => navigate('/signin')}>
              SIGN IN
            </button>

            <button
              style={{
                ...authBtn,
                border: '1px solid rgba(255,255,255,0.4)',
              }}
              onClick={() => navigate('/signup')}
            >
              SIGN UP
            </button>
          </>
        ) : (
          <button
            style={{
              ...authBtn,
              border: '1px solid rgba(255,0,0,0.5)',
              color: '#ffb3b3',
            }}
            onClick={handleLogout}
          >
            LOGOUT
          </button> 
        )}
      </div>

      {/* HOME */}
      <section id="home" style={homeStyle}>
        <div style={hero}>
          <h1 style={title}>VISTRA</h1>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={aboutStyle}>
        <div>
          <h1 style={{ fontSize: '4rem', marginBottom: '30px' }}>
            About Vistra
          </h1>
          <p style={{ maxWidth: '700px', lineHeight: '1.8', fontSize: '1.2rem' }}>
            Vistra is a cyber-security focused platform designed to analyze,
            detect, and prevent digital threats using layered protection.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;

