import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Quiz,
  Result,
  Rules,
  Category,
} from "../src/components";
//import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/result" element={<Result />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
