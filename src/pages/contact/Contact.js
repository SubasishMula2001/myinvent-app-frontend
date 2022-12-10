import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./Contact.scss";
import { FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import axios from "axios";
import { BACKEND_URL } from "../../services/authService";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contactus`, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="contact">
      <h3 className="--mt">Contact Us</h3>
      <div className="section">
        <form onSubmit={sendEmail}>
          <Card cardClass="card">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Message</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="--btn --btn-primary">Send Message</button>
          </Card>
        </form>

        <div className="details">
          <Card cardClass={"card2"}>
            <h3>Contact Information</h3>
            <p>Fill the form or contact us via bellow details</p>

            <div className="icons">
              <span>
                <FaPhoneAlt />
                <a href="tel:+918327650092">
                <p>+91 8327650092</p>
                </a>
              </span>
              <span>
                <FaEnvelope />
                <a href="mailto:subasishmula@gmail.com">
               <p>subasishmula@gmail.com</p>
                </a>
              </span>
              <span>
                <GoLocation />
                <p>Sabang, West Bengal, India</p>
              </span>
              <span>
                <FaFacebook />
                <a href="https://www.facebook.com/subasish.mula.2001/" target="blank">
                <p>Subasish Mula</p>
                </a>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;