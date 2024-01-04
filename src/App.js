import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/Minimalist-News/"
            element={
              <News
                key="general"
                pageSize={12}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/Minimalist-News/business"
            element={
              <News
                key="business"
                pageSize={12}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/Minimalist-News/technology"
            element={
              <News
                key="technology"
                pageSize={12}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/Minimalist-News/sports"
            element={
              <News key="sports" pageSize={12} country="in" category="sports" />
            }
          />
          <Route
            exact
            path="/Minimalist-News/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={12}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/Minimalist-News/science"
            element={
              <News
                key="science"
                pageSize={12}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/Minimalist-News/health"
            element={
              <News key="health" pageSize={12} country="in" category="health" />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
