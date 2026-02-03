import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
         <button onClick={() => navigate('/dblayer1')}>
        Layer 1
      </button>

      <button onClick={() => navigate('/dblayer2')}>
        Layer 2
      </button>
    </div>
     
    
  );
}

export default Home;
