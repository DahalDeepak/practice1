import React from 'react';
import './Dash.css';
import DashNav from './DashNav';
import DashScreen from './DashScreen';
import LOGO from '../../Images/zetLogo.jpeg';
export default function Dashhboard() {
  return (
   <>
      <div className="card mb-3" style={{ boxShadow: "none",  }} >
        <div className="row g-0">
          <div className="col-md-3" style={{width: "280px",height: "550px",}}>
          <center>
        <div className='set' style={{display: "flex", flexDirection: "row"}}>
        <img src={LOGO} alt="" style={{width: 80,height: 70 }} />    
   <h5  
    style={{marginTop: 40}}
    >
    Zetta Circles
    </h5>
    </div>
    </center>
    <br/>
            <DashNav/>
          </div>
          <div className="col-md-9">

            <div className="row g-2">

              <div className='container-fuild my-4' style={{ width: "auto",height:"500px"  }}>

                    <DashScreen/>
              </div>




            </div>


          </div>
        </div>
      </div>



   
   </>
  )
}
