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
    <p className="indexInfoDesc">{events.description}</p>
    <img className="indexInfoImage" src={events.image}/>
    <div className="indexInfoDiv">
    <p className="labels">Location</p> <p className="indexInfo">{events.location}</p>
    <p className="labels">Price</p> <p className="indexInfo">{events.cost}</p>
    <p className="labels">Date</p><p className="indexInfo">{events.date}</p>
    <p className="labels">Start Time</p> <p className="indexInfo">{events.startTime}</p>
    <p className="labels">Attendees</p> <p className="indexInfo">ATTENDEE LENGTH HERE placeholder</p>
   </div>
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
        <input type="submit" value="Create Event" />
      </form></div><div className="content">
      {props.event ? loaded() : loading()}</div>
    </section>
  );
}

export default Index;