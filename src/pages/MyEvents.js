
import { useState } from "react";
import { Link } from "react-router-dom"
import React from "react"

function MyEvents(props) {
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

  const loadedAtt = () => {
    return props.event.filter(foundEvent => {
      if (foundEvent.attendees.includes(props.user)) {
        return foundEvent;
      }
      else {
        return
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

  const loadedOrg = () => {
    return props.event.filter(foundEvent => {
      if (foundEvent.organizer == props.user) {
        return foundEvent;
      }
      else {
        return
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

  const logEvents = () => {
      return <div className="contextBox">
      <h1>Your Upcoming Events</h1>
      <div className="content">
        {props.event ? loadedAtt() : loading()}</div>
        <h1>Your Hosted Events</h1>
        <div className="content">
        {props.event ? loadedOrg() : loading()}</div></div>
  }
  
  return (
    <section>
      <div className="indexHeader">
        {props.user ? createOption() : null}
      </div>
      {props.user ? logEvents() : <><h1>Looks like you aren't logged in.</h1><p>Already have an account? Login <Link to="/login">here</Link></p><p>Don't have an account? Sign up <Link to="/signup">here</Link></p></>}
    </section>
  );
}

export default MyEvents;