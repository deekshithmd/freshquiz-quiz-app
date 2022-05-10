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
  Answers,
  Login,
  Signup,
  RequiresAuth,
  Profile,
} from "../src/components";
//import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route
          path="/rules/:categoryId"
          element={
            <RequiresAuth>
              <Rules />
            </RequiresAuth>
          }
        />
        <Route
          path="/quiz/:categoryId"
          element={
            <RequiresAuth>
              <Quiz />
            </RequiresAuth>
          }
        />
        <Route
          path="/result"
          element={
            <RequiresAuth>
              <Result />
            </RequiresAuth>
          }
        />
        <Route
          path="/answers"
          element={
            <RequiresAuth>
              <Answers />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
