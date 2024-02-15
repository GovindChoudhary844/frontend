import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { listOrders } from "../../actions/orderActions";

function OrderListScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [deliveredFilter, setDeliveredFilter] = useState("All");
  const [paidFilter, setPaidFilter] = useState("All");

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  const handleDeliveredFilterChange = (status) => {
    setDeliveredFilter(status);
  };

  const filteredOrders = orders
    ? orders.filter((order) => {
        const isPaidMatch =
          paidFilter === "All" ||
          (paidFilter === "Paid" && order.isPaid) ||
          (paidFilter === "NotPaid" && !order.isPaid);

        const isDeliveredMatch =
          deliveredFilter === "All" ||
          (deliveredFilter === "Delivered" && order.isDelivered) ||
          (deliveredFilter === "NotDelivered" && !order.isDelivered);

        return isPaidMatch && isDeliveredMatch;
      })
    : [];

  return (
    <div>
      <style>
        {`
        @media (max-width: 767.98px) { 
          .order-List-Table{
            marginLeft:10px;
            backgroung-color:red;
          }
         }
        `}
      </style>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : filteredOrders && filteredOrders.length ? (
        <Table
          striped
          bordered
          hover
          responsive
          className="table-sm order-List-Table"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL AMOUNT</th>
              <th>
                PAID
                <select
                  value={paidFilter}
                  onChange={(e) => setPaidFilter(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Paid">Paid</option>
                  <option value="NotPaid">Not Paid</option>
                </select>
              </th>
              <th>
                DELIVERED
                <select
                  value={deliveredFilter}
                  onChange={(e) => handleDeliveredFilterChange(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Delivered">Delivered</option>
                  <option value="NotDelivered">Not Delivered</option>
                </select>
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user && order.user.name}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>Rs.{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      <>
                        <i
                          className="fas fa-check"
                          style={{ color: "green" }}
                        ></i>{" "}
                        {new Date(order.paidAt).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })}
                      </>
                    ) : (
                      <i className="fas fa-check" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      <>
                        <i
                          className="fas fa-check"
                          style={{ color: "green" }}
                        ></i>{" "}
                        {new Date(order.deliveredAt).toLocaleDateString(
                          undefined,
                          {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                          }
                        )}
                      </>
                    ) : (
                      <i className="fas fa-check" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button variant="dark" className="btn-sm">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <Message variant="info">No orders found</Message>
      )}
    </div>
  );
}

export default OrderListScreen;
