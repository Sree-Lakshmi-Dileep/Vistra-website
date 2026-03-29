import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../src/supabaseClient';
import { useDispatch } from "react-redux";
import { sendUserToBackend ,checkDevice} from "../src/slice/usersSlice";
function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      navigate('/');
    }
  };
  const handleGoogleSignin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
    redirectTo: "http://localhost:5173/signin"    },
  });

  if (error) {
    alert(error.message);
  }
};


const dispatch = useDispatch();

useEffect(() => {
  const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" && session?.user) {
      const user = session.user;

      // Send to backend first
      dispatch(sendUserToBackend({
        user_id: user.id,
        email: user.email,
        username: user.user_metadata?.name || "No Name",
      }))
      .then(() => dispatch(checkDevice(user.id)));

      // Navigate after login
      navigate("/");
    }

    // Cleanup listener
    return () => {
      listener.subscription.unsubscribe();
    };
  });
}, [dispatch, navigate]);
  /* STYLES */
  const page = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0a0a0a, #1a1a2e)',
    fontFamily: '"Outfit", sans-serif',
    color: '#fff',
  };

  const card = {
    width: '380px',
    padding: '40px',
    borderRadius: '22px',
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(22px)',
    border: '1px solid rgba(255,255,255,0.25)',
    textAlign: 'center',
  };

  const input = {
    width: '100%',
    padding: '13px',
    marginBottom: '18px',
    borderRadius: '12px',
    border: 'none',
    outline: 'none',
    fontSize: '14px',
  };

  const button = {
    width: '100%',
    padding: '14px',
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.4)',
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    cursor: 'pointer',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  };

  const link = {
    marginTop: '20px',
    fontSize: '14px',
    color: '#00d4ff',
    cursor: 'pointer',
  };


  return (
    <div style={page}>
      <form style={card} onSubmit={handleSignin}>
        <h2 style={{ marginBottom: '30px', letterSpacing: '4px' }}>
          SIGN IN
        </h2>

        <input
          style={input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          style={input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button style={button} type="submit" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign In'}
        </button>
        <button
    type="button"
    style={{
    width: '100%',
    padding: '14px',
    marginTop: '15px',
    borderRadius: '999px',
    border: 'none',
    background: '#ffffff',
    color: '#000',
    cursor: 'pointer',
    fontWeight: '600',
  }}
  onClick={handleGoogleSignin}
>
  Sign in with Google
</button>
        <p style={link} onClick={() => navigate('/signup')}>
          New here? Create account
        </p>
      </form>
    </div>
  );
}

export default Signin;
