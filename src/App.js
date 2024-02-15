// App.js
import React from "react";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

import AllProductScreen from "./screens/CategoryScreen/AllProductScreen";
import FlowersScreen from "./screens/CategoryScreen/FlowerScreen";
import BokehScreen from "./screens/CategoryScreen/BokehScreen";

// Event
import AllEventScreen from "./screens/AllEventScreen";
import CreateEventScreen from "./screens/CreateEventScreen";
import EventScreen from "./screens/EventScreen";

import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ContactUsScreen from "./screens/ContactUsScreen";

import SearchResults from "./components/SearchResults";

import ProductEditScreen from "./screens/ProductEditScreen";

// Admin Screens
import AdminScreen from "./screens/AdminScreen";

import Dashboard from "./screens/Admin/Dashboard";
import UserListScreen from "./screens/Admin/UserListScreen";

import ProductListScreen from "./screens/Admin/ProductsList/ProductListScreen";
import FlowerListScreen from "./screens/Admin/ProductsList/FlowerListScreen";
import BokehListScreen from "./screens/Admin/ProductsList/BokehListScreen";

import EventListScreen from "./screens/Admin/EventListScreen";
import OrderListScreen from "./screens/Admin/OrderListScreen";
import SettingsScreen from "./screens/Admin/SettingsScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container fluid className="py-3">
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/search/:keyword" element={<SearchResults />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
            <Route path="/contact-us" element={<ContactUsScreen />} />

            <Route path="/all-Product" element={<AllProductScreen />} />
            <Route path="/flowers" element={<FlowersScreen />} />
            <Route path="/bokeh" element={<BokehScreen />} />
            <Route path="/events" element={<AllEventScreen />} />
            <Route path="/events/:id" element={<EventScreen />} />

            <Route path="/admin" element={<AdminScreen />}>
              <Route index element={<Dashboard />} />

              <Route path="userlist" element={<UserListScreen />} />

              <Route path="productlist" element={<ProductListScreen />} />
              <Route path="productlist/flower" element={<FlowerListScreen />} />
              <Route path="productlist/bokeh" element={<BokehListScreen />} />
              <Route path="eventlist" element={<EventListScreen />} />

              <Route path="orderlist" element={<OrderListScreen />} />
              <Route path="settings" element={<SettingsScreen />} />
            </Route>

            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />

            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen />}
            />

            <Route path="create-event" element={<CreateEventScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
