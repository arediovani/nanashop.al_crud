import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
const ModalUpdate = (props) => {
  let tempClothe = {
    "id": 0,
    "name": "",
    "description": "",
    "price": 0,
    "color": "",
    "category": "",
    "pictures": [
    ],
    "size": [
    ],
    "tags": [
    ]
  }
  const onValueChange = (key, value) => {
    switch (key) {
      case "name":
        tempClothe.name = value
        break;
      case "desc":
        tempClothe.desc = value
        break;
      case "price":
        tempClothe.price = value
        break;
      case "color":
        tempClothe.color = value
        break;
    }

  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edito te dhenat per: {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name:</Form.Label>
            <Form.Control value={props.name} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description:</Form.Label>
            <Form.Control value={props.description} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price:</Form.Label>
            <Form.Control value={props.price} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUpdate