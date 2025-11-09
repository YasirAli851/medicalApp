import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [regNo, setRegNo] = useState("");

  // Fetch data.json from public folder
  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data.json");
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // prevent reload
    if (!regNo.trim()) {
      setFiltered([]); // empty input → clear results
      return;
    }

    // Filter matching registration number (case-insensitive)
    const result = data.filter(
      (item) =>
        item.registrationNumber.toLowerCase() === regNo.trim().toLowerCase()
    );

    setFiltered(result);
  };

  return (
    <div className="nmc-page">
      <div className="nmc-header">
        <div className="header-left">
          <img src="/public/logo.jpg" alt="Logo" className="nmc-logo" />
          <h2>Indian Medical Commission</h2>
        </div>
        <div class="header-right">
          <a href="#">
            <i class="fa fa-home"></i> Home
          </a>
          <a href="#">
            <i class="fa fa-clock"></i> Meetings
          </a>
          <a href="#">
            <i class="fa fa-comment"></i> Feedback/Suggestion
          </a>
        </div>
      </div>

      <div>
        <nav className="nav-bar">
          <ul>
            <li>About NMC</li>
            <li>NMC Act</li>
            <li>Rules & Regulations</li>
            <li>Information Desk</li>
            <li>Media Room</li>
            <li>E-Gazette</li>
            <li>Photo Gallery</li>
            <li>RTI</li>
            <li>Employees Corner</li>
          </ul>
        </nav>
      </div>

      <div className="search-section">
        <h3>Browse By Registration Number</h3>
        <form className="search-box" onSubmit={handleSearch}>
          <label>
            Registration No:<span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Doctor Registration No"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {filtered.length > 0 ? (
        <Table records={filtered} />
      ) : (
        regNo && <p className="no-data">No records found.</p>
      )}
      <footer className="nmc-footer">
        <div className="footer-top">
          <ul>
            <li>About NMC</li>
            <li>Media Room</li>
            <li>Disclaimer</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>© 2020 - National Medical Commission. All Rights Reserved.</p>
          <button className="follow-btn">Follow @NMC_bharat</button>
        </div>
      </footer>
    </div>
  );
}
