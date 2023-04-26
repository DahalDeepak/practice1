import React from 'react'
import './Dash.css';
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SearchOffOutlinedIcon from '@mui/icons-material/SearchOffOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {Link} from 'react-router-dom';
export default function DashNav() {
    return (

        <>
            <div className='container'>
      
                <center>
                <Link to='/'>  
                <Button color="secondary" startIcon={<HomeOutlinedIcon/>}
                            className="btn btn-secondary btnn1"
                            id='btun'
                            style={{ color: "#8f8e8e", border: "none", marginLeft:"-80px",}}>
                      Home
                        </Button></Link>
                    <br /><br />
                    <center>
                        <Link to="/Profile">
                        <Button color="secondary" startIcon={<AccountCircleIcon />}
                            className="btn btn-secondary btnn1"
                            id='btun'
                            style={{ color: "#8f8e8e", border: "none", marginLeft:"-80px",}}>
                            Profile
                        </Button></Link>
                    </center>
                    <br />
                    <center>
                        <Link to='/User'>
                        <Button color="secondary" startIcon={<PeopleAltOutlinedIcon/>}
                            className="btn btn-secondary"
                            id='btun'
                            style={{ color: "#8f8e8e", border: "none", marginLeft:"-80px" }} >
                            Users
                        </Button></Link>
                    </center>
                    <br />
                    <center>
                        <Link to="/Marketing">
                        <Button color="secondary" startIcon={<StorefrontOutlinedIcon/>}
                            className="btn btn-secondary"
                            id='btun'
                            style={{ color: "#8f8e8e", border: "none", marginLeft:"-50px" }}>
                           Marketing
                        </Button></Link>
                    </center>
                    <br />
                    <center>
                        <Link to="/Qurey">
                        <Button color="secondary" startIcon={<SearchOffOutlinedIcon/>}
                            className="btn btn-secondary"
                            id='btun'
                            style={{ color: "#8f8e8e", border: "none", marginLeft:"-70px" }}>
                            Queries
                        </Button></Link>

                    </center>


                    <br />
                    <center>
                        <Link to='/Documents'>
                        <Button color="secondary" startIcon={<DescriptionOutlinedIcon/>}
                            className="btn btn-secondary"
                            id='btun'
                            style={{ color: "#8f8e8e", border: "none", marginLeft:"-50px" }}>
                           Documents
                        </Button></Link>

                    </center>

                    <br />
                    <center>
                        <Link to="/Customize">
                        <Button color="secondary" startIcon={
                    <ReceiptLongOutlinedIcon/>}
                            className="btn btn-secondary"
                            id='btun'
                            style={{ color: "#8f8e8e", border: "none", marginLeft:"-30px" }}>
                            Customization
                        </Button></Link>

                    </center>
                    <br />
                    <center>
                        <Link to='/Help'>
                        <Button color="secondary" startIcon={
                       <SupportOutlinedIcon/> 
                    }
                            className="btn btn-secondary"
                            id='btun'
                            style={{ color: "#8f8e8e", border: "none", marginLeft:"-40px" }}>
                            Help Center
                        </Button></Link>

                    </center>


                    <br />
                    <center>
                        <Link to='/Setting'>
                        <Button color="secondary" startIcon={
                             <SettingsOutlinedIcon/>   
                        }
                            className="btn btn-secondary"
                            id='btun'
                            style={{ color: "#8f8e8e", border: "none", marginLeft:"-60px" }}>
                            Settings
                        </Button></Link>

                    </center>
                </center>



            </div>

        </>
    )
}
