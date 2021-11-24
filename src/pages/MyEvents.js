import { useState } from "react";
import { Link } from "react-router-dom"

function MyEvent(props) {

  const loaded = () => {
    return props.event.map((events) => (
      <h1>props.event.name</h1>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  
  return (
    <section>
      {props.event ? loaded() : loading()};
    </section>
  )
}

export default MyEvent;