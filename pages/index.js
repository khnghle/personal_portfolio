export default function ContactMe () {
  return (
    <div id="home" >
      <h1>Hello World!</h1>
      <p>Thanks for checking out my site!</p>
      <div className="about-buttons">
        <a href="mailto: khnghle@gmail.com">
          <button className="home-button">
            Contact Me
          </button>
        </a>

        <a href="Khuong_Resume.pdf" download>
          <button className="home-button">Resume</button>
        </a>

      </div>
    </div>
  )
}
