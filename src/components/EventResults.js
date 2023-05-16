import { Link } from "react-router-dom";

const EventResults = ({ events }) => {
  return (
    <section>
      {events.length === 0 ? (
        <h3> Discover the Hottest Music Events Near You!</h3>
      ) : events.length > 0 ? (
        <section>
          <h1>Here are the events</h1>
          <ul className="event-results">
            {events.map((singleEvent) => {
              return (
                <li key={singleEvent.id}>
                  <Link to={`/event/${singleEvent.id}`}>
                    <img
                      src={singleEvent.images[0].url}
                      alt={singleEvent.description}
                    />
                    <p className="artist-name">{singleEvent.name}</p>
                    <p className="city-name">{singleEvent._embedded.venues[0].city.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </section>
  );
};

export default EventResults;
