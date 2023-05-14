import { useState } from "react";
import GenreList from "./GenreList.js";
import ArtistList from "./ArtistList.js";

const CategoryButtons = () => {
    // initialzing a state variable here to keep track of the two buttons 
  const [activeButton, setActiveButton] = useState("genreButton");

  const handleClick = (button) => {
    setActiveButton(button);
  };
  return (
    
    <div className="CategoryButtons">
      <button
        onClick={() => handleClick("genreButton")}
        className={activeButton}
      >
        genre
      </button>
      <button
        onClick={() => handleClick("artistButton")}
        className={activeButton}
      >
        artists
      </button>

    
      {activeButton === "genreButton" && <GenreList />}
      {activeButton === "artistButton" && <ArtistList />}
    </div>
  );
};
export default CategoryButtons;
