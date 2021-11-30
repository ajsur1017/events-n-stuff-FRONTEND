import React from "react"
import { Link } from "react-router-dom";

function Footer() {
  return(
    <div className={"footer container-fluid"}>
      <div>
        <span>Created by: </span>
        <a href="https://github.com/nickdavis1018">Nick Davis</a><span>, </span>
        <a href="https://github.com/ajsur1017">Anthony Surace</a><span> and </span>
        <a href="https://github.com/Tsames">Tom Ames</a>
      </div>
      <a href="https://github.com/ajsur1017/events-n-stuff-FRONTEND">github repo</a>
    </div>
  )
}

export default Footer;