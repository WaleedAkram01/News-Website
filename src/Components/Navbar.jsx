import React from "react";

// We will use this prop in each category to set Our category.
function Navbar({ setCategory }) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        // To do background dark we have added this
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* Here editing logo.*/}
            <span className="badge bg-white text-dark fs-4">NewsMag</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              {/* Here  we will remove some part && insted of a write div and copy 5 more times */}
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("technology")}
                  style={{ cursor: "pointer" }}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("Business")}
                  style={{ cursor: "pointer" }}
                >
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("Health")}
                  style={{ cursor: "pointer" }}
                >
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("Sports")}
                  style={{ cursor: "pointer" }}
                >
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("Entertainment")}
                  style={{ cursor: "pointer" }}
                >
                  Entertainment
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
