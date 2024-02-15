import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Table,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { listProducts } from "../../actions/productActions";
import { listOrders } from "../../actions/orderActions";
import { listUsers } from "../../actions/userActions";

function Dashboard() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Fetch users
  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const users = useSelector((state) => state.userList.users);
  const totalUsers = users ? users.length : 0;
  const totalAdmins = users ? users.filter((user) => user.isAdmin).length : 0;
  const totalNormalUsers = users
    ? users.filter((user) => !user.isAdmin).length
    : 0;

  const products = useSelector((state) => state.productList.products);
  // Fetch products
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // Calculate the total count of all products, Flowers, and Bokeh
  const totalProducts = products ? products.length : 0;
  const flowersCount = products
    ? products.filter((product) => product.category === "Flower").length
    : 0;
  const bokehCount = products
    ? products.filter((product) => product.category === "Bokeh").length
    : 0;

  const orders = useSelector((state) => state.orderList.orders);
  // Fetch orders
  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);

  // Calculate the total count of orders
  const totalOrders = orders ? orders.length : 0;

  const totalAmount = orders
    ? orders.reduce(
        (acc, order) => acc + (parseFloat(order.totalPrice) || 0),
        0
      )
    : 0;

  // Calculate orders for this year, this month, this week, yesterday, and today
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentWeek = new Date().toLocaleDateString("en-US", {
    week: "numeric",
  });
  const currentDay = new Date().toLocaleDateString("en-US");

  const ordersThisYear = orders
    ? orders.filter(
        (order) => new Date(order.createdAt).getFullYear() === currentYear
      )
    : [];

  const amountThisYear = ordersThisYear
    ? ordersThisYear.reduce(
        (acc, order) => acc + (parseFloat(order.totalPrice) || 0),
        0
      )
    : 0;

  const ordersThisMonth = orders
    ? orders.filter(
        (order) =>
          new Date(order.createdAt).getFullYear() === currentYear &&
          new Date(order.createdAt).getMonth() + 1 === currentMonth
      )
    : [];

  const amountThisMonth = ordersThisMonth
    ? ordersThisMonth.reduce(
        (acc, order) => acc + (parseFloat(order.totalPrice) || 0),
        0
      )
    : 0;

  const ordersThisWeek = orders
    ? orders.filter(
        (order) =>
          new Date(order.createdAt).toLocaleDateString("en-US", {
            week: "numeric",
          }) === currentWeek
      )
    : [];

  const amountThisWeek = ordersThisWeek
    ? ordersThisWeek.reduce(
        (acc, order) => acc + (parseFloat(order.totalPrice) || 0),
        0
      )
    : 0;

  const ordersYesterday = orders
    ? orders.filter(
        (order) =>
          new Date(order.createdAt).toLocaleDateString("en-US") ===
          new Date(
            new Date().setDate(new Date().getDate() - 1)
          ).toLocaleDateString("en-US")
      )
    : [];

  const amountYesterday = ordersYesterday
    ? ordersYesterday.reduce(
        (acc, order) => acc + (parseFloat(order.totalPrice) || 0),
        0
      )
    : 0;

  const ordersToday = orders
    ? orders.filter(
        (order) =>
          new Date(order.createdAt).toLocaleDateString("en-US") === currentDay
      )
    : [];

  const amountToday = ordersToday
    ? ordersToday.reduce(
        (acc, order) => acc + (parseFloat(order.totalPrice) || 0),
        0
      )
    : 0;

  // Filter orders that are not delivered
  const pendingOrders = orders
    ? orders.filter((order) => !order.isDelivered)
    : [];

  // Filter orders that are not paid
  const unpaidOrders = orders ? orders.filter((order) => !order.isPaid) : [];

  return (
    <div>
      <style>
        {`
          @media (max-width: 767.98px) {
            .DashBoard-Welcome{
              font-size: 1.3rem !important;
            } 
            .DashBoard-Name{
              font-size: 1.5rem !important;
            }
          }
       `}
      </style>
      <Container>
        <Row>
          <Row>
            <Col>
              <h1>DashBoard</h1>
              {userInfo ? (
                <div>
                  <p
                    className="DashBoard-Welcome"
                    style={{
                      fontFamily: "Lora",
                      fontSize: "1.5rem",
                      color: "#000",
                      marginBottom: "-10px",
                    }}
                  >
                    Welcome{" "}
                  </p>
                  <p
                    className="DashBoard-Name"
                    style={{
                      fontFamily: "Lora",
                      fontSize: "2rem",
                      color: "#000",
                    }}
                  >
                    <strong> {userInfo.name}</strong>
                  </p>
                </div>
              ) : (
                ""
              )}
            </Col>
          </Row>
          <Col lg={6} md={12} sm={12} className="p-lg-3 p-md-3">
            <Row className="mt-2">
              <Card>
                <Card.Body>
                  <Card.Header
                    className="text-center"
                    style={{ backgroundColor: "#FFC0CB" }}
                  >
                    Pending Orders
                  </Card.Header>
                  {pendingOrders.length > 0 ? (
                    <Table responsive bordered>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>User</th>
                          <th>Total Amount</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pendingOrders.map((order) => (
                          <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.user.name}</td>
                            <td>{`Rs.${parseFloat(order.totalPrice).toFixed(
                              2
                            )}`}</td>
                            <td>
                              <LinkContainer to={`/order/${order._id}`}>
                                <Button
                                  variant="dark"
                                  className="btn-sm"
                                  onClick={scrollToTop}
                                >
                                  {" "}
                                  Detail
                                </Button>
                              </LinkContainer>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : (
                    <p>No pending orders</p>
                  )}
                </Card.Body>
              </Card>
            </Row>
            <Row className="mt-2">
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Header
                      className="text-center"
                      style={{ backgroundColor: "#FFC0CB" }}
                    >
                      Unpaid Orders
                    </Card.Header>
                    {unpaidOrders.length > 0 ? (
                      <Table responsive bordered>
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Total Amount</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {unpaidOrders.map((order) => (
                            <tr key={order._id}>
                              <td>{order._id}</td>
                              <td>{order.user.name}</td>
                              <td>{`Rs.${parseFloat(order.totalPrice).toFixed(
                                2
                              )}`}</td>
                              <td>
                                <LinkContainer to={`/order/${order._id}`}>
                                  <Button
                                    variant="dark"
                                    className="btn-sm"
                                    onClick={scrollToTop}
                                  >
                                    {" "}
                                    Detail
                                  </Button>
                                </LinkContainer>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    ) : (
                      <p>No unpaid orders</p>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Header
                      className="text-center"
                      style={{ backgroundColor: "#FFC0CB" }}
                    >
                      Orders
                    </Card.Header>
                    <Table responsive bordered>
                      <tbody>
                        <tr>
                          <td>Total Orders</td>
                          <td>{totalOrders}</td>
                          <td>{`Rs.${totalAmount.toFixed(2)}`}</td>
                        </tr>
                        <tr>
                          <td>This Year</td>
                          <td>{ordersThisYear.length}</td>
                          <td>{`Rs.${amountThisYear.toFixed(2)}`}</td>
                        </tr>
                        <tr>
                          <td>This Month</td>
                          <td>{ordersThisMonth.length}</td>
                          <td>Rs.{amountThisMonth}</td>
                        </tr>
                        <tr>
                          <td>This Week</td>
                          <td>{ordersThisWeek.length}</td>
                          <td>Rs.{amountThisWeek}</td>
                        </tr>
                        <tr>
                          <td>Yesterday</td>
                          <td>{ordersYesterday.length}</td>
                          <td>Rs.{amountYesterday}</td>
                        </tr>
                        <tr>
                          <td>Today</td>
                          <td>{ordersToday.length}</td>
                          <td>Rs.{amountToday}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12} sm={12} className="p-3">
            <Row className="mt-2">
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Header
                      className="text-center"
                      style={{ backgroundColor: "#FFC0CB" }}
                    >
                      Users Detail
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Row>
                          <Col lg={8} md={8} sm={7} xs={8}>
                            Total Users
                          </Col>
                          <Col lg={1} md={1} sm={1} xs={1}>
                            {":"}
                          </Col>
                          <Col lg={3} md={3} sm={3} xs={3}>
                            {totalUsers}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col lg={8} md={8} sm={7} xs={8}>
                            Total Admin
                          </Col>
                          <Col lg={1} md={1} sm={1} xs={1}>
                            {":"}
                          </Col>
                          <Col lg={3} md={3} sm={3} xs={3}>
                            {totalAdmins}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col lg={8} md={8} sm={7} xs={8}>
                            Customers
                          </Col>
                          <Col lg={1} md={1} sm={1} xs={1}>
                            {":"}
                          </Col>
                          <Col lg={3} md={3} sm={3} xs={3}>
                            {totalNormalUsers}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Header
                      className="text-center"
                      style={{ backgroundColor: "#FFC0CB" }}
                    >
                      Products Detail
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Row>
                          <Col lg={8} md={8} sm={7} xs={8}>
                            Total Products
                          </Col>
                          <Col lg={1} md={1} sm={1} xs={1}>
                            {":"}
                          </Col>
                          <Col lg={3} md={3} sm={3} xs={3}>
                            {totalProducts}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col lg={8} md={8} sm={7} xs={8}>
                            Flowers
                          </Col>
                          <Col lg={1} md={1} sm={1} xs={1}>
                            {":"}
                          </Col>
                          <Col lg={3} md={3} sm={3} xs={3}>
                            {flowersCount}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col lg={8} md={8} sm={7} xs={8}>
                            Bokeh
                          </Col>
                          <Col lg={1} md={1} sm={1} xs={1}>
                            {":"}
                          </Col>
                          <Col lg={3} md={3} sm={3} xs={3}>
                            {bokehCount}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
