import React, { useState } from "react"
import { Link } from "react-router-dom";
import Carousel from "../components/IndexCarousel";

function Index(props) {

  //State for Search Text
  const [search, setSearch] = useState("")
  //State for Array of Events to Send to Carousel
  const [events, setEvents] = useState("")
  //Set Events State from props
  props.events ? setEvents(props.event) : null;

  const onSearch= () => {
    const filteredEvents = props.events.filter(foundEvent => {
      if (search === "") {
        return foundEvent;
      } else if (foundEvent.name.toLowerCase().includes(search.toLowerCase()) || foundEvent.location.toLowerCase().includes(search.toLowerCase())) {
        return foundEvent
      }
    })
    setEvents(filteredEvents)
  }

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <div className="browseEvents">
        <h1>Browse Events</h1>
        <input className="searchBar" placeholder="Search by Title or Location" onChange={event => setSearch(event.target.value)} />
      </div>
      <div className="content">
        {props.events ? <Carousel events={events}/> : loading()}
      </div>
    </section>
  );
}

export default Index;