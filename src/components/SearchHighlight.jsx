import { useEffect, useState } from "react";
import '@/src/styles/SearchHighlight.scss'

const SearchHighlight = ({
  size= "md", // sm,md,lg
}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hasValue, setHasValue] = useState("");
  const [resProducts, setResProducts] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setHasValue("");
    if (value.length > 0) {
      const filteredSuggestions = resProducts.filter((res) =>
        res?.title?.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const getAPIProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setResProducts(json));
    // .then(json=>console.log(json))
  };

  useEffect(() => {
    getAPIProducts();
  }, []);

  useEffect(() => {
    console.log("hasValue : " + hasValue);
  }, [hasValue]);

  return (
    <div className={`search-container ${size||''}`}>
      {/* <p>
        API power by{" "}
        <a href="https://fakestoreapi.com/products" target="_bank">
          https://fakestoreapi.com/products
        </a>
      </p> */}
      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Search "
      />
      {suggestions.length > 0 && !hasValue && (
        <ul className="suggestions">
          {suggestions.map((v, index) => (
            <li
              key={index}
              className=""
              onClick={() => {
                setHasValue(v.title), setQuery(v.title);
              }}
            >
              {highlightText(v.title, query)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchHighlight;
