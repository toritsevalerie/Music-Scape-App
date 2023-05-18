

const ArtistList = () => {

  const artistsArray = [
    { artist: "Rema", id: 1 },
    { artist: "Taylor Swift", id: 2 },
    { artist: "Adele", id: 3 },
    { artist: "Beyonce", id: 4 },
  ];

  return artistsArray.map((singleArtistObject) => {
    console.log("rendering each artist:", singleArtistObject.artist);
    return (
      <li
        key={singleArtistObject.id}
      >
        <div>
          <p>{singleArtistObject.artist}</p>
        </div>
      </li>
    );
  });
};

export default ArtistList;
