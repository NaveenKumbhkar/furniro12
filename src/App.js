import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";
import HomePage from "./pages/homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
