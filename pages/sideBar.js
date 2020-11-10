import { Fragment } from "react";
import Footer from "./footer";
import NavBar from "./navbar";
import Link from 'next/Link'



export default function SideBar() {
  return (
    <div id="sidebar">

      <div>Picture</div>
      <div>Name</div>
      <div>Email</div>

      <NavBar />
      <Footer />
    </div>
  )
}