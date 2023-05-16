const GenreList = () => {
  console.log("i have been rendered");
  // added a console.log here to see when this component is rendered when i interact with the app
  const genresArray = [
    { genre: "Rock", id: 1 },
    { genre: "Pop", id: 2 },
    { genre: "Classical", id: 3 },
    { genre: "Punk-Rock", id: 3 },
  ];

  return genresArray.map((singleGenreObject) => {
    console.log("rendering each genre:", singleGenreObject.genre);
    // added a console.log here to see each object genre showing up to know my loop works in my console
    return (
      <li key={singleGenreObject.id}>
        <div>
          <p>{singleGenreObject.genre}</p>
        </div>
      </li>
    );
  });
};

export default GenreList;
