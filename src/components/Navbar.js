import React from 'react'
import './Navbar.css'
function Navbar(props) {
  return (
    <>

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

  <a className="navbar-brand title" href="/">
    <img src="https://cdna.artstation.com/p/assets/images/images/042/669/382/large/nz_wrks-tanjiro-kamado-demon-slayer.jpg" width="30" height="30" className="d-inline-block align-top tanjiroimg" alt=""/>
    <span className="title" id='dslr'>Demon Slayer</span> 
  </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>


  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {/* <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/">Disabled</a>
      </li>
    </ul>
  </div> */}
  <div className="form-check form-switch text-light mx-3 my-3 modeset">
              <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" id='Switchmodes' htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
            </div>

</nav>
</>
  )
}

export default Navbar