import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import Button from '@mui/material/Button';
export default function DashButton() {
  return (
    <>
    <div className='container'>
    <nav className="navbar bg-light mt-2">
  <div className="container-fluid">
    <a className="navbar-brand">
    <button className="btn btn-outline-dark" type="submit">
        + Create A New Folder 
      </button>

      <button className="btn btn-outline-dark" type="submit" style={{margin: 10}}>
        + Add New File
      </button>

    </a>
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
     <Button  color="inherit" startIcon={<MenuIcon/>} style={{color: "gray",width: 50 ,height: 40}}></Button>
     <Button  color="inherit" startIcon={<ViewCompactIcon/>}  style={{color: "orange",width: 50 ,height: 40}}></Button>
    </form>
  </div>
</nav>

    </div>
    
    </>
  )
}
