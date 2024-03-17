import "../Styles/main.css";
import "../Styles/contact.css";
import React, { useState, useEffect } from 'react';


import Hero_Logo from "../Styles/assets/icons/Vector-6.png";
import Hero_Line from "../Styles/assets/icons/Vector 2-3.png";
import hero_features from "../Styles/assets/icons/Vector copy 5.png";
import vector_B_footer from "../Styles/assets/icons/more icons/Vector-13.png";
import vector_C_footer from "../Styles/assets/icons/more icons/Vector-14.png";
import actual_scissor_logo from "../Styles/assets/icons/Vector-7.png";
import actual_scissor_line from "../Styles/assets/icons/Vector 2-2.png";
import footer_img from "../Styles/assets/icons/footer 7.png";
import footer_img_2 from "../Styles/assets/icons/icons8-instagram-50.png";
import footer_img_3 from "../Styles/assets/icons/Vector-9.png";
import footer_img_4 from "../Styles/assets/icons/Vector-10.png";
import line_footer from "../Styles/assets/icons/Vector 2-2.png";
import c_img from "../Styles/assets/icons/icons8-c-32.png";
import vector_D_footer from "../Styles/assets/icons/more icons/Vector-9.png";
import vector_E_footer from "../Styles/assets/icons/more icons/Vector-10.png";
import vector_F_footer from "../Styles/assets/icons/more icons/Vector-11.png";
import vector_A_footer from "../Styles/assets/icons/more icons/Vector-12.png";
import BackgroundOne from "../Styles/assets/images/unsplash_Evp4iNF3DHQ.png";
import BackgroundTwo from "../Styles/assets/images/Untitled-1 2.png";
import { Link } from "react-router-dom";

