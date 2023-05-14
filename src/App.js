import SearchBar from "./components/SearchBar.js";
import CategoryButtons from "./components/CategoryButtons.js";
import EventResults from "./components/EventResults";
import NoResults from "./components/NoResults";
import axios from "axios";
import { useState} from "react";
import './App.css';

function App() {
  const apiKey = "xGNjSwzsjYdnIi8lqNJUVAfyjMzZoQ8g";

  const [displayEvents, setDisplayEvents] = useState([]);
  const [error, setError] = useState(false);

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
    <>
      <SearchBar onSubmit={fetchEvents} />
      <CategoryButtons />
      {error ? <NoResults /> : <EventResults events={displayEvents} />}
    </>
  );
}

export default App;
