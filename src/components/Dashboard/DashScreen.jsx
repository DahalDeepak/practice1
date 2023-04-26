import React from 'react';
import './Dash.css';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import DashItme from './DashItme';

export default function DashScreen() {
  return (
    <>
    <div className="container my-1 m-5 ">
        <div className="row">
            {/* <h1
                className="display-2 fw-bold text-dark text-loweruppercase"
                style={{ fontSize: 25 }}
            >
                Features Pakages
                <br />
                <span style={{ fontSize: "14px", color: "grey", fontWeight: "lighter" }}>Enter the information to access all features</span>
            </h1> */}

            <div className='container'>
                <div className="mb-2 ff" >
                    <input
                        type="email"
                        className="form-control"
                        id="form"
                        placeholder="Search Here For File "
                       
                    />
                    <div className='btnn'>
                    <Button variant="outlined" startIcon={<FilterListIcon/>}
                        className="btn text-white"
                        style={{ backgroundColor: "#55acee", border: "none" }}
                    >
                      Add Filter
                    </Button></div>
                </div>
                <div className='btnn1'>
                    <Button variant="outlined" startIcon={<FilterListIcon/>}
                        className="btn text-white"
                        style={{ backgroundColor: "#55acee", border: "none" }}
                    >
                      Add Filter
                    </Button></div>

            </div>


            <DashItme/>

        </div>
    </div>

</>
  )
}
