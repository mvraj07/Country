export default function Header() {
  return (
    <header>
      <div className="header-container ">
        <div className="container nav-flex">
          <div className="logo">
            <h1 className="logo-heading">WorldAtlas</h1>
          </div>
          <div>
            <ul className="nav-links">
              <li>Home</li>
              <li>About</li>
              <li>Country</li>
              <li>Contact</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
