import React from 'react'


export default function Navbar(props) {
  return (
    <div>

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/https://replit.com/@mraryant/4-first-react-app#src/Components/About.jsx">About</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="https://text-generator-chi.vercel.app/">Word Generator </a>
              </li> 
            </ul>
            
          </div>
            <div className={`form-check text-${props.mode==='light'?'dark':'light'} form-switch`}>
                  <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
            </div>
        </div>
      </nav>


    </div>
  )
}
