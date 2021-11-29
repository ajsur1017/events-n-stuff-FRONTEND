import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

function IndexCarousel(props) {

  console.log("Props.event loaded into Carousel:");
  console.log(props.events);

  const generateCarousel = () => {
    return props.events.map((event, index) => (
      <Carousel.Item key={event._id}>
        <Link to={`/events/${event._id}`}>
          <img
            className="d-block w-100"
            src={event.image}
            alt=""
          /></Link>
        <Carousel.Caption>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))
  };

  const loading = () => {
    return (
      <h3>Loading Events...</h3>
    )
  }

  const loaded = () => {
    return (
      <Carousel>
        {generateCarousel()}
      </Carousel>
    )
  }

  return (
    <>
      {props.events ? loaded() : loading()};
    </>
  )
}

export default IndexCarousel;