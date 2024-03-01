
import {Link} from "react-router-dom";
export default function NonScrollNav() {
  return (
    <>
      <Link state={{ scroll: "value" }} to="/">Home</Link>
      <Link state={{ scroll: "steps__headline" }} to="/">How it works?</Link>
      <Link state={{ scroll: "about" }} to="/">About us</Link>
      <Link state={{ scroll: "partners__container" }} to="/">Charity organizations</Link>
      <Link state={{ scroll: "contact" }} to="/">Contact</Link>
    </>
  )
}