/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

exports.onRenderBody = ({setPostBodyComponents}) => {
          setPostBodyComponents([
            <script type="text/javascript" src={"js/beauty.custom.js"}/>,
            <script type="text/javascript" src={"jquery-migrate.min.js"} />,
            <script type="text/javascript" src={"easing-1.3.js"}  />,
            <script type="text/javascript" src={"bootstrap.bundle.min.js"} />,
            <script type="text/javascript" src={"isotope.pkgd.min.js"}  />,
            <script type="text/javascript" src={"jquery.waypoints.min.js"}  />,
            <script type="text/javascript" src={"jquery.counterup.min.js"} />,
            <script type="text/javascript" src={"imagesloaded.pkgd.min.js"} />,
            <script type="text/javascript" src={"owl.carousel.min.js"}  />,
            <script type="text/javascript" src={"jquery.magnific-popup.min.js"}/>,
            <script type="text/javascript" src={"plugins.js"}  />,
            <script type="text/javascript" src={"main.min.js"} />
          ]);
  };