import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, Nav, Image } from 'react-bootstrap';

function Index(props) {
  const [search, setSearch] = useState("")

  const generateCarousel = () => {
    return props.event.filter(foundEvent => {
      if (search === "") {
        return foundEvent;
      } else if (foundEvent.name.toLowerCase().includes(search.toLowerCase()) || foundEvent.location.toLowerCase().includes(search.toLowerCase())) {
        return foundEvent
      }
    }).map((event) => (
      <Carousel.Item key={event._id}>
        <Link to={`/events/${event._id}`}>
            <div className="editImage">
          <Image
            className="d-block w-100"
            src={event.image}
            alt=""
            style={{height : "30em"}}
            fluid
          /></div></Link>
        <Carousel.Caption>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  };

  const loaded = () => {
    return (
      <Carousel style={{margin : "1em", marginBottom: "2.5em"}}>
        {props.event ? generateCarousel() : null}
      </Carousel>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  };

  return (
    <section>
      <div className="browseEvents">
        <h4>All Events</h4>
        <input className="searchBar" placeholder="Browse..." onChange={event => setSearch(event.target.value)} />
      </div>
      <div className="content">
        {props.event ? loaded() : loading()}
      </div>
    </section>
  );
}

export default Index;