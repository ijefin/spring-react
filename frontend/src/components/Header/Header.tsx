import logo from "../../assets/logo.svg";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="Logomarca do sistema" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/jefinskts/">@jefinskts</a>
        </p>
      </div>
    </header>
  );
}
