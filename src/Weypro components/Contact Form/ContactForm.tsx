import { useState } from "react";
import img9 from '../../assets/weypro 9.jpg'

const FORM_ENDPOINT = "Desktop "; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="container">

      <div className="imgText">
        <p><b>Contact me with what you would like to have done.</b></p>
        <p><b> I do :</b></p>
        <p><b>Photos $160</b></p>
        <p><b>1hr videos 300 2hr</b></p>
      </div>

      <div className= 'form'> 
      <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
      
          <textarea
            placeholder="Yourmessage"
            name="message"
            className="Yourmessage"
          />
        
          <input
            type="text"
            placeholder="Your name"
            className="Yourname"
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            className="email"
          />
       
          <button
            className="submit"
            type="submit"
          >
            Send a message
          </button>

      </form>
      </div>
    </div>
  );
};
export default ContactForm;
