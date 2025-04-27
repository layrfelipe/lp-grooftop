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
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedbackMessage("");

    try {
      const response = await fetch('https://exquisite-victory-production.up.railway.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setIsLoading(false);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
      setFeedbackMessage("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting form:", error);
      setFeedbackMessage(`Failed to send message: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h2>Questions, ideas, or just want to say hi?</h2>
        <p>We&apos;re always one message away — right here at the top. Fill out the form or drop us a line anytime.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Type your name here" name="name" value={formData.name} onChange={handleChange} required />
          
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Type your email here" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="phone">Phone</label>
          <input type="tel" placeholder="Type your phone here" name="phone" value={formData.phone} onChange={handleChange} />

          <label htmlFor="subject">Subject</label>
          <input type="text" placeholder="Type your subject here" name="subject" value={formData.subject} onChange={handleChange} required />
          
          <label htmlFor="message">Message</label>
          <textarea placeholder="Type your message here" name="message" value={formData.message} onChange={handleChange} required />
          
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.button} disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
          
          {feedbackMessage && <p className={styles.feedback}>{feedbackMessage}</p>}
        </form>
      </div>
    </div>
  );
}
