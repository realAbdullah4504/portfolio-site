import React, { useState } from "react";
import { postUserDetails } from "../../api/postUserDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = ({contactDetails,socialLinks}) => {
  const {facebook,linkedIn,twitter}=socialLinks || {};
  const {address,email,phone}=contactDetails || {};
  //console.log(twitter)

  const success = () => toast.success("Subscribed");
  const failed = () => toast.error("Error while Submitting");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    const filteredData = {
      ...userDetails,
      [name]: value,
    };
    //console.log(filteredData);
    setUserDetails(filteredData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await postUserDetails({ ...userDetails, status: true });
      console.log("data", data);
      success();
    } catch (error) {
      console.log("error", error);
      failed();
    }
    setUserDetails({
      name:'',
      email:'',
      message:'',
    })
  };
  return (
    <>
      
      <section className="business-talking">
        <div className="container">
          <h2>Let’s Talk Business.</h2>
        </div>
      </section>
      {/* {socialLinks.twitter && <button>{socialLinks.twitter}</button>} */}
      <div className="container">
        <section className="main-section contact" id="contact">
          <div className="row">
            <div className="col-lg-6 col-sm-7 wow fadeInLeft">
              <div className="contact-info-box address clearfix">
                <h3>
                <i class="fa-solid fa-location-dot"></i>Address:
                </h3>
                <span>
                  {address}
                </span>
              </div>
              <div className="contact-info-box phone clearfix">
                <h3>
                <i class="fa-solid fa-phone"></i>Phone:
                </h3>
                <span>{phone}</span>
              </div>
              <div className="contact-info-box email clearfix">
                <h3>
                  <i className="fa-pencil"></i>email:
                </h3>
                <span>{email}</span>
              </div>
              <div className="contact-info-box hours clearfix">
                <h3>
                <i class="fa-solid fa-clock"></i>Hours:
                </h3>
                <span>
                  <strong>Saturday - Thursday:</strong> 9am - 6pm
                  <br />
                  <strong>Friday:</strong> Best not to ask.
                </span>
              </div>
              <ul className="social-link">
                <li className="twitter">
                    <a href={twitter} target='_blank'>  
                    <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li className="facebook">
                  <a href={facebook} target='_blank'>
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="facebook">
                  <a href={linkedIn} target='_blank'>
                  <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-5 wow fadeInUp delay-05s">
              <form onSubmit={handleSubmit}>
                <input
                  className="input-text"
                  type="text"
                  name="name"
                  value={userDetails.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="input-text"
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  className="input-text text-area"
                  onChange={handleChange}
                  name="message"
                  value={userDetails.message}
                  cols="0"
                  rows="0"
                  required
                >
                  {userDetails.message}
                </textarea>
                <input
                  className="input-btn"
                  type="submit"
                  value="send message"
                />
                <ToastContainer />
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Contact;
