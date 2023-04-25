import logo from "./logo.svg";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <a href="#home" class="navbar-brand">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              class="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
