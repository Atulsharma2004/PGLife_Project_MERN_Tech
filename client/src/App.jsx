import "./App.css";
import { Outlet } from "react-router-dom";
// import { Toaster } from 'react-hot-toast';
import StickyNavbar from "./components/StickyNavbar";
// import About from './components/About';
// import Contact from './components/Contact';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import List from './components/List';
// import LibraryHeader from './components/LibraryHeader';
// import InsideHostel from './components/InsideHostel';
// import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* <Toaster/> */}
      <StickyNavbar />
      <main className="mt-2 bg-slate-100 ">
        <Outlet />
      </main>
    </>
  );
}

export default App;
