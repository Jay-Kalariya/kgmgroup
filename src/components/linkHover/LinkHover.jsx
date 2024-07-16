import Link from "next/link";
import "./linkHover.scss";
import PageTransition from "../pageTransition/PageTransition";
const LinkHover = ({ url, text, color, fontSize, textTransform, children }) => {
  return (
    <PageTransition
      href={url}
      style={{ color: color, fontSize: fontSize, textTransform:textTransform }}
      className={`linkHover`}
    >
      <span> {text}</span>
      <span> {text}</span>
    </PageTransition>
  );
};
export default LinkHover;
