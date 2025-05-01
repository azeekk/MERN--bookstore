import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      email,
      password
    } 

    axios
      .post("http://localhost:3000/api/admins/login", data)
      .then((res) => {
        alert("Login successful");
        console.log(res.data);
        navigate('/')
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="d-flex h-screen items-center justify-center flex-col">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="button" onClick={handleLogin}>
          Submit
        </Button>
      </Form>
      <a href="/Home">Sign up</a>
    </div>
  );
};

export default Login
