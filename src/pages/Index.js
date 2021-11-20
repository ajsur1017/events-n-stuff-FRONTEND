import { useState } from "react";
import {Link} from "react-router-dom"

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
    user: ""
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
        user: "",
    });
  };

  const loaded = () => {
    return props.event.map((events) => (
      <div key={events._id} className="events">
        <Link to={`/events/${events._id}`}><h1>{events.name}</h1></Link>
        <h2>{new Date(events.date).toDateString()}</h2>
      <h3>{events.startTime} - {events.endTime}</h3>
      <p>{events.location}</p>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
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
          value={newForm.startTime}
          name="startTime"
          placeholder="start time"
          onChange={handleChange}
        />
                <input
          type="text"
          value={newForm.endTime}
          name="endTime"
          placeholder="end time"
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
        <input type="submit" value="Create Event" />
      </form></div>
      {props.event ? loaded() : loading()}
    </section>
  );
}

export default Index;