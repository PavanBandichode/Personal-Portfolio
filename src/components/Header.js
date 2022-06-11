import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [logo, setLogo] = useState("P");
  useEffect(() => {
    setTimeout(() => setLogo(logo === "P" ? "B" : "P"), 4500);
  }, [logo]);
  return (
    <header class="header">
      <div class="container grid">
        <a href="/" class="brand-name">
          <span>{logo}</span>
        </a>
        <input type="checkbox" name="toggle" id="toggle" />
        <label for="toggle">
          <i class="fas fa-bars"></i>
        </label>
        <nav class="nav">
          <ul class="nav-menu">
            <li class="nav-menu-item">
              <NavLink to="/blogs" class="nav-link">
                {" "}
                Blogs
              </NavLink>
            </li>
            <li class="nav-menu-item">
              <NavLink to="/projects" class="nav-link">
                {" "}
                Projects
              </NavLink>
            </li>
            <li class="nav-menu-item">
              <button class="btn">
                <a href="./My-Resume.pdf" download="Resume" class="nav-link">
                  download cv
                </a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
