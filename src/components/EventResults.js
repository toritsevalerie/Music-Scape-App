import { useState} from "react";

const SearchBar = ({ onSubmit }) => {
  //7. here we deconstruct and put the prop event listener name in here so we can call it later on
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userInput); //9. here is where the fetchevents runs because we passed it as a prop and it will call whatever the user inputed here to be fetche dby the api

    setTimeout(() => {
      setUserInput("");
    }, 10000); // to make the input text dissapear (timeout lets me set a time to it)
  };
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 8.In this case this is not a prop because it is in jsx and it is on a html like element not an component, so now we are calling an event listener and assigning it a function/event handler to prevent default and also call the fetchevents function we passed at the top. */}
      <label htmlFor="searchGenreArtist">search</label>
      <input
        type="text"
        id="searchGenreArtist"
        name="search"
        value={userInput}
        onChange={handleChange}
      />
      <button>Go</button>
    </form>
  );
};

export default SearchBar;
