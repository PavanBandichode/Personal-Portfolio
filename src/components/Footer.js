var I = require("react-fontawesome");
export default function Footer() {
  return (
    <footer style={{ zIndex: 100 }}>
      <span>
        Created By{" "}
        <a href="https://github.com/pavanbandichode">
          <I className="fas fab fa-github"></I> Pavan Bandichode{" "}
        </a>
      </span>
    </footer>
  );
}
