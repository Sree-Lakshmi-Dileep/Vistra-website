
import React from 'react';
import AccountsIcon from '../assets/account.png';
import { useNavigate } from 'react-router-dom';


function Dblayer2(){
     const navigate = useNavigate();
    const containerStyles ={}
    const header={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem',
    }
    const account={
        width: '40px', 
        height: '40px', 
        objectFit: 'contain'
    }
    const tabs={ 
        display: 'flex',
        gap: '0',
        maxWidth: '400px',
        margin: '2rem auto',
        border: '2px solid #333',
        borderRadius: '8px',
        overflow: 'hidden',

    }
    const tab={
        flex: 1,
  padding: '0.875rem 2rem',
  fontSize: '2rem',
  fontWeight: 500,
  backgroundColor: '#ffffff',
  border: 'none',
  transition: 'all 0.3s ease',
  color: '#333',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
    }
    const tab1style = {
  borderRight: '2px solid #333',
};
const active={
    backgroundColor: '#ffb3d9',
    color: '#333'
}
const content={
     border: '2px solid #4a9eff',
  borderRadius: '8px',
  margin: '2rem',
  padding: '3rem 2rem',
  minHeight: '400px',
  backgroundColor: '#ffffff',
}
const title={
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: '#000',
}
const scancount={
    fontSize: '1.125rem',
    color: '#666',
    marginBottom: '2rem',
}
const buttons={
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
}
const button={
    
  padding: '0.875rem 1.75rem',
  fontSize: '1rem',
  fontWeight: 500,
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  border: '2px solid #000',
}
const button1 ={
    backgroundColor: '#000',
    color: '#fff',
}


  const button2= {
    backgroundColor: '#fff',
    color: '#000',
  };

    return(
       <div className="layer2-Container" style ={containerStyles}>
        <div className="header" style={header}>
            <div className="logo">
            <h2>logo</h2>
            </div>
            <div className="account" >
                <img src={AccountsIcon} alt="Accounts" className="accounts-icon" style={account}/>
                

            </div>
        </div>

        <div className="main">

            <div className="tabs" style={tabs}>
                <div className="tab1" style={{...tab, ...tab1style}}
                onClick={() => navigate('/dblayer1')}>Layer 1</div>
                <div className="tab active" style={{...tab,...active}}>Layer 2</div>
            </div>

            <div className="content" style ={content}>
                <h1 className="title" style={title}>Layer 2</h1>
                <p className="scan-count" style={scancount}>2000 files</p>
                <div className="buttons" style={buttons}>
                    <div className="button1"style={{...button,...button1}}>Learn more</div>
                    <div className="button2"style={{...button,...button2}}>Scan me</div>
                </div>
            </div>

        </div>
       </div>
    )
}
export default  Dblayer2;