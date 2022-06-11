import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Profile from "./Profile";
import Skills from "./Skills";
import Contact from "./Contact";
import Blog from "./Blog";
import Projects from "./Projects";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Profile />
              <About />
              <Skills />
              <Contact />
            </>
          }
        ></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>

      <Footer />
    </>
  );
}
