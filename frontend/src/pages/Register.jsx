import {React, useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSaveAdmin = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required.");

      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    const data = {
      name,
      email,
      password,
    };

    axios
      .post("http://localhost:3000/api/admins", data)
      .then(() => {
        console.log("registration succesful");
        console.log(data);

        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="d-flex h-screen items-center justify-center flex-col">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>EnterEmail</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSaveAdmin}>
          Submit
        </Button>
      </Form>
      <a href="/login">Sign up</a>
    </div>
  );
};

export default Register
