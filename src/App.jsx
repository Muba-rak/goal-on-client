import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Ongoing from "./pages/Ongoing";
import Complete from "./pages/Complete";
import Create from "./pages/Create";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/all" element={<h1>All Goals</h1>} />
            <Route path="/ongoing" element={<Ongoing />} />
            <Route path="/completed" element={<Complete />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
