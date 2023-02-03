
import './footer.scss'
import logo from '../../assets/images/logo.svg'
import fb from '../../assets/images/icon-facebook.svg'
import tw from '../../assets/images/icon-twitter.svg'
import ig from '../../assets/images/icon-instagram.svg'

const Footer = () => {
    return (
        <div id='footer'>
            <div className="container footer-container">
                <div className="row footer-row">
                    <div className="col-lg-2 footer-col">
                        <img className='footer-logo' src={logo} alt='Logo'/>
                    </div>
                    <div className="col-lg-2 footer-link">
                        <p className="footer-item">FAQs</p>
                        <p className="footer-item">Contact Us</p>
                    </div>
                    <div className="col-lg-2 footer-link">
                        <p className="footer-item">Privacy Policy</p>
                        <p className="footer-item">Press Kit</p>
                    </div>
                    <div className="col-lg-2 footer-link">
                        <p className="footer-item">Install Guide</p>
                        
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2 footer-icons">
                        <span className="footer-icon">
                            <img src={fb} alt="Facebook Icon" />
                        </span>
                        <span className="footer-icon">
                            <img src={tw} alt="Twitter Icon" />
                        </span>
                        <span className="footer-icon">
                            <img src={ig} alt="Instagram Icon" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
