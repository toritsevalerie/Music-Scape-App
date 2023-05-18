import { useState } from "react";

const GenreList = ({onGenreClick}) => {
  
  const [clickedWord, setClickedWord] = useState("");

  const genresArray = [
    { genre: "Rock", id: 1 },
    { genre: "Pop", id: 2 },
    { genre: "Classical", id: 3 },
    { genre: "Punk-Rock", id: 4 },
  ];

  const handleGenreClick = (genre) => { 
    setClickedWord(genre)
    onGenreClick(genre)
  }

  return genresArray.map((singleGenreObject) => {
    console.log("rendering each genre:", singleGenreObject.genre);
    // added a console.log here to see each object genre showing up to know my loop works in my console
    return (
      <li
        key={singleGenreObject.id}
        onClick={() => handleGenreClick(singleGenreObject.genre)}
      >
        <div>
          <p>{singleGenreObject.genre}</p>
        </div>
      </li>
    );
  });
};

export default GenreList;
