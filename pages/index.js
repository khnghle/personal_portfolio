export default function Home() {
  function onClick (text) {
    console.log('This should display something')
  }
  return (
    <div id="introduction">

      <h1>Hello, my name is Khuong!</h1>

      <p>I am ... blurb blurb blurb</p>

    <div className="about-buttons">
      <button onClick={onClick}>Contact Me</button>
      <button onClick={onClick}>Resume</button>
    </div>
    </div>
  )
}
