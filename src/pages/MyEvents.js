
import { useState } from "react";
import { Link } from "react-router-dom"
import React from "react"

function MyEvents(props) {
const [search, setSearch] = useState("")

const [toggle, setToggle] = useState({set: false})

const showAttending = (event) => {
    setToggle({ ...toggle, set: false});
  };

const showHosted = () => {
    setToggle({ ...toggle, set: true});
}

  const loadedAtt = () => {
      console.log(toggle.set)
    return props.event.filter(foundEvent => {
        if (search === "") {
          return foundEvent;
        } else if (foundEvent.name.toLowerCase().includes(search.toLowerCase()) || foundEvent.location.toLowerCase().includes(search.toLowerCase())) {
          return foundEvent
        }
      }).filter(foundEvent => {
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
          <p className="labels">Date</p><p className="indexInfo">{new Date(events.date).toDateString()}</p>
          <p className="labels">Location</p> <p className="indexInfo">{events.location}</p>
          <p className="labels">Price</p> <p className="indexInfo">{events.cost}</p>
          <p className="labels">Attendees</p><p className="indexInfo">{events.attendees.length}</p>
        </div>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const logEvents = () => {
      return <><div className="browseEvents">
      {toggle.set ? <h4>Hosted Events</h4> : <h4>Attending Events</h4>} 
      <input className="searchBar" placeholder="Browse..." onChange={event => setSearch(event.target.value)} />
      </div>
      {toggle.set ? <button onClick={showAttending}>Show Attending</button> : <button onClick={showHosted}>Show Hosted</button>} 
       {toggle.set ? <div className="myContent">{props.event ? loadedOrg() : loading()}</div> : <div className="myContent">{props.event ? loadedAtt() : loading()}</div>}
       </>
  }
  
  return (
    <section>
      {props.user ? logEvents() : <><h1>Looks like you aren't logged in.</h1><p>Already have an account? Login <Link to="/login">here</Link></p><p>Don't have an account? Sign up <Link to="/signup">here</Link></p></>}
    </section>
  );
}

export default MyEvents;