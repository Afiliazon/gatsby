import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"



const Header = ({ siteTitle }) => (

  <header className="page-header">
          <div className="container">
            <nav className="navbar navbar-expand-lg align-items-center">
              <a className="navbar-brand" href="index-2.html">
                <img src="assets/images/brand-logo.svg" alt="Cynic brand logo" />
              </a>
              {/* End of .navbar-brand */}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#custom-navbar" aria-controls="custom-navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="custom-toggler-icon" />
                <span className="custom-toggler-icon" />
                <span className="custom-toggler-icon" />
              </button>
              {/* End of .navbar-toggler */}
              <div className="collapse navbar-collapse" id="custom-navbar">
                <ul className="navbar-nav ml-auto align-items-center dynamic-nav">
                  <li className="nav-item has-dropdown">
                    <a href="#" className="nav-link">Services</a>
                    <ul className="submenu">
                      <li><a href="website-design.html">Website Design</a></li>
                      <li><a href="logo-and-branding.html">Logo &amp; Branding </a></li>
                      <li><a href="mobile-app-development.html">Mobile App Development</a></li>
                      <li><a href="search-engine-optimization.html">Search Engine Optimization</a></li>
                      <li><a href="pay-per-click.html">Pay-Per-Click</a></li>
                      <li><a href="social-media-marketing.html">Social Media Marketing</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="about.html" className="nav-link">About</a>
                  </li>
                  <li className="nav-item">
                    <a href="portfolio.html" className="nav-link">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a href="case-studies.html" className="nav-link">Case Study</a>
                  </li>
                  <li className="nav-item">
                    <a href="team.html" className="nav-link">Team</a>
                  </li>
                  <li className="nav-item">
                    <a href="pricing.html" className="nav-link">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a href="news.html" className="nav-link">News</a>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="custom-btn btn-small" data-toggle="modal" data-target="#quote-modal">Free
                      Quote</a>
                  </li>
                </ul>
              </div>
              {/* End of .navbar-nav */}
            </nav>
          </div>
          {/* End of .container */}
          <Helmet>
          <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossOrigin="anonymous"
        ></script>
    <script src={withPrefix('jquery-migrate.min.js')} type="text/javascript" />
    <script src={withPrefix('easing-1.3.js')} type="text/javascript" />
    <script src={withPrefix('bootstrap.bundle.min.js')} type="text/javascript" />
    <script src={withPrefix('isotope.pkgd.min.js')} type="text/javascript" />
    <script src={withPrefix('jquery.waypoints.min.js')} type="text/javascript" />
    <script src={withPrefix('jquery.counterup.min.js')} type="text/javascript" />
    <script src={withPrefix('imagesloaded.pkgd.min.js')} type="text/javascript" />
    <script src={withPrefix('owl.carousel.min.js')} type="text/javascript" />
    <script src={withPrefix('jquery.magnific-popup.min.js')} type="text/javascript" />
    <script src={withPrefix('plugins.js')} type="text/javascript" />
    <script src={withPrefix('main.min.js')} type="text/javascript" />
 </Helmet>
        </header>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
