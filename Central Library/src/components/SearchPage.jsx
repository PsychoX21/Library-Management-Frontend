import React, { useState, useEffect } from 'react'
import { Navbar } from './Navbar'
import { FaSearch, FaFilter } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import './SearchPage.css'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const FilterDropdown = styled.div`
  position: absolute;
  top: 18%;
  right: 5%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  display: ${({ show }) => (show ? "block" : "none")};
`;

export const SearchPage = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("date_added");
  const [searchType, setSearchType] = useState("name");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [results, setResults] = useState([]);

  const dummyBooks = [
    {
      image: "src/assets/bookimg.png",
      name: "P.W. Atkins and Renderson's Papers on Physical Chemistry",
      author: "P.W. Atkins, Renderson",
      publishedYear: "2023",
    },
    {
      image: "src/assets/bookimg.png",
      name: "Brief summary to Inorganic Chemistry",
      author: "J.D. LEE",
      publishedYear: "2024",
    },
    {
      image: "src/assets/bookimg.png",
      name: "M.S. Chouhan's guide to perfect Chemistry Planner",
      author: "M.S. Chouhan",
      publishedYear: "2022",
    },
    {
      image: "src/assets/bookimg.png",
      name: "P.W. Atkins and Renderson's Papers on Physical Chemistry",
      author: "P.W. Atkins, Renderson",
      publishedYear: "2023",
    },
    {
      image: "src/assets/bookimg.png",
      name: "Brief summary to Inorganic Chemistry",
      author: "J.D. LEE",
      publishedYear: "2024",
    },
    {
      image: "src/assets/bookimg.png",
      name: "M.S. Chouhan's guide to perfect Chemistry Planner",
      author: "M.S. Chouhan",
      publishedYear: "2022",
    },
    {
      image: "src/assets/bookimg.png",
      name: "P.W. Atkins and Renderson's Papers on Physical Chemistry",
      author: "P.W. Atkins, Renderson",
      publishedYear: "2023",
    },
    {
      image: "src/assets/bookimg.png",
      name: "Brief summary to Inorganic Chemistry",
      author: "J.D. LEE",
      publishedYear: "2024",
    },
    {
      image: "src/assets/bookimg.png",
      name: "M.S. Chouhan's guide to perfect Chemistry Planner",
      author: "M.S. Chouhan",
      publishedYear: "2022",
    },
    {
      image: "src/assets/bookimg.png",
      name: "P.W. Atkins and Renderson's Papers on Physical Chemistry",
      author: "P.W. Atkins, Renderson",
      publishedYear: "2023",
    },
    {
      image: "src/assets/bookimg.png",
      name: "Brief summary to Inorganic Chemistry",
      author: "J.D. LEE",
      publishedYear: "2024",
    },
    {
      image: "src/assets/bookimg.png",
      name: "M.S. Chouhan's guide to perfect Chemistry Planner",
      author: "M.S. Chouhan",
      publishedYear: "2022",
    },
  ];

  useEffect(() => {
    if (query) {
      let filteredResults = dummyBooks.filter((book) => book[searchType].toLowerCase().includes(query.toLowerCase()));
      if (sortBy === "date_published") {
        filteredResults.sort((a, b) => b.publishedYear - a.publishedYear);
      } else if (sortBy === "name") {
        filteredResults.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === "author") {
        filteredResults.sort((a, b) => a.author.localeCompare(b.author));
      }
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query, searchType, sortBy]);

  const onSearch = () => {
    if (!query) return;
    setRecentSearches((prev) => [query, ...prev.slice(0, 4)]);
    setResults(dummyBooks.filter((book) => book[searchType].toLowerCase().includes(query.toLowerCase())));
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value) {
      setResults(dummyBooks.filter((book) => book[searchType].toLowerCase().includes(e.target.value.toLowerCase())));
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (bookName) => {
    setRecentSearches((prev) => [bookName, ...prev.slice(0, 4)]);
    navigate(`/book/${encodeURIComponent(bookName)}`);
  };

  return (
    <div className='searchpage'>
      <Navbar page="search" />
      
      <div className='search-area'>
        <div className="search-container">
          <div className="search-icon-container">
            <FaSearch />
            <div className='seperator'></div>
          </div>

          <input className='search-input'
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search books..."
          />

          <button className='filter-button' onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <FaFilter />
          </button>

          <FilterDropdown show={isFilterOpen}>
            <label className='filter-label'>Sort By</label>
            <select className='filter-select' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="date_added">Date Added</option>
              <option value="date_published">Date Published</option>
              <option value="name">Name</option>
              <option value="author">Author</option>
            </select>

            <label className='filter-label'>Search By</label>
            <select className='filter-select' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
              <option value="name">Book Name</option>
              <option value="author">Author Name</option>
            </select>
          </FilterDropdown>

          <button className='search-button' onClick={onSearch}>Search</button>
        </div>

        <div className="results-container">
          {query === "" && recentSearches.length > 0 && (
            <div className="recent-searches">
              <h3 className='recent-heading'>Your Recent Searches</h3>
              {recentSearches.map((search, index) => (
                <div className="recent-item" key={index}>{search}</div>
              ))}
            </div>
          )}

          {query !== "" && results.length === 0 ? (
            <p>No results found</p>
          ) : (
            results.map((book, index) => (
              <div className="result-item" key={index} onClick={() => handleResultClick(book.name)}>
                <img src={book.image} alt="Book Cover" className="book-image" />
                <div className="book-details">
                  <div className="book-title">
                    {book.name} - <span className="author">{book.author}</span>
                  </div>
                  <div className="book-footer">
                    <span className="published-year">Published Year: {book.publishedYear}</span>
                    <HiOutlineArrowRight className="arrow-icon" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
