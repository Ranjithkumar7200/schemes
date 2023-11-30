import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/loginForms/Login";
import Demo from "./pages/demo/Demo";
import MainNav from "./pages/Navbars/MainNav";
import Sidebar from "./pages/Navbars/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import AdminDashBoard from "./pages/dashboards/AdminDashBoard";
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div className="App">
      <Router>
        {authenticated && (
          <MainNav
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        )}

        <Container fluid>
          <Row>
            {authenticated && (
              <Col lg={3} xxl={2} xl={2}>
                <Sidebar />
              </Col>
            )}
            <Col
              lg={authenticated ? 9 : 12}
              xxl={authenticated ? 10 : 12}
              xl={authenticated ? 10 : 12}
              md={12}
              sm={12}
            >
              <Routes>
                <Route path="/" element={<Demo />} />
                <Route
                  path="/admin/login"
                  element={<Login setAuthenticated={setAuthenticated} />}
                />
                <Route
                  path="/admindashboard"
                  element={authenticated ? <AdminDashBoard /> : <Navigate to="/" />}
                />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
