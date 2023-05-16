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
    <div className="category-buttons">
      <button
        onClick={() => handleClick("genreButton")}
        className={activeButton}
      >
        Genre
      </button>
      <button
        onClick={() => handleClick("artistButton")}
        className={activeButton}
      >
        Artists
      </button>

      {activeButton === "genreButton" && (
        <ul className="genre-list">
          <GenreList />
        </ul>
      )}
      {activeButton === "artistButton" && (
        <ul className="artist-list">
          <ArtistList />
        </ul>
      )}
    </div>
  );
};
export default CategoryButtons;
