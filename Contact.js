import React from "react";
import S from "./Contact.css";

<form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message" />
</form>;

const Contact = () => {
  return (
    <div className={` ui container ${S.body}`}>
      <div
        className={` ${S.wrapper} ${S.contact} ${S.animated}
        ${S.bounceInLeft}`}
      >
        <h1>Email Me</h1>
        <form name="contact" method="POST">
          <p>
            <label>Name</label>
            <input className={S.clear} type="text" name="name" required />
          </p>
          <p>
            <label>Company</label>
            <input className={S.clear} type="text" name="company" />
          </p>
          <p>
            <label>Email Address</label>
            <input className={S.clear} type="email" name="email" required />
          </p>
          <p>
            <label>Phone Number</label>
            <input className={S.clear} type="text" name="phone" required />
          </p>
          <p className={S.full}>
            <label>Message</label>
            <textarea name="message" rows="5" required className={S.clear} />
          </p>
          <p className={S.full}>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
