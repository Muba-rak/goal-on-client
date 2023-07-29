import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Ongoing from "./pages/Ongoing";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/all" element={<h1>All Goals</h1>} />
            <Route path="/ongoing" element={<Ongoing />} />
            <Route path="/completed" element={<h1>completed</h1>} />
            <Route path="/create" element={<h1>Create a goal</h1>} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
