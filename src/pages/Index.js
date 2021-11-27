import { useState } from "react";
import { Link } from "react-router-dom"
import React from "react"

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
    organizer: "",
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
            type="string"
            value={newForm.organizer}
            name="organizer"
            placeholder="organizer"
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
        {console.log(events)}
        <Link to={`/events/${events._id}`}><h1>{events.name}</h1></Link>
        <p className="indexInfoDesc">{events.description}</p>
        <img className="indexInfoImage" src={events.image} alt={events.name} />
        <div className="indexInfoDiv">
          <p className="labels">Organizer</p> <p className="indexInfo">{events.organizer}</p>
          <p className="labels">Location</p> <p className="indexInfo">{events.location}</p>
          <p className="labels">Price</p> <p className="indexInfo">{events.cost}</p>
          <p className="labels">Date</p><p className="indexInfo">{new Date(events.date).toDateString()}</p>
        </div>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <div className="indexHeader">
        {props.user ? createOption() : null}
      </div>
      <div className="browseEvents">
        <h1>Browse Events</h1>
        <input className="searchBar" placeholder="Search by Title or Location" onChange={event => setSearch(event.target.value)} />
      </div>
      <div className="content">
        {props.event ? loaded() : loading()}</div>
    </section>
  );
}

export default Index;