import Footer from './footer';
import Link from 'next/link';

export default function SideBar() {
  return (
    <div id="sidebar-container" className="crazy-border">
      <div className="crazy-border sidebar-header">

        <img src="profile.jpg" alt="picture of author" id="profile-pic"/>
        <div>Khuong Le</div>
        <div id="profile-email">khnghle@gmail.com</div>
      </div>

      <div className="crazy-border sidebar-link">
        <div>
          <Link href="personal_portfolio/">Home</Link>
        </div>
        <hr className="solid" />
        <div>
          <Link href="personal_portfolio/about">About</Link>
        </div>
        <hr className="solid" />

        <div>
          <Link
            href="personal_portfolio/projects"
          >
            Projects
          </Link>
        </div>

        <hr className="solid" />
      </div>

      <Footer className="sidebar-footer" />
    </div>
  );
}
