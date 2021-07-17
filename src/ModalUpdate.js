import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Select from 'react-select'

const ModalUpdate = (props) => {
  let clothe = props.clothe
  let tempClothe = {
    "id": clothe.id,
    "name": clothe.name,
    "description": clothe.description,
    "price": clothe.price,
    "color": clothe.color,
    "category": clothe.category,
    "pictures": clothe.pictures,
    "size": clothe.size,
    "tags":clothe.tags 
  }
  const categoryChange = (e) => {
    tempClothe.category = e.value
  }
  const onValueChange = (event, value) => {
    switch (value) {
      case "name":
        tempClothe.name = event.target.value
        break;
      case "desc":
        tempClothe.description = event.target.value
        break;
      case "price":
        tempClothe.price = event.target.value * 1
        break;
      case "color":
        tempClothe.color = event.target.value
        break;
      case "category":
        tempClothe.category = event.target.value
        break;
      case "size":
        tempClothe.size = event.target.value.replaceAll(' ', '').split(',')
        break;
      case "pictures":
        tempClothe.pictures = event.target.value.replaceAll(' ', '').split('\n')
        break;
      case "tags":
        tempClothe.tags = event.target.value.replaceAll(' ', '').split(',')
        break;
      default:
        return null
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
          Edito te dhenat per: {clothe.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group onChange={(event) => onValueChange(event, "name")} className="mb-3" >
            <Form.Label>Name:</Form.Label>
            <Form.Control defaultValue={clothe.name} />
          </Form.Group>
          <Form.Group onChange={(event) => onValueChange(event, "desc")} className="mb-3" >
            <Form.Label>Description:</Form.Label>
            <Form.Control defaultValue={clothe.description} />
          </Form.Group>
          <Form.Group onChange={(event) => onValueChange(event, "price")} className="mb-3" >
            <Form.Label>Price:</Form.Label>
            <Form.Control defaultValue={clothe.price} type="number" />
          </Form.Group>
          <Form.Group onChange={(event) => onValueChange(event, "color")} className="mb-3" >
            <Form.Label>Color:</Form.Label>
            <Form.Control defaultValue={clothe.color} />
          </Form.Group>
          <Form.Label>Category</Form.Label>
          <Select
            defaultValue={{ label: clothe.category, value: clothe.category }} 
            placeholder="Lloji i veshjes"
            name="categories"
            options={props.categories}
            className="basic-multi-select"
            onChange={categoryChange}
          />
          <Form.Group onChange={(event) => onValueChange(event, "tags")} className="mb-3" >
            <Form.Label>Tags:</Form.Label>
            <Form.Control defaultValue={clothe.tags} />
          </Form.Group>
          <Form.Group onChange={(event) => onValueChange(event, "pictures")} className="mb-3" >
            <Form.Label>Pictures:</Form.Label>
            <Form.Control defaultValue={clothe.pictures} as="textarea"/>
          </Form.Group>
          <Form.Group onChange={(event) => onValueChange(event, "size")} className="mb-3" >
            <Form.Label>Sizes:</Form.Label>
            <Form.Control defaultValue={clothe.size} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
         <Button variant="success" onClick={(event)=>props.onHide(event,false,tempClothe)}>SAVE</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUpdate