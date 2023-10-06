import Logo from "./Logo";

function Header() {
  return (
    <div className="header-container">
      <Logo />

      <div
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        <img
          style={{
            height: "18px",
            objectFit: "contain",
            position: "absolute",
            left: "15px",
          }}
          src="search.png"
        />
        <input
          className="search"
          style={{
            borderRadius: "20px",
            padding: "10px 40px",
            width: "250px",
            border: "none",
            outline: "none",
            backgroundColor: "#f7f7f7",
          }}
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default Header;
