/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Social.scss";
import telegram from "../../images/telegram.svg";
import vk from "../../images/vk.svg";
import insta from "../../images/insta.svg";
import github from "../../images/github.svg";
import codewars from "../../images/codewars.svg";

function Social() {
  return (
    <div orientation="left" className="social d-none d-sm-block">
      <ul className="social__wrapper">
        <li className="social__item">
          <a
            href="https://t.me/fe1chh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="telegram"
          >
            <img
              className="social__icon telegram"
              src={telegram}
              alt="telegram-logo"
            ></img>
          </a>
        </li>
        <li className="social__item">
          <a
            href="https://vk.com/id21100917"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="vkontakte"
          >
            <img
              className="social__icon vkontakte"
              src={vk}
              alt="vk-logo"
            ></img>
          </a>
        </li>
        <li className="social__item">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <img
              className="social__icon instagram"
              src={insta}
              alt="instagram-logo"
            ></img>
          </a>
        </li>
        <li className="social__item">
          <a
            href="https://github.com/fe1ch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <img
              className="social__icon github"
              src={github}
              alt="github-logo"
            ></img>
          </a>
        </li>
        <li className="social__item">
          <a
            href="https://www.codewars.com/users/Fe1ch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="codewars"
          >
            <img
              className="social__icon codewars"
              src={codewars}
              alt="codewars-logo"
            ></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
