import { useState } from "react"

const Navbar=(props)=> {

  return (
    <nav className={`navbar bg-${props.mode} text-${props.mode==="light"? "dark" : "light"}`}>
      <div className="container-fluid">
        <a href="NULL" className={`navbar-brand text-${props.mode==="light"? "dark" : "light"} `}>{props.title}</a>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">{props.search}</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode==="light"? "dark" : "light"} `}>
          <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
        </div>
        

      </div>
    </nav>
  )

}


export default Navbar;




