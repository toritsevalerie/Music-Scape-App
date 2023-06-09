import SearchBar from "./components/SearchBar.js";
import CategoryButtons from "./components/CategoryButtons.js";
import EventResults from "./components/EventResults";
import NoResults from "./components/NoResults";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

function App() {
  const apiKey = "xGNjSwzsjYdnIi8lqNJUVAfyjMzZoQ8g";

  const [displayEvents, setDisplayEvents] = useState([]);
  const [error, setError] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [titleclickedWord, setTitleClickedWord] = useState(""); 

  const fetchEvents = (keyword) => {
    if (keyword !== "") {
      axios
        .get("https://app.ticketmaster.com/discovery/v2/events", {
          params: {
            apikey: apiKey,
            keyword: keyword,
            classificationName: "music",
          },
        })
        .then((response) => {
          console.log(response.data._embedded.events);

          setDisplayEvents(response.data._embedded.events);
          setError(false);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
          setDisplayEvents([]);
        });
    } else {
      setDisplayEvents([]);
    }
  };
  return (
    <header>
      <nav>
        <ul className="navigation-bar">
          <li className="logo">
            <Link to="/">MusicScape</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/foryou">For You</Link>
          </li>
        </ul>

        <ul className="login-nav-bar">
          <li className="account-button">
            <Link to="">Create an Account</Link>
          </li>
          <li className="login-button">
            <Link to="">Login</Link>
          </li>
        </ul>
      </nav>
      <nav></nav>
      <SearchBar onSubmit={fetchEvents} setKeyword={setKeyword} />
      <Routes>
        <Route
          path="/"
          element={
            error ? (
              <NoResults />
            ) : (
              <EventResults
                events={displayEvents}
                keyword={keyword}
                titleclickedWord={titleclickedWord}
              />
            )
          }
        />
        <Route
          path="/foryou"
          element={
            <>
              {error ? (
                <>
                  <CategoryButtons
                    onClick={fetchEvents}
                    setTitleClickedWord={setTitleClickedWord}
                  />
                  <NoResults />
                </>
              ) : (
                <>
                  <CategoryButtons
                    onClick={fetchEvents}
                    setTitleClickedWord={setTitleClickedWord}
                  />
                  <EventResults
                    events={displayEvents}
                    keyword={keyword}
                    titleclickedWord={titleclickedWord}
                  />
                </>
              )}
            </>
          }
        />
      </Routes>
      <p> © Toritse Tuedor / Created @ Juno College</p>
    </header>
  );
}

export default App;

/*
PSEUDO CODE 

Page 1 (Home): Displays catalogue of a bunch of events after search 

Page 2: (About Events) Displays details about events when the user clicks on 
 
 */
