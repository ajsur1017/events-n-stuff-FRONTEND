import { useState } from "react"

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
  <h4>Update Event</h4>
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
      required="yes"
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

  const submitAttendance = () => {
    editForm.attendees.push(props.user)
    props.updateEvent(editForm, events._id)
    props.history.push("/myevents")
  }

  const revokeAttendance = () => {
    editForm.attendees = editForm.attendees.filter(attender => attender != props.user)
    props.updateEvent(editForm, events._id)
    props.history.push("/myevents")
  }

  const attendEvent = () => {
    return <>
    <h3 className="attendanceText">You are not currently attending {events.name}. Would you like to attend?</h3>
    <div className="eventForm">
    <form onSubmit={submitAttendance}>
    <input
      className="hidden"
      type="text"
      value={editForm.attendees}
      name="attendees"
      placeholder="attendees"
      onChange={handleChange}
    />
  <input type="submit" className="button" value="Attend Event" />
</form></div></>
}

const cancelAttend = () => {
    return <>
    <h3 className="attendanceText">Looks like you're already attending {events.name}. Would you like to cancel?</h3>
    <div className="eventForm">
    <form onSubmit={revokeAttendance}>
    <input
      className="hidden"
      type="text"
      value={editForm.attendees}
      name="attendees"
      placeholder="attendees"
      onChange={handleChange}
    />
  <input type="submit" className="button" value="Revoke Attendance" />
</form></div></>
}

const checkLogin = () => {
    return <> {events.attendees.includes(props.user) ? cancelAttend(): attendEvent()}</>
}

  return (
    <div>
      <h1>{events.name}</h1>
      <h3>Date: {new Date(events.date).toDateString()}</h3>
      <h3>Organizer: {events.organizer}</h3>
      {events.attendees.length > 0 ? <h3>Current Attendees: {events.attendees.join(', ')}</h3> : <h3>Current Attendees: 0</h3>}
      <h3>Cost: {events.cost}</h3>
      <p>{events.description}</p>
      <img className="imageShow" src={events.image} alt={events.name} /><br />
      <div className="indexHeader">
      {props.user ? checkLogin() : null}
      {props.user == events.organizer ? eventEdit() : null}
  </div>
    </div> 
  )
}

export default Show