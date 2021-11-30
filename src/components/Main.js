import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import MyEvents from "../pages/MyEvents"
import CreateEvent from "../pages/CreateEvent"

function Main(props) {
  const [event, setEvent] = useState(null);

  const URL = "https://events-n-stuff.herokuapp.com/events/";

  const getEvent = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setEvent(data);
  };

  const createEvent = async (events) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(events),
    });
    getEvent();
  };

  const updateEvent = async (events, id) => {
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(events),
    })
    getEvent()
  }

  const deleteEvent = async id => {
    await fetch(URL + id, {
      method: "delete",
    })
    getEvent()
  }

  useEffect(() => getEvent(), []);

  console.log(props)

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index user={props.user} event={event} createEvent={createEvent} updateEvent={updateEvent} />
        </Route>
        <Route
          path="/events/:id"
          render={(rp) => (
            <Show
              {...rp}
              user={props.user}
              event={event}
              updateEvent={updateEvent}
              deleteEvent={deleteEvent}
            />
          )}
        />
        <Route
          path="/myevents"
          render={(rp) => (
            <MyEvents
              {...rp}
              user={props.user}
              event={event}
              updateEvent={updateEvent}
              createEvent={createEvent}
            />
          )}
        />
                <Route
          path="/createvent"
          render={(rp) => (
            <CreateEvent
              {...rp}
              user={props.user}
              event={event}
              createEvent={createEvent}
            />
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;