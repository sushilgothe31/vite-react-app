import { Routes, Route, Link, Outlet } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// from   
function Layout() {
  return (
    <>
      <nav>
        <Link to="/"> Home </Link>
        <br />     
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </nav>
      <Outlet />
    </>
  );
}
// to
// https://github.com/samarth44600/vite-react-app
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact name={"Tech AI"} location={"New "} classes={"CSIT"} />} />
      </Route>
    </Routes>
  );
}
