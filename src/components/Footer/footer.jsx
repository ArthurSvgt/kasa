import './footer.css';
import logo from '../../assets/LOGO.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <img className='img-logo' src={logo} alt="a" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;