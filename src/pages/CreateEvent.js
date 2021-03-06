import { useState } from "react";
import { Link } from "react-router-dom"
import React from "react"

function CreateEvent(props) {
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
    attendees: []
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
    props.history.push("/")
  };

  const createOption = () => {
    return <div className={"createBlock"}>
<h1 className={"createHeading"}>Create Event</h1>
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
          placeholder="image url (add .png)"
          onChange={handleChange}
        />
        <input type="submit" className="createButton" value="Create Event" />
      </form></div>
      </div>
  }

  return (
    <section>
      <div className="indexHeader">
        {props.user ? createOption() : <><h1>Looks like you aren't logged in.</h1><p>Already have an account? Login <Link to="/login">here</Link></p><p>Don't have an account? Sign up <Link to="/signup">here</Link></p></>}
      </div>
    </section>
  );

}

 export default CreateEvent
