import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="headerRefineria">
            <div className="sistemaRefineria">
              <p>// SISTEMA DE REFINERIA C47.02</p>
              <p>// MODULO - FD67</p>
            </div>

            <div className="tituloRefineria">
              <h1>LEVSKI</h1>
              <h2>CENTRO DE REFINAMIENTO</h2>
            </div>
          </div>
          <div className="container-bars">
            <div className="bar-box"></div>
            <div className="bar-separator"></div>

            <div className="bar-box"></div>
            <div className="bar-separator"></div>

            <div className="bar-box"></div>
            <div className="bar-separator"></div>

            <div className="bar-box"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
