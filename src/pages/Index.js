import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

function Index(props) {
  const [newForm, setNewForm] = useState({
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    description: "",
    cost: "",
    image: "",
    organizer: props.user,
    attendees: [props.user]
  });

  const [search, setSearch] = useState("")

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createEvent(newForm);
    setNewForm({
      name: "",
      date: "",
      startTime: "",
      endTime: "",
      location: "",
      description: "",
      cost: "",
      image: "",
      organizer: "",
      attendees: []
    });
  };

  const createOption = () => {
   return <>
<h1>Create Event</h1>
    <div className="formCreate">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="event name"
          onChange={handleChange}
        />
        <input
          type="date"
          value={newForm.date}
          name="date"
          placeholder="event date"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.location}
          name="location"
          placeholder="location"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.cost}
          name="cost"
          placeholder="price"
          onChange={handleChange}
        />
                <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
                <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <input type="submit" className="button" value="Create Event" />
      </form></div>
      </>
  }

  const generateCarousel = () => {
    return props.event.filter(foundEvent => {
      if (search === "") {
        return foundEvent;
      }
      else if (foundEvent.name.toLowerCase().includes(search.toLowerCase()) || foundEvent.location.toLowerCase().includes(search.toLowerCase())) {
        return foundEvent
      }
    }).map((event) => (
      <Carousel.Item key={event._id}>
        <Link to={`/events/${event._id}`}>
          <img
            className="d-block w-100"
            src={event.image}
            alt=""
            style={{height : "300px"}}
          /></Link>
        <Carousel.Caption>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  };

  const loaded = () => {
    return (
      <Carousel variant="dark" style={{marginLeft : "1em", marginRight : "1em"}}>
        {props.event ? generateCarousel() : null}
      </Carousel>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <div className="indexHeader"><br/>
        {props.user ? createOption() : null}
      </div>
      <div className="browseEvents">
        <h2>Browse Events</h2>
        <input className="searchBar" placeholder="Search by Title or Location" onChange={event => setSearch(event.target.value)} />
      </div>
      <div className="content">
        {props.event ? loaded() : loading()}
      </div>
    </section>
  );
}

export default Index;