import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [event , setEvent] = useState(null);

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

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index user={props.user} events={event} createEvent={createEvent} />
        </Route>
        <Route
          path="/events/:id"
          render={(rp) => (
            <Show
              {...rp}
              event={event}
              updateEvent={updateEvent}
              deleteEvent={deleteEvent}
            />
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;