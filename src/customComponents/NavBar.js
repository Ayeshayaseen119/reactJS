import React from 'react'
import './NavBar.css'
import PropTypes from 'prop-types'

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="home"href="https://chatgpt.com/c/67c1b559-91c4-8004-9314-dc6f5abb823e">Home</a>
          </li>
          <li className="nav-item">
            <a className="about" href="/About" target = "_main">{props.about}</a>
          </li>
          <li className="nav-item">
            <a className="contact" href="/">Contact</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

NavBar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
};

NavBar.defaultProps = {
  title: 'TextUtils'
}




