import { Fragment } from "react";

export default function ContactMe () {
  function onClick () {
    console.log('Link to the mail')
  }
  return (
    <Fragment>
      <h2>This is where you can contact me!</h2>
      <button onClick={onClick}>Maybe a form?</button>
    </Fragment>
  )
}
