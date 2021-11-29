import React, { useState } from "react"
import { Link } from "react-router-dom";
import Carousel from "../components/IndexCarousel";

function Index(props) {

  console.log("Props.events");
  console.log(props.events)

  //State for Search Text
  const [search, setSearch] = useState("")
  //State for Array of Events to Send to Carousel
  const [events, setEvents] = useState(props.events)

  console.log("Events state:")
  console.log(events);

  const loaded = () => {
    const filteredEvents = props.events.filter(foundEvent => {
      if (search === "") {
        return foundEvent;
      } else if (foundEvent.name.toLowerCase().includes(search.toLowerCase()) || foundEvent.location.toLowerCase().includes(search.toLowerCase())) {
        return foundEvent
      }
    })
    setEvents(filteredEvents);
    return (
      <Carousel events={events}/>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  };

  return (
    <section>
      <div className="browseEvents"><br/>
        <h1>Browse Events</h1>
        <input className="searchBar" placeholder="Search by Title or Location" onChange={event => setSearch(event.target.value)} />
      </div>
      <div className="content">
        {props.events ? loaded() : loading()}
      </div>
    </section>
  );
}

export default Index;