import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import { store } from "./redux/index";
import { Provider } from "react-redux";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import LibraryHead from "./components/LibraryHead.jsx";
import List from "./components/List.jsx";
import InsideHostel from "./components/InsideHostel.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route exact path="/library" element={<LibraryHead />} />
      <Route exact path="/list/:city" element={<List />} />
      <Route
        exact
        path="/insideHostel/:name/:address/:filter/:rent/:exteriorImage/:interiorImage/:email/:phone/:_id"
        element={<InsideHostel />}
      />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
