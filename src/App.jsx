import { Outlet } from "react-router";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <main className="min-h-screen ">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
