"use client";

import { useState } from "react";
import styles from "./page.module.scss";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h2>Questions, ideas, or just want to say hi?</h2>
        <p>We&apos;re always one message away — right here at the top. Fill out the form or drop us a line anytime.</p>

        <div className={styles.form}>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Type your name here" name="name" value={formData.name} onChange={handleChange} />
          
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Type your email here" name="email" value={formData.email} onChange={handleChange} />

          <label htmlFor="phone">Phone</label>
          <input type="tel" placeholder="Type your phone here" name="phone" value={formData.phone} onChange={handleChange} />

          <label htmlFor="subject">Subject</label>
          <input type="text" placeholder="Type your subject here" name="subject" value={formData.subject} onChange={handleChange} />
          
          <label htmlFor="message">Message</label>
          <textarea placeholder="Type your message here" name="message" value={formData.message} />
          
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
