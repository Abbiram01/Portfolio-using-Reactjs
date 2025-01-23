import React, { useRef } from "react";
import './contact.css'
import emailjs from '@emailjs/browser'
import linkdin from '../../assets/linkdin.png'
import github from '../../assets/github.png'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kooi6sb', 'template_fb7av84', form.current, 'zJ09ATk7kr_AKIuO0MUy8')
          .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert("Email Sent !");
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                    <textarea name="message" className="msg" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value='send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/abhiram-chelikani-858437318/"><img src={linkdin} alt="" className="link" /></a>
                        <a href="https://github.com/Abbiram01"><img src={github} alt="" className="link" /></a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact