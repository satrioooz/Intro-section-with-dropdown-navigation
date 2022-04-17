import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../images/logo.svg";
import Todo from "../images/icon-todo.svg";
import Calendar from "../images/icon-calendar.svg";
import Reminders from "../images/icon-reminders.svg";
import Planning from "../images/icon-planning.svg";
import Menu from "../images/icon-menu.svg";
import Close from "../images/icon-close-menu.svg";
import "./navbar.css";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navb = () => {
  const [bar, setBar] = useState(false);
  return (
    <>
      <div className="section-navbar">
        <img src={Logo} />

        <div className={bar ? "mobile" : "desktop"}>
          {/* ==== DROPDOWN FEATURES */}
          <div className="dropdown">
            <Link to="#">Features</Link>
            <div className="dropdown-content">
              <div>
                <img src={Todo} />
                <Link className="list-dropdown" to="#">
                  Todo List
                </Link>
              </div>
              <div>
                <img src={Calendar} />
                <Link to="#">Calender</Link>
              </div>

              <div>
                <img src={Reminders} />
                <Link to="#">Reminders</Link>
              </div>

              <div>
                <img src={Planning} />
                <Link to="#">Planning</Link>
              </div>
            </div>
          </div>
          {/* ====END==== */}

          {/* ==== DROPDOWN COMPANY ===== */}
          <div className="dropdown-company">
            <Link to="#">Company</Link>

            <div className="dropdown-content-company">
              <div>
                <Link to="#">History</Link>
              </div>

              <div>
                <Link to="#">Our Team</Link>
              </div>

              <div>
                <Link to="#">Blog</Link>
              </div>
            </div>
            {/* ====END==== */}
          </div>

          <Link className="careers" to="#">Careers</Link>
          <Link className="about" to="#">About</Link>


          <button className="auth-login">Login</button>
          <button className="auth-register">Register</button>
          {/* <div className="auth">
          </div> */}
        </div>

        <div
          className="bar"
          onClick={() => {
            setBar(!bar);
          }}
        >
          {bar ? <img src={Close} /> : <img src={Menu} />}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navb;
