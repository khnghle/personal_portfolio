export default function ContactMe () {
  function onClick () {
    console.log('Link to the mail')
  }

  return (
    <div id="home" >
      <h1>Hello World!</h1>
      <p>Thanks for checking out my site!</p>
      <div className="about-buttons">
        <button onClick={onClick}>Contact Me</button>
        <button onClick={onClick}>Resume</button>
      </div>
    </div>
  )
}