const styles = {
  background: `url(${BackgroundOne}), url(${BackgroundTwo})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

function CountryDropdown() {
  // State to store the fetched countries
  const [countries, setCountries] = useState([]);

  // Function to fetch countries from the REST Countries API
  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error fetching countries:", error);
      return [];
    }
  };

  // Function to populate the dropdown with fetched countries
  const populateCountries = (countriesData) => {
    // Sort countries alphabetically by name
    countriesData.sort((a, b) => {
      const countryA = a.name.common.toUpperCase();
      const countryB = b.name.common.toUpperCase();
      if (countryA < countryB) return -1;
      if (countryA > countryB) return 1;
      return 0;
    });

    setCountries(countriesData);
  };

  // Fetch countries data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await fetchCountries();
      populateCountries(countriesData);
    };
    fetchData();
  }, []);

  return (
    <select placeholder="Please Select" id="countrySelect">
      {countries.map((country) => (
        <option key={country.alpha3Code} value={country.alpha3Code}>
          {country.name.common}
        </option>
      ))}
    </select>
  );

}

function LoginPage() {

  
  return (
    <div  className="container" style={styles}>

{/* <div className="backround">
          <img className="BackgroundTwo" src={BackgroundTwo}></img>
        </div> */}
      {/* The header that contains the navigation starts from here */}
      <header className="hero_section">
          {/* The logo */}
          <div className="scissors">
            <img className="Hero_Logo" src={Hero_Logo} alt="" />
            <img className="Hero_Line" src={Hero_Line} alt="" />
            <div>SCISSORS</div>
          </div>
          {/* Logo ends here */}
          {/* The nav bar starts here */}
          <nav className="all_navigator">
            <ul className="Hero_Nav">
              <li className="hero_url">My URLs</li>
              <li>
                Features
                <img className="hero_features" src={hero_features} alt="" />
              </li>
              <li>Pricing</li>
              <li>Analytics</li>
              <li>FAQs</li>
            </ul>
            <div className="hero_button">
            <Link to="/login" className="hero_login">Log in</Link>
              <button className="hero_try_for_free">Try for free</button>
            </div>
          </nav>
          {/* end of nav bar */}
        </header>
        {/* The header ends here */}
        <div className="Header">
        <p>
          Let's get in touch
        </p>
       </div>
      <main className="main_contact">
        <form className="form">
          <section class="first_section">
            <div class="first_name">
              <div for="fname">
                First Name*
              </div>
              <input
                type="text"
                className="input-field fname"
                name="fname"
                required
              />
            </div>
            <div class="last_name">
              <div for="lname">
                Last Name*
              </div>
              <input
                type="text"
                className="input-field lname"
                name="lname"
                required
              />
            </div>
          </section>

          <section className="second_section">
            <div className="Company">
              <div for="company_name">
                Company Name*
              </div>
              <input
                type="text"
                name="cname"
                className="input-field cname"
                required
              />
            </div>
          </section>

          <section className="third_section">
            <div className="Businessname">
              <div for="business_name">
                Business Email Address*
              </div>
              <input
                type="email"
                name="bname"
                className="input-field bname"
                required
              />
            </div>
          </section>

          <section class="fourth_section">
            <div class="phone_number">
              <div for="Phone">
                Phone Number*
              </div>
              <input type="number" className="input-field pname" required />
            </div>
          </section>

          <section class="fifth_section">
            <div class="job">
              <div for="job_title">
                Job Title*
              </div>
              <select
                name="job_level"
                className="select-field job_level"
                placeholder="Please Select"
                id="activity"
                required
              >
                <option value="" disabled selected hidden>
                  Please Select
                </option>
                <option value="Analyst">Analyst</option>
                <option value="Associate">Associate</option>
                <option value="Team Lead">Team Lead</option>
                <option value="Manager">Manager</option>
                <option value="Director">Director</option>
                <option value="Vice President">Vice President</option>
                <option value="President">President</option>
                <option value="CEO">CEO</option>
              </select>
            </div>
          </section>

          <section class="sixth_section">
            <div class="Company_Size">
              <div for="company_size_option">
                Company Size*
              </div>
              <select name="company_size" class="select-field csize" required>
                <option value="" disabled selected hidden>
                  Please Select
                </option>
                <option value="1-99">1-100</option>
                <option value="100-1,000">100-1,000</option>
                <option value="1,001-10,000">1,000-10,000</option>
                <option value="10,000 and above">10,000 and above</option>
              </select>
            </div>
          </section>

          <section class="seventh_section">
            <div class="use_case">
              <div for="usecase">
                {" "}
                Primary Use Case*
              </div>
              <select class="select-field usecase" required>
                <option value="" disabled selected hidden>
                  Please Select
                </option>
                <option value="Self">Self</option>
                <option value="For Business">For Business</option>
                <option value="For Education">For Education</option>
              </select>
            </div>
          </section>
          <section className="eight_section">
            <div className="countries">
              <div for="country_option">
                Select your Country*
              </div>
              <CountryDropdown />
            </div>
          
          </section>
          <p class="checklist">
            Scissor requires the contact information you provide in order to reach out to you regarding our products and services.
             You have the option to unsubscribe from these communications whenever you wish. To learn more about how to unsubscribe, 
             our privacy practices, and our dedication to safeguarding your privacy, please refer to our Privacy Policy.
          </p>
          <button className="Submit">
            Submit
          </button>
        </form>

        
      </main>



      {/* footer */}
      <div className="main_footer">
        <div className="footer_vector_one">
          <img className="vector_A_footer" src={vector_A_footer} alt="" />
          <img className="vector_B_footer" src={vector_B_footer} alt="" />
          <img className="vector_C_footer" src={vector_C_footer} alt="" />
        </div>
        <footer className="footer">
          <section className="logo">
            {/* scissors logo in the footer */}
            <div className="footer_logo_scissors">
              <img
                className="actual_scissor_logo"
                src={actual_scissor_logo}
                alt=""
              />
              <img
                className="actual_scissor_line"
                src={actual_scissor_line}
                alt=""
              />
              <div className="footer_scissors_word">
                <p>SCISSORS</p>
              </div>
            </div>
            <div className="social_media_logo">
              <img src={footer_img} alt="" />
              <img src={footer_img_2} alt="" />
              <img src={footer_img_3} alt="" />
              <img src={footer_img_4} alt="" />
            </div>
          </section>
          <section className="sub_footer">
            <div>
              <h3 className="why_head_footer">Why Scissors?</h3>
              <p>
                Scissor 101
                <br />
                Integrations &amp; API <br />
                Pricing
              </p>
            </div>
            <div>
              <h3 className="resources_head_footer">Resources</h3>
              <p>
                Blog <br />
                Resource Library <br />
                Developers <br />
                App Connectors <br />
                Support <br />
                Trust Center <br />
                Browser Extension <br />
                Mobile App
              </p>
            </div>
          </section>
          <section className="sub_footer_two">
            <div>
              <h3 className="solution_head_footer">Solutions</h3>
              <p>
                Social Media <br />
                Digital Marketing <br />
                Customer Service <br />
                For Developers
              </p>
            </div>
            <div>
              <h3 className="features_head_footer">Features</h3>
              <p>
                Branded Links <br />
                Mobile Links <br />
                Campaign <br />
                Management &amp; <br />
                Analytics <br />
                QR Code generation
              </p>
            </div>
          </section>
          <section className="sub_footer_three">
            <div>
              <h3 className="products_head_footer">Products</h3>
              <p>
                Link Management <br />
                QR Codes <br />
                Link-in-bio
              </p>
            </div>
            <div>
              <h3 className="legal_head_footer">Legal</h3>
              <p>
                Privacy Policy <br />
                Cookie Policy <br />
                Terms of Service <br />
                Acceptable Use Policy <br />
                Code of Conduct
              </p>
            </div>
          </section>
          <section className="sub_footer_four">
            <h3 className="company_head_footer">Company</h3>
            <p>
              About Scissor <br />
              Careers <br />
              Partners <br />
              Press <br />
              Contact <br />
              Reviews
            </p>
          </section>
        </footer>
        {/* the footer section ends here */}
        {/* the terms line footer */}
        <section className="Footer_terms">
          <div>
            <p>Term of Service</p>
          </div>
          <div>
            <img className="line_footer" src={line_footer} alt="" />
          </div>
          <div>
            <p>Security</p>
          </div>
          <div>
            <img className="line_footer" src={line_footer} alt="" />
          </div>
          <div className="c_scissors">
            <img className="c_img" src={c_img} alt="" />
            <p>Scissor 2023</p>
          </div>
        </section>
        <div className="footer_vector_two">
          <img className="vector_D_footer" src={vector_D_footer} alt="" />
          <img className="vector_E_footer" src={vector_E_footer} alt="" />
          <img className="vector_F_footer" src={vector_F_footer} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
