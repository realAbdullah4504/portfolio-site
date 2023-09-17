import React from "react";

const Footer = ({footerName}) => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer-logo"><a href="#"><img  src={`${process.env.REACT_APP_BASE_URL}/settings/${footerName}`} alt=""/></a></div>
                <span class="copyright">Copyright © 2023 | <a href="http://bootstraptaste.com/">Ghani Soft </a>  
                Web & Mobile Development</span>
            </div>
        </footer>
    )
}

export default Footer;