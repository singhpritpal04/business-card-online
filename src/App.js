import React from 'react';
import './style.css';
import image from './images/my_photo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faGithubSquare,
  faInstagramSquare,
  faFacebookSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <img src={image} />
      <div className="main">
        <h1>Pritpal Singh</h1>
        <h3>Web Developer</h3>
        <a className="website" href="https://singhpritpal2000.github.io">
          singhpritpal2000.github.io
        </a>
        <div className="buttons">
          <div className="email">
            <a href="#">
              <FontAwesomeIcon
                className="email_icon"
                icon={faEnvelope}
                size="xs"
              />
              <span className="email_txt">Email</span>
            </a>
          </div>
          <div className="linkedin">
            <a href="https://linkedin.com/in/singhpritpal2000/">
              <FontAwesomeIcon
                className="linkedin_icon"
                icon={faLinkedin}
                size="xs"
              />
              <span className="linkedin_txt">LinkedIn</span>
            </a>
          </div>
        </div>
        <h4>About</h4>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h4>Interest</h4>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
      <footer>
        <a href="https://twitter.com/singhpritpal04">
          <FontAwesomeIcon
            className="footer_links"
            icon={faTwitterSquare}
            size="xl"
          />
        </a>
        <a href="https://fb.com/singhpritpal2000">
          <FontAwesomeIcon
            className="footer_links"
            icon={faFacebookSquare}
            size="xl"
          />
        </a>
        <a href="https://instagram.com/singhpritpal2000">
          <FontAwesomeIcon
            className="footer_links"
            icon={faInstagramSquare}
            size="xl"
          />
        </a>
        <a href="https://github.com/singhpritpal2000">
          <FontAwesomeIcon
            className="footer_links"
            icon={faGithubSquare}
            size="xl"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
