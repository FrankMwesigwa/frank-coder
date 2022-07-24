import React from "react";
import "./top.css";

const TopHeader = () => {
  return (
    <div className="header-top mobile-hide">
      <div className="container">
        <div className="wrapper flexitem">
          <div className="left">
            <ul className="flexitem main-links">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Featured Products</a>
              </li>
              <li>
                <a href="#">WishList</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul className="flexitem main-links">
              <li>
                <a href="#">Sign Up</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Order Trackling</a>
              </li>
              <li>
                <a href="#">
                  USD{" "}
                  <span className="icon-small">
                    <i className="ri-arrow-down-s-line"></i>
                  </span>
                </a>
                <ul>
                  <li className="current">
                    <a href="#"></a>USD
                  </li>
                  <li>
                    <a href="#"></a>EUR
                  </li>
                  <li>
                    <a href="#"></a>GBP
                  </li>
                  <li>
                    <a href="#"></a>IDR
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  English{" "}
                  <span className="icon-small">
                    <i className="ri-arrow-down-s-line"></i>
                  </span>
                </a>
                <ul>
                  <li className="current">
                    <a href="#"></a>English
                  </li>
                  <li>
                    <a href="#"></a>German
                  </li>
                  <li>
                    <a href="#"></a>Spanish
                  </li>
                  <li>
                    <a href="#"></a>Bahasa
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
