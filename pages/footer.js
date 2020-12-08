export default function Footer() {
  return (
    <div className="crazy-border sidebar-footer">
      <div className="link-icons">
        <a href="https://github.com/khnghle" target="_blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/khuonghle4/" target="_blank">
          <i className="fab fa-linkedin-in fa-2x"></i>
        </a>
        <a href="mailto: khnghle@gmail.com">
          <i class="fas fa-envelope fa-2x"></i>
        </a>
        <a href="Khuong_Resume.docx.pdf" download>
          <i className="far fa-file fa-2x"></i>
        </a>
      </div>

      <div className="footer-text">Made with Next.js!</div>
    </div>
  );
}
