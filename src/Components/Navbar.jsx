export default function Navbar() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <h1 className="nav-logo">
            <span className="tec">Tec</span>
            <span className="gen">Gen</span>
          </h1>
          <div className="nav-links-container">
            <a
              className="nav-link nav-link-home"
              href="#"
              rel="noopener noreferrer"
            >
              Home
            </a>
            <a className="nav-link" href="#" rel="noopener noreferrer">
              Product
            </a>
            <a className="nav-link" href="#" rel="noopener noreferrer">
              Specification
            </a>
            <a className="nav-link" href="#" rel="noopener noreferrer">
              Contact us
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
