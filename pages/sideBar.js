import Footer from './footer';
import Link from 'next/Link';
import Image from 'next/image';

export default function SideBar() {
  return (
    <div id="sidebar-container" className="crazy-border">
      <div className="crazy-border sidebar-header">
        <Image
          src="/profile.png"
          alt="picture of author"
          width={'125em'}
          height={'125em'}
        />
        <div>Khuong Le</div>
        <div>khnghle@gmail.com</div>
      </div>

      <div className="crazy-border sidebar-link">
        <div>
          <Link href="/">Home</Link>
        </div>
        <hr className="solid" />
        <div>
          <Link href="/about">About</Link>
        </div>
        <hr className="solid" />

        <div>
          <Link
            href="/projects"
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
