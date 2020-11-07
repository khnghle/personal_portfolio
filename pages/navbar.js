import { Fragment } from "react";

import Link from 'next/Link'

export default function NavBar() {
  return (
    <Fragment>
      <Link href='/'>Home</Link>
      <Link href='/aboutMe'>About Me</Link>
      <Link href='/projects'>Projects</Link>
      <Link href='/contact'>Contact Me</Link>
    </Fragment>
  )
}