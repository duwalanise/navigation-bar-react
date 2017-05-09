import React, { PropTypes } from 'react';


const Navigation = props =>
  <nav className={`navbar navbar-fixed-top ${props.navClass}`}>
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="/"><i className="fa fa-grav" /></a>
      </div>
      <div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li><a href="/"><span>Home</span></a></li>
            <li><a href="/#/office"><span>Office</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    { props.children }
  </nav>;

export default Navigation;

Navigation.defaultProps = {
  navClass: '',
  children: null,
};

Navigation.propTypes = {
  navClass: PropTypes.string,
  children: PropTypes.any,
};