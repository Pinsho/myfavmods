import { useState } from "react";
import styles from "../css/Search.module.css";
import { useNavigate } from 'react-router-dom';

export function Search() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("./?search=" + searchText);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button className={styles.searchButton} type="submit">
          <i className="bx bx-search"></i>
        </button>
      </div>
    </form>
  );
}
