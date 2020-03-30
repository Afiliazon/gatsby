import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
    
        {/* End of .page-header */}
        {/* banner starts */}
        <div className="banner home-banner d-flex align-items-center">
          <div className="container">
            <div className="row no-gutters align-items-center">
              <div className="col-lg-6 text-center text-lg-left">
                <h1>Write for readers,<br />not for search engines.</h1>
                <p className="larger-txt">Pellentesque eget velit tempus, porta ante eu,<br />consectetur augue nunc mollis tincidunt felis porta.</p>
                <a href="#cynic-projects" className="custom-btn secondary-btn">Check our Projects</a>
              </div>
              {/* End of .col-lg-5 */}
              <div className="col-lg-6">
                <div className="img-container text-center text-lg-right">
                  <Image filename="home-banner.png" alt="Home banner image" className="img-fluid" />
                </div>
                {/* End of .img-container */}
              </div>
              {/* End of .col-lg-7 */}
            </div>
            {/* End of .row */}
          </div>
          {/* End of .container */}
        </div>
        {/* End of .banner */}
        {/* achievements starts */}
        <div className="achievements section-gap theme-bg-d achievement-extra-padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="counter-block d-flex align-items-center justify-content-center">
                  <div className="icon-container">
                    <Image filename="counter-icon-1.png" alt="Happy Clients" />
                  </div>
                  {/* End of .icon-container */}
                  <div className="counter-wrapper">
                    <div className="number">
                      <span className="counter">450</span>+
                    </div>
                    {/* End of .number */}
                    Happy <br />Clients
                  </div>
                  {/* End of .counter-wrapper */}
                </div>
                {/* End of .counter-block */}
              </div>
              {/* End of .col-4 */}
              <div className="col-4">
                <div className="counter-block d-flex align-items-center justify-content-center">
                  <div className="icon-container img2">
                    <Image filename="counter-icon-2.png" alt="Running Projects" />
                  </div>
                  {/* End of .icon-container */}
                  <div className="counter-wrapper">
                    <div className="number">
                      <span className="counter">4510</span>+
                    </div>
                    {/* End of .number */}
                    Running <br />Projects
                  </div>
                  {/* End of .counter-wrapper */}
                </div>
                {/* End of .counter-block */}
              </div>
              <div className="col-4">
                <div className="counter-block d-flex align-items-center justify-content-center">
                  <div className="icon-container">
                    <Image filename="counter-icon-3.png" alt="Project Completed" className="img2" />
                  </div>
                  {/* End of .icon-container */}
                  <div className="counter-wrapper">
                    <div className="number">
                      <span className="counter">2500</span>+
                    </div>
                    {/* End of .number */}
                    Project <br />Completed
                  </div>
                  {/* End of .counter-wrapper */}
                </div>
                {/* End of .counter-block */}
              </div>
            </div>
            {/* End of .row */}
          </div>
          {/* End of .container */}
        </div>
        {/* End of .achievements */}
        <section className="services light-grey-bg" id="cynic-services" data-scroll-offset={165}>
          <div className="floating-service-wrapper section-gap">
            <div className="container">
              <h2 className="section-title text-center">Services We Provide</h2>
              <p className="larger-txt text-center">Pellentesque eget velit tempus, porta ante eu, consectetur.</p>
              <div className="grid-wrapper">
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-lg-6">
                    <a href="logo-and-branding.html" className="service-block text-center">
                      <Image filename="service-icon-1.png" alt="Logo and branding" />
                      <h4>Logo &amp; Branding</h4>
                      <p>Our comprehensive Online Marketing strategy will boost your website and traffic hence monthly sales.</p>
                    </a>
                    {/* End of .service-block */}
                  </div>
                  {/* End of .col-lg-4 */}
                  <div className="col-xl-4 col-lg-6">
                    <a href="#" className="service-block text-center">
                      <Image filename="service-icon-2.png" alt="undefined" />
                      <h4>Website Development</h4>
                      <p>We design professional looking yet simple websites. Our designs are search engine and user friendly.</p>
                    </a>
                    {/* End of .service-block */}
                  </div>
                  {/* End of .col-lg-4 */}
                  <div className="col-xl-4 col-lg-6">
                    <a href="mobile-app-development.html" className="service-block text-center">
                      <Image filename="service-icon-3.png" alt="undefined" />
                      <h4>Mobile App Development</h4>
                      <p>From simple Content Management System to complex eCommerce developer, we cover it all.</p>
                    </a>
                    {/* End of .service-block */}
                  </div>
                  {/* End of .col-lg-4 */}
                  <div className="col-xl-4 col-lg-6">
                    <a href="search-engine-optimization.html" className="service-block text-center">
                      <Image filename="service-icon-4.png" alt="Search Engine Optimization" />
                      <h4>Search Engine Optimization</h4>
                      <p>We design professional looking yet simple websites. Our designs are search engine and user friendly.</p>
                    </a>
                    {/* End of .service-block */}
                  </div>
                  {/* End of .col-lg-4 */}
                  <div className="col-xl-4 col-lg-6">
                    <a href="pay-per-click.html" className="service-block text-center">
                      <Image filename="service-icon-5.png" alt="Pay-Per-Click" />
                      <h4>Pay-Per-Click</h4>
                      <p>We design professional looking yet simple websites. Our designs are search engine and user friendly.</p>
                    </a>
                    {/* End of .service-block */}
                  </div>
                  {/* End of .col-lg-4 */}
                  <div className="col-xl-4 col-lg-6">
                    <a href="#" className="service-block text-center">
                      <Image filename="service-icon-6.png" alt="Online Marketing" />
                      <h4>Online Marketing</h4>
                      <p>Our comprehensive Online Marketing strategy will boost your website and traffic hence monthly sales.</p>
                    </a>
                    {/* End of .service-block */}
                  </div>
                  {/* End of .col-lg-4 */}
                </div>
                {/* End of .row */}
              </div>
              {/* End of .grid-wrapper */}
            </div>
            {/* End of .container */}
          </div>
          {/* End of .floating-service-wrapper */}
        </section>
        {/* our features starts */}
        <section className="features light-grey-bg" id="cynic-about" data-scroll-offset={165}>
          <div className="container">
            <div className="features-grid">
              <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2 offset-lg-1 text-center text-lg-right">
                  <div className="img-container">
                    <Image filename="features-img-1.png" alt="why choose us" className="img-fluid" />
                  </div>
                  {/* End of .img-container */}
                </div>
                {/* End of .col-lg-6 */}
                <div className="col-lg-5">
                  <div className="features-content">
                    <h2 className="section-title">Reasons for choosing us</h2>
                    <p>Nunc eu augue at nunc consectetur venenatis sit amet sodales metus. Sed at gravida nisi, mattis lacinia ipsum. Pellentesque suscipit odio quis ligula maximus aliquet. Integer cursus ipsum et posuere ornare.</p>
                    <a href="about.html" className="hyperlink">Learn More About Us</a>
                  </div>
                  {/* End of .features-content */}
                </div>
                {/* End of .col-lg-6 */}
              </div>
              {/* End of .row */}
            </div>
            {/* End of .features-grid */}
            <div className="features-grid">
              <div className="row align-items-center">
                <div className="col-lg-6 text-center text-lg-left">
                  <div className="img-container">
                    <Image filename="features-img-2.png" alt="why choose us" className="img-fluid" />
                  </div>
                  {/* End of .img-container */}
                </div>
                {/* End of .col-lg-6 */}
                <div className="col-lg-5 offset-lg-1">
                  <div className="features-content">
                    <h2 className="section-title">Donec vel tristique dui, at imperdiet nibh.</h2>
                    <p>Nunc eu augue at nunc consectetur venenatis sit amet sodales metus. Sed at gravida nisi, mattis lacinia ipsum. Pellentesque suscipit odio quis ligula maximus aliquet. Integer cursus ipsum et posuere ornare.</p>
                    <a href="about.html" className="hyperlink">Learn More About Us</a>
                  </div>
                  {/* End of .features-content */}
                </div>
                {/* End of .col-lg-6 */}
              </div>
              {/* End of .row */}
            </div>
            {/* End of .features-grid */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .features */}
        {/* Projects starts */}
        <section className="projects section-gap grey-bg" id="cynic-projects" data-scroll-offset={75}>
          <div className="container">
            <h2 className="section-title text-center">Our Impressive Portfolio</h2>
            <div className="item-showcase grid-wrapper__small-padding">
              <div className="row ">
                <div className="col-lg-4 col-md-6 ">
                  <a href="portfolio.html" className="img-card text-center portfolio-card white-bg " data-toggle="modal" data-target="#product-modal">
                    <Image filename="project-1.png" alt="product" className="img-fluid" />
                    <h4>
                      <span>Cynic Classic Design</span>Web Design</h4>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
                <div className="col-lg-4 col-md-6 ">
                  <a href="portfolio.html" className="img-card text-center portfolio-card white-bg " data-toggle="modal" data-target="#product-modal">
                    <Image filename="project-2.png" alt="product" className="img-fluid" />
                    <h4>
                      <span>Diet Hospital</span>Social Media</h4>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
                <div className="col-lg-4 col-md-6 ">
                  <a href="portfolio.html" className="img-card text-center portfolio-card white-bg " data-toggle="modal" data-target="#product-modal">
                    <Image filename="project-3.png" alt="product" className="img-fluid" />
                    <h4>
                      <span>Repo Deshboard Design</span>Logo Design</h4>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
                <div className="col-lg-4 col-md-6 ">
                  <a href="portfolio.html" className="img-card text-center portfolio-card white-bg " data-toggle="modal" data-target="#product-modal">
                    <Image filename="project-4.png" alt="product" className="img-fluid" />
                    <h4>
                      <span>Cynic Classic Design</span>Social Media</h4>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
                <div className="col-lg-4 col-md-6 ">
                  <a href="portfolio.html" className="img-card text-center portfolio-card white-bg " data-toggle="modal" data-target="#product-modal">
                    <Image filename="project-5.png" alt="product" className="img-fluid" />
                    <h4>
                      <span>Diet Hospital</span>Web Design</h4>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
                <div className="col-lg-4 col-md-6 ">
                  <a href="portfolio.html" className="img-card text-center portfolio-card white-bg " data-toggle="modal" data-target="#product-modal">
                    <Image filename="project-6.png" alt="product" className="img-fluid" />
                    <h4>
                      <span>Repo Deshboard Design</span>Mobile App Development</h4>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
              </div>
              <div className="col-12 text-center"><a href="portfolio.html" className="custom-btn secondary-btn">DISCOVER MORE WORKS</a></div>
              {/* End of .row */}
            </div>
            {/* End of .project-showcase */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .projects */}
        <section className="team section-gap light-grey-bg" id="cynic-team" data-scroll-offset={75} data-scroll-offset-mobile={75}>
          <div className="container">
            <h2 className="section-title text-center">Teamwork Makes the Dream Work</h2>
            <p className="larger-txt text-center">Ut blandit sem vitae ipsum vestibulum finibus. Pellentesque habitant morbi
              tristique senectus</p>
            <div className="grid-wrapper">
              <div className="row">
                <div className="col-md-4">
                  <a href="team.html" className="img-card team-card text-center" data-toggle="modal" data-target="#team-modal">
                    <Image filename="team-member-1.png" alt="team member" className="img-fluid" />
                    <h4>
                      <span>Steve Johnson</span> Chief Exicutive Officer</h4>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-md-4 */}
                <div className="col-md-4">
                  <a href="team.html" className="img-card team-card text-center" data-toggle="modal" data-target="#team-modal">
                    <Image filename="team-member-2.png" alt="team member" className="img-fluid" />
                    <h4>
                      <span>Olivia Jackson</span> Chief Operating Officer</h4>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-md-4 */}
                <div className="col-md-4">
                  <a href="team.html" className="img-card team-card text-center" data-toggle="modal" data-target="#team-modal">
                    <Image filename="team-member-3.png" alt="team member" className="img-fluid" />
                    <h4>
                      <span>Tamerlan Aziev</span> Chief Technology Officer</h4>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-md-4 */}
                <div className="col-md-4">
                  <a href="team.html" className="img-card team-card text-center" data-toggle="modal" data-target="#team-modal">
                    <Image filename="team-member-4.png" alt="team member" className="img-fluid" />
                    <h4>
                      <span>Silvia Perry</span> Head of Marketing</h4>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-md-4 */}
                <div className="col-md-4">
                  <a href="team.html" className="img-card team-card text-center" data-toggle="modal" data-target="#team-modal">
                    <Image filename="team-member-5.png" alt="team member" className="img-fluid" />
                    <h4>
                      <span>John Kenny</span> Senior Design Strategist</h4>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-md-4 */}
                <div className="col-md-4">
                  <a href="team.html" className="img-card team-card text-center" data-toggle="modal" data-target="#team-modal">
                    <Image filename="team-member-6.png" alt="team member" className="img-fluid" />
                    <h4>
                      <span>David Schwimmer</span> Web Developer</h4>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-md-4 */}
                <div className="col-12 text-center">
                  <a href="team.html" className="custom-btn secondary-btn">SEE ALL TEAM MEMBERS</a>
                </div>
              </div>
              {/* End of .row */}
            </div>
            {/* End of .grid-wrapper */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .team */}
        <div className="clients">
          <div className="container">
            <div className="row align-items-center clients-carousel-wrapper owl-carousel">
              <div className="item client">
                <Image filename="client-1.png" alt="clients' logo" />
              </div>
              <div className="item client">
                <Image filename="client-2.png" alt="clients' logo" />
              </div>
              <div className="item client">
                <Image filename="client-3.png" alt="clients' logo" />
              </div>
              <div className="item client">
                <Image filename="client-4.png" alt="clients' logo" />
              </div>
              <div className="item client">
                <Image filename="client-5.png" alt="clients' logo" />
              </div>
              <div className="item client">
                <Image filename="client-6.png" alt="clients' logo" />
              </div>
              <div className="item client">
                <Image filename="client-7.png" alt="clients' logo" />
              </div>
            </div>
            {/* End of .clients-carousel-wrapper */}
          </div>
          {/* End of .container */}
        </div>
        {/* End of .clients */}
        <section className="pricing section-gap light-grey-bg" id="cynic-pricing" data-scroll-offset={75} data-scroll-offset-mobile={75}>
          <div className="container">
            <h2 className="section-title text-center">Pricing Plans for Businesses of All Sizes</h2>
            <p className="larger-txt text-center">Nulla venenatis enim vel eros blandit, sed dignissim risus porta. Nullam
              eget erat pulvinar.</p>
            <div className="grid-wrapper pricing-grid-wrapper">
              <div className="row align-items-center no-gutters">
                <div className="col-xl-6">
                  <div className="pricing-group">
                    <div className="group-title text-center">
                      FOR STARTUPS
                    </div>
                    {/* End of .group-title */}
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <div className="pricing-block text-center  ">
                          <h3 className="pricing-level">
                            Basic
                          </h3>
                          <div className="price">
                            <sup>$</sup>9
                            <sub>/mo</sub>
                          </div>
                          {/* End of .price */}
                          <div className="facilities text-left">
                            <div>
                              <i className="far fa-envelope-open-text" />
                              Unlimited Projects
                            </div>
                            <div>
                              <i className="far fa-user-headset" />
                              Everyday Support
                            </div>
                          </div>
                          {/* End of .facilities */}
                          <a href="https://themeforest.net/item/digital-agency-html-template/20268873?s_rank=4" className="custom-btn secondary-btn">PURCHASE NOW</a>   
                        </div>
                        {/* End of .pricing-block */}
                      </div>
                      {/* End of .col-md-6 */}
                      <div className="col-md-6">
                        <div className="pricing-block text-center  ">
                          <h3 className="pricing-level">
                            Middle
                          </h3>
                          <div className="price">
                            <sup>$</sup>29
                            <sub>/mo</sub>
                          </div>
                          {/* End of .price */}
                          <div className="facilities text-left">
                            <div>
                              <i className="far fa-envelope-open-text" />
                              Unlimited Projects
                            </div>
                            <div>
                              <i className="far fa-user-headset" />
                              Everyday Support
                            </div>
                            <div>
                              <i className="far fa-cloud-upload" />
                              Monthly Updates
                            </div>
                          </div>
                          {/* End of .facilities */}
                          <a href="https://themeforest.net/item/digital-agency-html-template/20268873?s_rank=4" className="custom-btn secondary-btn">PURCHASE NOW</a>   
                        </div>
                        {/* End of .pricing-block */}
                      </div>
                      {/* End of .col-md-6 */}
                    </div>
                    {/* End of .row */}
                  </div>
                  {/* End of .pricing-group */}
                </div>
                {/* End of .col-lg-6 */}
                <div className="col-xl-6">
                  <div className="pricing-group">
                    <div className="group-title text-center">
                      FOR BUSINESS
                    </div>
                    {/* End of .group-title */}
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <div className="pricing-block text-center  active">
                          <h3 className="pricing-level">
                            Pro
                          </h3>
                          <div className="price">
                            <sup>$</sup>49
                            <sub>/mo</sub>
                          </div>
                          {/* End of .price */}
                          <div className="facilities text-left">
                            <div>
                              <i className="far fa-envelope-open-text" />
                              Unlimited Projects
                            </div>
                            <div>
                              <i className="far fa-user-headset" />
                              Everyday Support
                            </div>
                            <div>
                              <i className="far fa-cloud-upload" />
                              Monthly Updates
                            </div>
                            <div>
                              <i className="far fa-user" />
                              Free Domain
                            </div>
                          </div>
                          {/* End of .facilities */}
                          <a href="https://themeforest.net/item/digital-agency-html-template/20268873?s_rank=4" className="custom-btn primary-btn">PURCHASE NOW</a>   
                        </div>
                        {/* End of .pricing-block */}
                      </div>
                      {/* End of .col-md-6 */}
                      <div className="col-md-6">
                        <div className="pricing-block text-center  ">
                          <h3 className="pricing-level">
                            King
                          </h3>
                          <div className="price">
                            <sup>$</sup>99
                            <sub>/mo</sub>
                          </div>
                          {/* End of .price */}
                          <div className="facilities text-left">
                            <div>
                              <i className="far fa-envelope-open-text" />
                              Unlimited Projects
                            </div>
                            <div>
                              <i className="far fa-user-headset" />
                              Everyday Support
                            </div>
                            <div>
                              <i className="far fa-cloud-upload" />
                              Monthly Updates
                            </div>
                            <div>
                              <i className="far fa-user" />
                              Free Domain
                            </div>
                            <div>
                              <i className="far fa-file" />
                              Privacy
                            </div>
                          </div>
                          {/* End of .facilities */}
                          <a href="https://themeforest.net/item/digital-agency-html-template/20268873?s_rank=4" className="custom-btn secondary-btn">PURCHASE NOW</a>   
                        </div>
                        {/* End of .pricing-block */}
                      </div>
                      {/* End of .col-md-6 */}
                    </div>
                    {/* End of .row */}
                  </div>
                  {/* End of .pricing-group */}
                </div>
                {/* End of .col-lg-6 */}
              </div>
              {/* End of . */}
            </div>
            {/* End of .grid-wrapper */}
          </div>
          {/* End of .container */}
        </section>
        <section className="newsletter section-gap theme-bg-d ">
          <div className="container">
            <h2 className="text-center">Sign up for our newsletter to stay up to 
              <br />date with tech news!</h2>
            <form action="#" className="newsletter-form" method="POST">
              <div className="row justify-content-between">
                <div className="col-md">
                  <input type="text" name="fname" placeholder="Name" />
                </div>
                <div className="col-md">
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <div className="col-md-auto">
                  <a href="#" className="custom-btn secondary-btn">SUBSCRIBE</a>
                </div>
              </div>
              {/* End of .row */}
            </form>
            {/* End of .newsletter-form */}
            <div className="social-icons-wrapper d-flex justify-content-center">
              <p>Follow us:</p>
              <ul className="social-icons">
                <li>
                  <a href="http://www.facebook.com/" target="_blank" rel="noopener">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="http://twitter.com/" target="_blank" rel="noopener">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="http://youtube.com/" target="_blank" rel="noopener">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="http://plus.google.com/discover" target="_blank" rel="noopener">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
              </ul>
              {/* End of .social-icons */}
            </div>
            {/* End of .social-icons-wrapper */}
          </div>
          {/* End of .container */}
        </section>
        {/* Section latest-news starts */}
        <section className="latest-news section-gap light-grey-bg" id="cynic-news" data-scroll-offset={75}>
          <div className="container">
            <h2 className="section-title text-center">Latest News</h2>
            <p className="larger-txt text-center">Nulla venenatis enim vel eros blandit, sed dignissim risus porta. Nullam eget erat pulvinar.</p>
            <div className="grid-wrapper">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <a href="news-details.html" className="img-card news-card">
                    <Image filename="news-1.png" alt="news image" className="img-fluid" />
                    <div className="content ">
                      <h4>17 May, 2018
                        <span>Where Can You Find Unique My space Layouts Nowadays</span>
                      </h4>
                    </div>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
                <div className="col-lg-4 col-md-6">
                  <a href="news-details.html" className="img-card news-card">
                    <Image filename="news-2.png" alt="news image" className="img-fluid" />
                    <div className="content ">
                      <h4>18 May, 2019
                        <span>How To Excel In A Technical Job Interview</span>
                      </h4>
                    </div>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
                <div className="col-lg-4 col-md-6">
                  <a href="news-details.html" className="img-card news-card">
                    <Image filename="news-3.png" alt="news image" className="img-fluid" />
                    <div className="content ">
                      <h4>20 May, 2019
                        <span>Myspace Layouts The Missing Element</span>
                      </h4>
                    </div>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
                <div className="col-lg-4 col-md-6">
                  <a href="news-details.html" className="img-card news-card">
                    <Image filename="news-4.png" alt="news image" className="img-fluid" />
                    <div className="content ">
                      <h4>27 March, 2019
                        <span>Home Audio Recording For Everyone</span>
                      </h4>
                    </div>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
                <div className="col-lg-4 col-md-6">
                  <a href="news-details.html" className="img-card news-card">
                    <Image filename="news-5.png" alt="news image" className="img-fluid" />
                    <div className="content ">
                      <h4>24 April, 2019
                        <span>Help Finding Information <br />Online</span>
                      </h4>
                    </div>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
                <div className="col-lg-4 col-md-6">
                  <a href="news-details.html" className="img-card news-card">
                    <Image filename="news-6.png" alt="news image" className="img-fluid" />
                    <div className="content ">
                      <h4>5 June, 2019
                        <span>Myspace Layouts The Missing Element</span>
                      </h4>
                    </div>
                  </a>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
                <div className="col-lg-12 text-center">
                  <a href="#" className="custom-btn secondary-btn">LOAD MORE NEWS</a>
                </div>
                {/* End of .text-center */}
              </div>
              {/* End of .row */}
            </div>
            {/* End of .grid-wrapper */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .latest-news */}
        {/* customer-reviews starts */}
        <section className="customer-reviews section-gap grey-bg">
          <div className="container">
            <h2 className="section-title text-center">What People Think About Us</h2>
            <p className="larger-txt text-center">Nulla venenatis enim vel eros blandit, sed dignissim risus porta. Nullam
              eget erat pulvinar.</p>
            <div className="grid-wrapper">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="img-card review-card text-left white-bg">
                    <div className="media align-items-center">
                      <Image className="img-fluid" filename="reviewer-1.png" alt="reviewer image" />
                      <div className="media-body">
                        <h5>Julian Bowers</h5>
                        <p>CEO at
                          <a href="#">Uber</a>
                        </p>
                      </div>
                    </div>
                    {/* End of .media */}
                    <p>â€œVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed congue non nisi convallis viverra. Proin in nunc varius lorem mattis dictum. Duis tincidunt dignissim volutpat. Mauris sit amet mollis massa.â€ </p>
                  </div>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
                <div className="col-lg-4 col-md-6">
                  <div className="img-card review-card text-left white-bg">
                    <div className="media align-items-center">
                      <Image className="img-fluid" filename="reviewer-2.png" alt="reviewer image" />
                      <div className="media-body">
                        <h5>Ronnie Hall</h5>
                        <p>CTO at
                          <a href="#">Microsoft</a>
                        </p>
                      </div>
                    </div>
                    {/* End of .media */}
                    <p>â€œVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed congue non nisi convallis viverra. Proin in nunc varius lorem mattis dictum. Duis tincidunt dignissim volutpat. Mauris sit amet mollis massa.â€ </p>
                  </div>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
                <div className="col-lg-4 col-md-6">
                  <div className="img-card review-card text-left white-bg">
                    <div className="media align-items-center">
                      <Image className="img-fluid" filename="reviewer-3.png" alt="reviewer image" />
                      <div className="media-body">
                        <h5>Belle Hunt</h5>
                        <p>COO at
                          <a href="#">Apple</a>
                        </p>
                      </div>
                    </div>
                    {/* End of .media */}
                    <p>â€œVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed congue non nisi convallis viverra. Proin in nunc varius lorem mattis dictum. Duis tincidunt dignissim volutpat. Mauris sit amet mollis massa.â€ </p>
                  </div>
                  {/* End of .img-card */}
                </div>
                {/* End of .col-lg-4 */}
              </div>
              {/* End of .row */}
            </div>
            {/* End of .grid-wrapper */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .customer-reviews */}
        {/* location starts */}
        <section className="location section-gap light-grey-bg" id="cynic-contact" data-scroll-offset={75} data-scroll-offset-mobile={75}>
          <div className="container">
            <h2 className="section-title text-center">Our Location</h2>
            <ul className="nav nav-tabs location-tab justify-content-center" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#location-tab-1">Los Angeles</a>
              </li>     
            </ul>
            {/* End of .nav-tabs */}
            <div className="tab-content location-tab-content grid-wrapper" id="myTabContent">
              <div className="tab-pane fade show active" id="location-tab-1">
              </div>
              <Image className="img-fluid" filename="mapa.jpg" alt="reviewer image" />
            </div>
            {/* End of .tab-content */}
            <div className="contact-info">
              <div className="row justify-content-between">
                <div className="col-lg-4 col-md-6">
                  <div className="info">
                    <h5>Head Quarter</h5>
                    <p>868 S. La Sierra Drive <br />Los Angeles <br />California, USA</p>
                  </div>
                  {/* End of .info */}
                </div>
                {/* End of .col-md-3 */}
                <div className="col-lg-3 col-md-6">
                  <div className="info">
                    <h5>Email</h5>
                    <a href="mailto:info@companyname.com">info@companyname.com</a>
                  </div>
                  {/* End of .info */}
                </div>
                {/* End of .col-md-3 */}
                <div className="col-lg-3 col-md-6">
                  <div className="info">
                    <h5>Phone</h5>
                    <a href="tel:+12224005555">+1 (222) 400-5555</a>
                  </div>
                  {/* End of .info */}
                </div>
                {/* End of .col-md-3 */}
                <div className="col-md-6 col-lg-2 text-lg-right info">
                  <a href="#" className="custom-btn secondary-btn" data-toggle="modal" data-target="#quote-modal">Contact
                    Us</a>
                </div>
              </div>
              {/* End of .contact-in */}
            </div>
            {/* End of .contact-info */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .location */}
        <div className="modal fade team-modal" id="team-modal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <i className="fas fa-times" />
                </button>
                {/* End of .close */}
              </div>
              {/* End of .modal-header */}
              <div className="modal-body text-center">
                <Image filename="team-modal-img.png" alt="team modal image" className="img-fluid modal-feat-img" />
                <div className="modal-title">
                  <h4>Steve Johnson
                    <span>Chief Exicutive Officer</span>
                  </h4>
                </div>
                {/* End of .modal-title */}
                <p>To be fair, in certain contexts, your professional bio does need to be more formal, like Mr. Erickson's up there. But in many cases, writing a bio that's readable  even conversational is actually a really good thing. But once created, this bio should represent who you are in the eyes.</p>
                <ul className="social-icons">
                  <li>
                    <a href="http://www.behance.net/" target="_blank" rel="noopener">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="http://twitter.com/" target="_blank" rel="noopener">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="http://plus.google.com/discover" target="_blank" rel="noopener">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li>
                    <a href="http://dribbble.com/" target="_blank" rel="noopener">
                      <i className="fab fa-dribbble" />
                    </a>
                  </li>
                </ul>
                {/* End of .social-icons */}
              </div>
              {/* End of .modal-body */}
            </div>
            {/* End of .modal-content */}
          </div>
          {/* End of .modal-dialog */}
        </div>
        {/* End of .team-modal */}
        {/* Product Modal Starts */}
        <div className="modal fade full-width-modal product-modal" id="product-modal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <i className="fas fa-times" />
                </button>
                {/* End of .close */}
              </div>
              {/* End of .modal-header */}
              <div className="modal-body">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="modal-img text-center">
                      <Image filename="portfolio-modal.png" alt="product-modal" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="modal-body__inner-content">
                      <h4>
                        <span>Chief Exicutive Officer</span>
                        Creative Web Design
                      </h4>
                      <p>In the early years of the commercial web, we were all Web Designers. Digital interactions, at that stage, were not incredibly sophisticated: most websites were structured as a set of individual pages connected to each other via buttons and links.</p>
                      <p>In more complex websites and information-heavy systems, the web designer would pair with an Information Architect to make sure content was organized in a way that made for that.</p>
                      <a href="about.html" className="hyperlink">Launch Website</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of .modal-body */}
            </div>
            {/* End of .modal-content */}
          </div>
          {/* End of .modal-dialog */}
        </div>
        {/* End of .portfolio-modal */}
        {/* Quote modal starts
    ================================= */}
        <div className="modal fade full-width-modal quote-modal" id="quote-modal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content white-bg">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <i className="fas fa-times" />
                </button>
                {/* End of .close */}
              </div>
              {/* End of .modal-header */}
              <div className="modal-body d-flex align-items-center justify-content-center text-center">
                <div className="quote-form-wrapper text-center">
                  <h3>Get a Free Quote</h3>
                  <form method="POST" className="quote-form text-center row" action="#">
                    <div className="col-lg-6">
                      <input type="text" name="fname" placeholder="Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" name="phone" placeholder="Phone" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" name="website" placeholder="Website" />
                    </div>
                    <div className="col-lg-12">
                      <textarea placeholder="Message" name="message" defaultValue={""} />
                      <button type="submit" className="custom-btn secondary-btn w-100">GET A QUOTE</button>
                      <div className="social-icons-wrapper d-flex justify-content-center">
                        <p>Follow us:</p>
                        <ul className="social-icons">
                          <li>
                            <a href="http://www.facebook.com/" target="_blank" rel="noopener">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="http://twitter.com/" target="_blank" rel="noopener">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="http://youtube.com/" target="_blank" rel="noopener">
                              <i className="fab fa-youtube" />
                            </a>
                          </li>
                          <li>
                            <a href="http://plus.google.com/discover" target="_blank" rel="noopener">
                              <i className="fab fa-google-plus-g" />
                            </a>
                          </li>
                        </ul>
                        {/* End of .social-icons */}
                      </div>
                      {/* End of .social-icons-wrapper */}
                    </div>
                  </form>
                  {/* End of .quote-form */}
                </div>
                {/* End of .quote-form-wrapper */}
              </div>
              {/* End of .modal-body */}
            </div>
            {/* End of .modal-content */}
          </div>
          {/* End of .modal-dialog */}
        </div>
        {/* End of .quote-modal */}
        {/* footer starts */}
        <footer className="page-footer dark-footer-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget widget-about">
                  <a href="index-2.html"><Image className="footer-logo" filename="/footer-logo.svg" alt="footer logo" height={16} /></a>
                  <p>Ut wisi enim ad minim veniam. Quis nostrud exerci tation ullam corper suscipit lobortis nisl ut
                    aliquip ex eading.</p>
                  <ul className="social-icons">
                    <li>
                      <a href="http://www.facebook.com/" target="_blank" rel="noopener">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="http://twitter.com/" target="_blank" rel="noopener">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="http://youtube.com/" target="_blank" rel="noopener">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="http://plus.google.com/discover" target="_blank" rel="noopener">
                        <i className="fab fa-google-plus-g" />
                      </a>
                    </li>
                  </ul>
                  {/* End of .social-icons */}
                  <p className="copywrite-txt">Â© 2019 <a href="http://www.axilthemes.com/">Axilthemes</a>. All Rights
                    Reserved.</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-widget">
                  <h5 className="footer-nav-title">Services</h5>
                  <ul className="footer-nav dynamic-nav">
                    <li><a href="website-design.html">Website Design</a></li>
                    <li><a href="logo-and-branding.html">Logo &amp; Branding </a></li>
                    <li><a href="mobile-app-development.html">Mobile App Development</a></li>
                    <li><a href="search-engine-optimization.html">Search Engine Optimization</a></li>
                    <li><a href="pay-per-click.html">Pay-Per-Click</a></li>
                    <li><a href="social-media-marketing.html">Social Media Marketing</a></li>
                  </ul>
                </div>
              </div>
              {/* End of .col-lg-2 */}
              <div className="col-lg-3">
                <div className="footer-widget">
                  <h5 className="footer-nav-title">Support</h5>
                  <ul className="footer-nav dynamic-nav">
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                  </ul>
                </div>
              </div>
              {/* End of .col-lg-2 */}
              <div className="col-lg-2">
                <div className="footer-widget">
                  <h5 className="footer-nav-title">Resources</h5>
                  <ul className="footer-nav dynamic-nav">
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="case-studies.html">Case Studies</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="news.html">News</a></li>
                  </ul>
                </div>
              </div>
              {/* End of .col-lg-2 */}
            </div>
            {/* End of .row */}
          </div>
          {/* End of .container */}
        </footer>
        {/* End of .page-footer */}
        {/* Javascripts */}
        {/* jQuery */}
        {/* jQuery Easing Plugin */}
        {/* Bootstrap js */}
        {/* jQuery progressbar plugin */}
        {/* ImagesLoaded js */}
        {/* Owl carousel js */}
        {/* Magnific popup */}
        {/* Plugins */}
        {/* Custom Script */}
        {/* Mirrored from axilthemes.com/templates/cynic/illustrated-small-digital-agency/ by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 23 Mar 2020 10:01:54 GMT */}
      
  </Layout>
)

export default IndexPage
