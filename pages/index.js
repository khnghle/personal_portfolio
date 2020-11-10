export default function Home() {
  function onClick (text) {
    console.log('This should display something')
  }
  return (
    <div>

      <h1>Hello, my name is Khuong and I'm 
        <span> a software developer!</span>
      </h1>

      <button onClick={onClick}>Contact Me</button>
      <button onClick={onClick}>Resume</button>
    </div>
  )
}
