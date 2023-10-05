import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        style={{ width: "50px", height: "50px", objectFit: "contain" }}
        src="./logo.png"
      />
    </Link>
  );
}

export default Logo;
