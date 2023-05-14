const ArtistList = () => {
  const artistsArray = [
    { artist: "Rema", id: 1 },
    { artist: "MJ", id: 2 },
    { artist: "Adele", id: 3 },
  ];

  return artistsArray.map((singleArtistObject) => {
    console.log("rendering each artist:", singleArtistObject.artist);
    return (
      <li key={singleArtistObject.id}>
        <div>
          <p>{singleArtistObject.artist}</p>
        </div>
      </li>
    );
  });
};

export default ArtistList;
