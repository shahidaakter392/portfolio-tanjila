import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact bg-dark text-white py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

