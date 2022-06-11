var I = require("react-fontawesome");

export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="container">
          <h2 className="title">Contact me...</h2>
          <div className="contact-content flex">
            <div className="column left">
              <div className="icons">
                <div className="row">
                  <I className="fas fa-user"></I>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Pavan Bandichode</div>
                  </div>
                </div>
                <div className="row">
                  <I className="fas fa-map-marker"></I>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Pune,Maharashtra</div>
                  </div>
                </div>
                <div className="row">
                  <I className="fas fa-envelope"></I>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">pavan.bandichode@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right" style={{ zIndex: 99 }}>
              <div className="icons">
                <div className="row">
                  <I className="fas fa-linkedin"></I>
                  <div className="info">
                    <a
                      href="https://www.linkedin.com/in/pavanbandichode/"
                      className="head"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div className="row">
                  <I className="fas fa-twitter"></I>
                  <div className="info">
                    <a
                      href="https://twitter.com/PavanBandichode"
                      className="head"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
                <div className="row">
                  <I className="fas fa-phone"></I>
                  <div className="info">
                    <a href="tel:+919823452853" className="head">
                      Whatsapp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
