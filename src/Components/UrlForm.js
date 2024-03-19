// UrlForm.js

import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import "../Styles/main.css";

import arrow_down_img from "../Styles/assets/icons/Vector copy 2.png";
import button_image from "../Styles/assets/icons/Vector 1 copy.png";

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [domain, setDomain] = useState('');
  const [alias, setAlias] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'url') {
      setUrl(value);
    } else if (name === 'domain') {
      setDomain(value);
    } else if (name === 'alias') {
      setAlias(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!url || !domain) {
      alert('URL and Domain are required');
      return;
    }
    
    // Merge alias with base domain to generate shortened URL
    const shortenedUrl = `http://${domain}/${alias || generateRandomAlias()}`;

    // Save data to Firebase
    try {
      const db = firebase.firestore();
      await db.collection('shortened_urls').add({
        originalUrl: url,
        shortenedUrl: shortenedUrl,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log('URL successfully saved to Firebase');
    } catch (error) {
      console.error('Error saving URL to Firebase: ', error);
      alert('Failed to save URL to Firebase');
      return;
    }

    // Redirect
    window.location.href = shortenedUrl;
  };

  const generateRandomAlias = () => {
    // Generate a random alias here
    return Math.random().toString(36).substring(7);
  };

  return (
    <form className="url_form_background" onSubmit={handleSubmit}>
      <div className="vector_design_form">
        {/* Your vector images */}
      </div>
      <section className="actual_form">
        <div className="url">
          <input
            className="url_input"
            type="text"
            name="url"
            placeholder="Paste URL here..."
            style={{ "--placeholder-color": "#3284FF" }}
            value={url}
            onChange={handleChange}
            required
          />
        </div>
        <div className="floated_input">
          <div>
            <select 
              name="domain"
              className="domain_input"
              value={domain}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Choose Domain
              </option>
              <option value="scissors.com">scissors.com</option>
              <option value="scissors.ng">scissors.ng</option>
            </select>
            <img className="arrow_down_img" src={arrow_down_img} alt="" />
          </div>
          <div className="alias">
            <input
              className="alias_input"
              type="text"
              name="alias"
              placeholder="Type Alias here"
              style={{ "--placeholder-color": "#3284FF" }}
              value={alias}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="trim_url_button">
          Trim URL
          <img className="button_image" src={button_image} alt="" />
        </button>
        <div className="form_text">
          <a className="text_content_form" href="#">
            By clicking TrimURL, I agree to the
            <b> Terms of Service, Privacy Policy</b> and Use of Cookies.
          </a>
        </div>
      </section>
      <div className="lower_vector_form">
        {/* Your vector images */}
      </div>
    </form>
  );
};

export default UrlForm;
