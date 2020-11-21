import React from "react";
import "../styles/App.css";

export default function Welcome(props) {
  return (
    <>
      <h1>Hey{props.name}!</h1>
      <h2>Welcome to Newton School.</h2>
    </>
  );
}
