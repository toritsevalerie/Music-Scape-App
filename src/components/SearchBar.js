import { useState} from "react";


const SearchBar = ({ onSubmit,setKeyword, onClick }) => {
  
  const [userInput, setUserInput] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userInput); // prevent default and call the fetchevents function with userinput as an argument
    

    setTimeout(() => {
      setUserInput("");
    }, 10000); // to make the input text dissapear 
  };
  const handleChange = (e) => {
    setUserInput(e.target.value);
    setKeyword(e.target.value);
    
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchGenreArtist">search</label>
      <input
        type="text"
        id="searchGenreArtist"
        name="search"
        value={userInput}
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
