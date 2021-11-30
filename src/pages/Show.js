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
  <h4 className="showTagForm">Update/Delete Event</h4>
  <div className="eventForm">
  <form className="editForm" onSubmit={handleSubmit}>
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
    props.history.push("/")
  }

  const revokeAttendance = () => {
    editForm.attendees = editForm.attendees.filter(attender => attender != props.user)
    props.updateEvent(editForm, events._id)
    props.history.push("/")
  }

  const attendEvent = () => {
    return (
    <div className={"showAttendance"}>
      <form className="eventForm" onSubmit={submitAttendance}>
        <input
          className="hidden"
          type="text"
          value={editForm.attendees}
          name="attendees"
          placeholder="attendees"
          onChange={handleChange}
        />
        <input type="submit" className={"purpleButton"} value="Attend Event" />
      </form>
    </div>
  )
}

const cancelAttend = () => {
  return (
    <div className={"showAttendance"}>
        <form className="eventForm" onSubmit={revokeAttendance}>
          <input
            className="hidden"
            type="text"
            value={editForm.attendees}
            name="attendees"
            placeholder="attendees"
            onChange={handleChange}
          />
          <input type="submit" className={"purpleButton"} value="Revoke Attendance" />
        </form>
    </div>
  )
}

const checkLogin = () => {
    return <> {events.attendees.includes(props.user) ? cancelAttend(): attendEvent()}</>
}

  return (
    <div className="showBlock">
      <div className={"showHeader"}>
        <h1 className={"showEventTitle"}>{events.name}</h1>
        <p>Organized by <span className={"showOrganizer"}>{events.organizer}</span></p>
      </div>
      <img className="showImage" src={events.image} alt={events.name} /><br />
      <div className={"showDetails"}>
        <div className={"showSpecifics"}>
          <p><span className={"purpleText"}>What</span> - {events.description}</p>
          <p><span className={"purpleText"}>Where</span> - {events.location}</p>
          <p><span className={"purpleText"}>When</span> - {new Date(events.date).toDateString()}</p>
          <p><span className={"purpleText"}>How Much</span> - {events.cost}</p>
        </div>
      </div>
      {events.attendees.length > 0 ? <p>Current Attendees: <span className={"purpleText"}>{events.attendees.join(', ')}</span></p> : <p>Current Attendees: 0</p>}
      <div className="indexHeader">
        {props.user ? checkLogin() : null}
        {props.user == events.organizer ? eventEdit() : null}
      </div>
  </div>
  )
}

export default Show