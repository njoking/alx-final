import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/ContactUs";
import Chat from "./pages/Chat";
import List from "./pages/List";
import Adopt from "./pages/Adopt";
import BookAppointment from "./pages/BookAppointment";
import Tips from "./pages/Tips";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Resources from "./pages/Resources";
import Book from "./pages/Book";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/list" element={<List />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/book-appointment/:id" element={<BookAppointment />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resources" element={<Resources />} />
          <Route
            path="/adopt"
            element={
              <PrivateRoute>
                <Adopt />
              </PrivateRoute>
            }
          />
          <Route
            path="/list"
            element={
              <PrivateRoute>
                <List />
              </PrivateRoute>
            }
          />
          <Route
            path="/book"
            element={
              <PrivateRoute>
                <Book />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
