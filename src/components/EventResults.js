import NoResults from "./NoResults.js";

const EventResults = ({ events }) => {
  return (
    <section>
      {events && events.length === 0 ? (
        <h3>Search for your favourite events</h3>
      ) : events.length > 0 ? (
        <section>
          <h1>Here are the events</h1>
          <ul>
            {events.map((singleEvent) => {
              return (
                <li key={singleEvent.id}>
                  <img
                    src={singleEvent.images[0].url}
                    alt={singleEvent.description}
                  />
                  <p>{singleEvent.name}</p>
                  <p>{singleEvent._embedded.venues[0].city.name}</p>
                </li>
              );
            })}
          </ul>
        </section>
      ) : (
        <NoResults />
      )}
    </section>
  );
};

export default EventResults;
