import {Link as LinkScroll} from "react-scroll";

export default function ScrollNav() {
  return (
    <>
      <LinkScroll smooth={true} duration={500} to="/">Home</LinkScroll>
      <LinkScroll smooth={true} duration={500} to="steps__headline">How it works?</LinkScroll>
      <LinkScroll smooth={true} duration={500} to="about">About us</LinkScroll>
      <LinkScroll smooth={true} duration={500} to="partners__container">Charity organizations</LinkScroll>
      <LinkScroll smooth={true} duration={500} to="contact">Contact</LinkScroll>
    </>
  )
}