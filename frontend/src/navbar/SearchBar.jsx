import "./Navbar.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function SearchBar() {
  return (
    <div className="main1">
      <div className="row mb-3 flex-b">
        <div className="col-3">
          <img src="https://images.apollo247.in/images/ui_revamp_searchBanner1.svg" />
        </div>
        <div className="col-6 flex-s">
          <h2>Buy Medicines and Essentials</h2>
          <div className="search-container">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <div className="col-3">
          <img src="https://images.apollo247.in/images/ui_revamp_searchBanner2.svg" />
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
