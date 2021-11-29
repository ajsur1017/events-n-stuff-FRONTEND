import { useState } from "react";
import { Link } from "react-router-dom"
import React from "react"

function Index(props) {
const [search, setSearch] = useState("")

  const loaded = () => {
    return props.event.filter(foundEvent => {
      if (search === "") {
        return foundEvent;
      }
      else if (foundEvent.name.toLowerCase().includes(search.toLowerCase()) || foundEvent.location.toLowerCase().includes(search.toLowerCase())) {
        return foundEvent
      }
    }).map((events) => (
      <div key={events._id} className="events">
        <Link to={`/events/${events._id}`}><h1>{events.name}</h1></Link>
        <p className="indexInfoDesc">{events.description}</p>
        <img className="indexInfoImage" src={events.image} alt={events.name} />
        <div className="indexInfoDiv">
          <p className="labels">Organizer</p> <p className="indexInfo">{events.organizer}</p>
          <p className="labels">Location</p> <p className="indexInfo">{events.location}</p>
          <p className="labels">Price</p> <p className="indexInfo">{events.cost}</p>
          <p className="labels">Date</p><p className="indexInfo">{new Date(events.date).toDateString()}</p>
          <p className="labels">Attendees</p><p className="indexInfo">{events.attendees.length}</p>
        </div>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <div className="browseEvents">
        <h1>All Events</h1>
        <input className="searchBar" placeholder="Browse..." onChange={event => setSearch(event.target.value)} />
      </div>
      <div className="content">
        {props.event ? loaded() : loading()}</div>
    </section>
  );
}

export default Index;