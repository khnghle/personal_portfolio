export default function ContactMe () {
  function onClick () {
    console.log('Link to the mail')
  }
  return (
    <div id="contact-me">
      <h2>Contact me!</h2>
      <button onClick={onClick}>Maybe a form?</button>
    </div>
  )
}
