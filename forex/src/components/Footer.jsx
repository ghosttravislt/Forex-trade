import footerImage from "../assets/images/footer-image-removebg.png";

const Footer = (footerProp) => {
  return (
    <div className="footer_container">
      <p className="footer-title">{footerProp.footerTitle}</p>
      <p className="footer-text">{footerProp.text}</p>
      <div className="footer-image-container">
        <img
          src={footerImage}
          alt="Image with dashboard"
          className="footer-image"
        />
      </div>
      <div className="footer-details_container">
        <div className="footer-details">
          <div className="footer-logo">logo</div>
          <button className="btn4">Get started</button>
          <button className="btn3">Try pro</button>
          <div className="footer-social">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>
        <div className="footer-links_container">
          <ul className="footer-links">
            <h4>Platform</h4>
            <li>Plans & Pricing</li>
            <li>AI Manager </li>
          </ul>

          <ul className="footer-links1">
            <h4>Company</h4>
            <li>Blog</li>
            <li>Careers </li>
            <li>News</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
