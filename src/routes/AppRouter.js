import React from "react";
import { BrowserRouter as Rutas, Route, Routes } from "react-router-dom"
import About from "../components/About";
import Category from "../components/Category";
import Contact from "../components/Contact";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import PageError from "../components/PageError";
import Payments from "../components/Payments";
import ProfileUser from "../components/ProfileUser";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


export default function AppRouter() {
    return (
      <Rutas>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/perfil/:username" element={<ProfileUser />} />
          <Route path="/categories" element={<Category />} />

          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/" element={<PublicRoute />}>
                <Route path="/register" element={<Register />} />
          </Route>

          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route exact path="/payments" element={<Payments />} />
          </Route>
          <Route path="*" element={<PageError />} />
        </Routes>
      </Rutas>
    );
}
