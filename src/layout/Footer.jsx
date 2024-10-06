import logo from '../assets/logo/Logo.png';
import FooterLogo from '../components/card/smallComponent/FooterLogo';

function Footer() {
  return (
    <div>
      <footer className="footer bg-black text-white p-10">
        <aside>
          <img src={logo} alt="" className=''/>
          <p>
            Edwin Diaz is a software and web <br />
            technologies engineer, a life coach <br />
            trainer who is also a serial .
          </p>
          <FooterLogo/>
        </aside>
        <nav>
          <h6 className="footer-title">About</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Why Car Doctor</a>
          <a className="link link-hover">About</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accesbility</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer
