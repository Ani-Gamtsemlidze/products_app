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
          src="./search.png"
        />
        <input
          style={{
            borderRadius: "20px",
            padding: "12px 45px",
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
