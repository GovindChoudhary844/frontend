import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { Table, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { deleteUser, listUsers } from "../../actions/userActions";

function UserListScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  const [isAdminFilter, setIsAdminFilter] = useState("All");

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, successDelete, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  const handleAdminFilterChange = (isAdmin) => {
    setIsAdminFilter(isAdmin);
  };

  const filteredUsers = users
    ? users.filter((user) => {
        if (isAdminFilter === "All") {
          return true;
        } else if (isAdminFilter === "Admin") {
          return user.isAdmin;
        } else if (isAdminFilter === "NotAdmin") {
          return !user.isAdmin;
        }
        return true;
      })
    : [];

  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : users && users.length ? (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>
                  ADMIN
                  <select
                    as="select"
                    value={isAdminFilter}
                    onChange={(e) => handleAdminFilterChange(e.target.value)}
                  >
                    <option value="All">All</option>
                    <option value="Admin">Admin</option>
                    <option value="NotAdmin">Not Admin</option>
                  </select>
                </th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.isAdmin ? (
                      <i
                        className="fas fa-check"
                        style={{ color: "green" }}
                      ></i>
                    ) : (
                      <i className="fas fa-check" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(user._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <Message variant="info">No users found</Message>
      )}
    </div>
  );
}

export default UserListScreen;
