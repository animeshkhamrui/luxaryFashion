import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="pt-5">
        <iframe
        title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.103998600551!2d88.42524581443408!3d22.575213338565167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275927b0061ad%3A0x496c2fab98874c86!2sWebskitters%20Technology%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1665974637310!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <section className="container  mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
          <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</p>
          
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" name="name" className="form-control" />
                      <label for="name" className="">Your name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" name="email" className="form-control" />
                      <label for="email">Your email</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input type="text" name="subject" className="form-control" />
                      <label for="subject">Subject</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea type="text" name="message" rows="2" className="form-control md-textarea"></textarea>
                      <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-left">
                <button className="btn btn-dark" >Send</button>
              </div>               
              </form>
        </section>
      </div>
    </div>
  
  );
};

export default Contact;
