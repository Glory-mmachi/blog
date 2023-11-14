import "./Newsletter.css";
import mo from '../assets/footer1.svg'
import facebook from '../assets/footer2.svg'
import bird from '../assets/footer3.svg'
import lin from '../assets/footer4.svg'

export default function Newsletter() {
  return (
    <div className="newsletter">

    <div className="newsletter-container">
      <div className="left">
        <h1>
          Subscribe to my <br /><span>Newsletters</span>
        </h1>
        <p>
        Stay updated with the latest articles, news, and insights delivered
            directly to your inbox.
        </p>
      </div>
      <div className="right">
        <input type="email" placeholder="Enter your Email" /> <button>Subscribe</button>
      </div>
    </div>
    <hr />
    <div className="footer">
        <p>&copy;Copyright 2023 by Glory’s blog.</p>
        <ul>
            <li><a href=""><img src={mo} alt="" /></a></li>
            <li><a href=""><img src={facebook} alt="" /></a></li>
            <li><a href=""><img src={bird} alt="" /></a></li>
            <li><a href=""><img src={lin} alt="" /></a></li>
        </ul>
    </div>
    </div>
  );
}
