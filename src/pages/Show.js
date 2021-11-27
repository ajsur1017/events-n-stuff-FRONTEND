import {useState} from "react"

function Show(props) {
  const id = props.match.params.id
  const event = props.event
  const events = event.find((singleEvent) => {
    return singleEvent._id === id
  })

  const [editForm, setEditForm] = useState(events)

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateEvent(editForm, events._id)
    props.history.push("/")
  }
  const removeEvent = () => {
    props.deleteEvent(events._id)
    props.history.push("/")
  }

  const eventEdit = () => {
      return <>
  <div className="eventForm">
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={editForm.name}
      name="name"
      placeholder="event name"
      onChange={handleChange}
    />
    <input
      type="date"
      value={editForm.date}
      name="date"
      placeholder="event date"
      onChange={handleChange}
    />
    <input
      type="text"
      value={editForm.location}
      name="location"
      placeholder="location"
      onChange={handleChange}
    />
    <input
      type="text"
      value={editForm.cost}
      name="cost"
      placeholder="price"
      onChange={handleChange}
    />
            <input
      type="text"
      value={editForm.description}
      name="description"
      placeholder="description"
      onChange={handleChange}
    />
            <input
      type="text"
      value={editForm.image}
      name="image"
      placeholder="image"
      onChange={handleChange}
    />
    <input type="submit" className="button" value="Update Event" />
    <button className="button" id="delete" onClick={removeEvent}>
    Delete Event
  </button>
  </form></div></>
  }
  
  return (
    <div>
      <h1>{events.name}</h1>
      <h2>{new Date(events.date).toDateString()}</h2>
      <h3>{events.organizer}</h3>
      <p>{events.description}</p>
      <p>Cost: {events.cost}</p>
      <img className="imageShow" src={events.image} alt={events.name}/><br/>
      <div className="indexHeader">
      {props.user === events.organizer ? eventEdit() : null}
  </div>
    </div> 
  )
}

export default Show