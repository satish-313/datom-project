import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col, Form } from "react-bootstrap";
// api url https://reqres.in/api/users

const App = () => {
  const [user, setUser] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [resultUser, setResultUser] = useState(null);

  const fetchInfo = async () => {
    try {
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      // console.log(data.data);
      setUser(data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const searchUserfn = (e) => {
    e.preventDefault();
    user.map((s) => {
      const { first_name, last_name } = s;
      if (searchUser === first_name) {
        setResultUser(s.id);
      } else if (searchUser === last_name) {
        setResultUser(s.id);
      }
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="search-bar">
            <h6>search</h6>
            <form onSubmit={searchUserfn}>
              <input
                type="text"
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
              />
              <button>submit</button>
            </form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="search">
            <h4 className="title">search user</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>email</th>
                  <th>first name</th>
                  <th>last name</th>
                  <th>avatar</th>
                </tr>
              </thead>
              {user.map((s, index) => {
                const { id, email, first_name, last_name, avatar } = s;
                if (id === resultUser) {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>{id}</td>
                        <th>{email}</th>
                        <th>{first_name}</th>
                        <th>{last_name}</th>
                        <th>
                          <img
                            src={avatar}
                            alt={first_name}
                            className="my-in"
                          />
                        </th>
                      </tr>
                    </tbody>
                  );
                }
              })}
            </Table>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="title">user table</div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>email</th>
                <th>first name</th>
                <th>last name</th>
                <th>avatar</th>
              </tr>
            </thead>
            {user.map((s, index) => {
              const { id, email, first_name, last_name, avatar } = s;
              return (
                <tbody key={index}>
                  <tr>
                    <td>{id}</td>
                    <th>{email}</th>
                    <th>{first_name}</th>
                    <th>{last_name}</th>
                    <th>
                      <img src={avatar} alt={first_name} className="my-in" />
                    </th>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
