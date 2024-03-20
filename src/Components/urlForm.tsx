// @ts-ignore

import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import "../Styles/main.css";

import vector_A from "../Styles/assets/icons/Vector-8 copy.png";
import vector_B from "../Styles/assets/icons/Vector-9 copy.png";
import vector_C from "../Styles/assets/icons/vector 10.png";
import arrow_down_img from "../Styles/assets/icons/Vector copy 2.png";
import button_image from "../Styles/assets/icons/Vector 1 copy.png";
import vector_D from "../Styles/assets/icons/footer 1.png";
import vector_E from "../Styles/assets/icons/footer 2.png";

const UrlForm: React.FC = () => {
    const [url, setUrl] = useState<string>('');
    const [domain, setDomain] = useState<string>('');
    const [alias, setAlias] = useState<string>('');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = event.target;
      if (name === 'url') {
        setUrl(value);
      } else if (name === 'domain') {
        setDomain(value);
      } else if (name === 'alias') {
        setAlias(value);
      }
    };
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
  
    const generateRandomAlias = (): string => {
      // Generate a random alias here
      return Math.random().toString(36).substring(7);
    };
    return (
        <form className="url_form_background" onSubmit={handleSubmit}>
          <div className="vector_design_form">
          <img className="vector_A" src={vector_A} alt="" />
            <img className="vector_B" src={vector_B} alt="" />
            <img className="vector_C" src={vector_C} alt="" />
          </div>
          <section className="actual_form">
            <div className="url">
              <input
                className="url_input"
                type="text"
                name="url"
                style={{ "--placeholder-color": "#3284FF" } as any}
                placeholder="Paste URL here..."
                // style={{ "--placeholder-color": "#3284FF" }}
                value={url}
                onChange={handleChange}
                required
              />
            </div>
            <div className="floated_input">
              <div>
                <select 
                  style={{ "--placeholder-color": "#3284FF" } as any}
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
                  style={{ "--placeholder-color": "#3284FF" } as any}
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
          <img className="vector_D" src={vector_D} alt="" />
            <img className="vector_E" src={vector_E} alt="" />
          </div>
        </form>
      );
    };
    
    export default UrlForm;