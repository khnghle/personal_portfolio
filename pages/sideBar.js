import Footer from './footer';
import Link from 'next/Link';
import Image from 'next/image';

export default function SideBar() {
  return (
    <div id="sidebar-container" className="crazy-border">
      <div className="crazy-border sidebar-header">
        <Image src='/profile.png'
          alt="picture of author"
          width={'125em'}
          height = {'125em'}
        />
        <div>Khuong Le</div>
        <div>khnghle@gmail.com</div>
      </div>

      <div className="crazy-border sidebar-link">
        <div>
          <Link href="/">About</Link>
        </div>
        <hr className="solid"/>
        <div>
          <Link href="/skills">Skills</Link>
        </div>
        <hr className="solid"/>

        <div>
          <Link
            href="/projects"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Projects
          </Link>
          <ul className="collapse list-unstyled" id="pageSubmenu">
            <li>Page 1</li>
            <li>Page 2</li>
            <li>Page 3</li>
          </ul>
        </div>

        <hr className="solid"/>

        <div>
          <Link href="/contact">Contact Me</Link>
        </div>
        <hr className="solid"/>
      </div>

      <Footer className="sidebar-footer"/>

    </div>
  );
}
