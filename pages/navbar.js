import Link from 'next/Link';

export default function NavBar() {
  return (
    <ul class="list-unstyled components">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/aboutMe">About Me</Link>
      </li>
      <li>
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
      </li>
      <li>
        <Link href="/contact">Contact Me</Link>
      </li>
    </ul>
  );
}
