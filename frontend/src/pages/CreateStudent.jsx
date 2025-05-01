import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'



const CreateStudent = () => {
    const [name, setName] = useState('')
    const [studentClass, setStudentClass] = useState('')
    const [contactNum, setContactNum] = useState('')
    const [email, setemail] = useState('')
    const [dob, setdob] = useState('')



const handleStudentCreate = () => {

    



}

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
    
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter Student Class</Form.Label>
              <Form.Control
                type="text"
                placeholder="class"
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
              />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Contact Number </Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                value={contactNum}
                onChange={(e) => setContactNum(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Email </Form.Label>
              <Form.Control
                type="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date of birth </Form.Label>
              <Form.Control
                type="date"
                placeholder="date of birth"
                value={dob}
                onChange={(e) => setdob(e.target.value)}
              />
            </Form.Group>
    
            <Button variant="primary" type="submit" onClick={handleStudentCreate}>
              Submit
            </Button>
          </Form>
          <a href="/login">Sign up</a>
        </div>
  )
}

export default CreateStudent
