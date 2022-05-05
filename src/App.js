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
  Error,
  Answers
} from "../src/components";
//import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:categoryId" element={<Quiz />} />
        <Route path="/rules/:categoryId" element={<Rules />} />
        <Route path="/result" element={<Result />} />
        <Route path="/category" element={<Category />} />
        <Route path="/answers" element={<Answers/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
