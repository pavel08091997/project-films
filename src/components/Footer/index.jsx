import React from "react";

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {date}
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
